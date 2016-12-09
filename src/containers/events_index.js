import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';


import {fetchEvents} from '../actions/index';

class EventsIndex extends Component{
	componentWillMount(){
		this.props.fetchEvents();
	}
	renderEvents(){

		return this.props.events.map((event)=>{

			return (
				<li 
				className="list-group-item"
				key={event.id}>
					<Link to={`/${event.id}`}>{event.name}</Link>
				</li>
			);
		});
	}
	
	render(){
		return(
			<ul className="list-group">
			<Link to='/table' className='btn btn-primary'>Go to Table</Link>
			<h3>События</h3>
				{this.renderEvents()}
			</ul>					
		);
	}
}

function mapStateToProps(state){
	return {
		events: state.events.all,
	};
}
export default connect(mapStateToProps, {fetchEvents})(EventsIndex);