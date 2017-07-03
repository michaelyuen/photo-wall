import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStoreModule } from '@ngrx/router-store';

import { AppStore, AppConfigService, AppComponent, AppRoutingModule } from './index';

const IMPORTS: Array<any> = [
	AppRoutingModule,
	BrowserModule,
	HttpModule,
	StoreModule.provideStore(AppStore),
	RouterStoreModule.connectRouter()
];

if ( ENV === 'dev' ) {
	IMPORTS.push(StoreDevtoolsModule.instrumentOnlyWithExtension());
}

export function initialize( appConfigService: AppConfigService ) {
	return () => appConfigService.initialize();
}

@NgModule({
	imports: IMPORTS,
	declarations: [
		AppComponent
	],
	providers: [
		AppConfigService,
		{
			provide: APP_INITIALIZER,
			useFactory: initialize,
			deps: [AppConfigService],
			multi: true
		}
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}
