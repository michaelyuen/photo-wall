import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import '../scss/main';

@Component({
	selector: 'app',
	templateUrl: 'app.html',
	styleUrls: ['app.scss']
})
export class AppComponent {

	constructor(
		private store: Store<any>
	) {
	}
}
