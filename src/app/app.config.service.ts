import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

const BASE_ENDPOINT_LOCAL = document.location.origin + '/src/app';
const CONFIG_ENDPOINT = `${BASE_ENDPOINT_LOCAL}/temp/app.config.json`;

@Injectable()
export class AppConfigService {
	constructor(
		private http: Http,
		private store: Store<any>
	) {}

	initialize = (): Promise<any> => {
		return Promise.all([
			this.loadStorage(),
			this.loadConfig()
		]);
	}

	loadStorage = () => {
		let user = JSON.parse(localStorage.getItem('user'));
		if( !!user) {
			this.store.dispatch({ type: 'SET_USER', payload: user });
		}
	}

	loadConfig = (): Promise<any> => {
		return this.http.get(CONFIG_ENDPOINT)
		//return this.http.get(`${API}${CONFIG_PATH}?token=${TOKEN}`)
			.toPromise()
			.then(
				res => this.store.dispatch({ type: 'SET_CONFIG', payload: { config: res.json() }}),
				//res => this.store.dispatch({ type: 'SET_CONFIG', payload: { config: res.json()[0] } }),
				error => console.error(error)
			);
	}
}
