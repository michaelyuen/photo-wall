import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppStore, AppConfigService, AppComponent } from './index';
import { PhotoGalleryModule } from './components/photo-gallery/index';

const IMPORTS: Array<any> = [
	BrowserModule,
	HttpModule,
	PhotoGalleryModule,
	StoreModule.provideStore(AppStore)
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
