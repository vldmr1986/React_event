import axios from 'axios';
const ROOT_URL = 'http://api.itboost.org:82/app_dev.php/api/events';

export const FETCH_EVENTS = 'FETCH_EVENTS';
export const FETCH_EVENT = 'FETCH_EVENT';


export function fetchEvents (){
	const request = axios.get(ROOT_URL);
	return {
		type: FETCH_EVENTS,
		payload: request
	};
}

export function fetchEvent (id) {
	const request = axios.get(`${ROOT_URL}/${id}`);
	return {
		type: FETCH_EVENT,
		payload: request
	};
}
