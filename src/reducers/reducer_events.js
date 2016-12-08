import {FETCH_EVENT, FETCH_EVENTS} from '../actions/index';

const INITIAL_STATE = { all: [], event: null};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case FETCH_EVENTS: return {...state, all: action.payload.data.items, event: null};
		case FETCH_EVENT: return { ...state, event: action.payload.data };
		default: return state;
	}

}