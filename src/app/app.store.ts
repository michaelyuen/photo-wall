import { compose } from '@ngrx/core';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { routerReducer, RouterState } from '@ngrx/router-store';

interface Global {
	environment: String,
	config: Object
}

const initialState: Global = {
	environment: ENV,
	config: null
}

function GlobalStore (state = initialState, {type, payload}: {type: string, payload: any }): Global {
	switch ( type ) {
		case 'SET_CONFIG':
			return Object.assign({}, state, payload);
		default:
			return state;
	}
}

export interface App extends RouterState, Global {}

export function AppStore( state: any, action: any ): ActionReducer<App> {
	const reducer = compose( combineReducers )({
		router: routerReducer,
		global: GlobalStore
	});
	return reducer(state, action)
}
