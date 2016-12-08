import React from 'react';
import {Route, IndexRoute} from 'react-router';
import { Link } from 'react-router';

import App from './components/app';
import EventShow from './containers/event_show';
import EventsIndex from './containers/events_index';

const Greeting = () => {
	return <div>OK</div>
}

export default (
	<Route path='/' component={App} >
		<IndexRoute component={EventsIndex} />
		<Route path='new' component={EventShow}/>
		<Route path='/:id' component={EventShow}/>

	</Route>


	
	
);