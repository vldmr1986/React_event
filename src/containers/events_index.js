import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchEvents} from '../actions/index';
import {Link} from 'react-router';

class EventsIndex extends Component{
	componentWillMount(){
		this.props.fetchEvents();
	}
	renderEvents(){
		return this.props.events.map((event)=>{
					return (
						<li 
							className="list-group-item"
							key={event.id}
						>
							<Link to={`/${event.id}`}>{event.name}</Link>
						</li>
					);
				})

		
	}
	render(){
		console.log(this.props.events[0]);
		return(
			<ul className="list-group">
			<h3>События</h3>
				{this.renderEvents()}
			</ul>					
		);
	}
}

function mapStateToProps(state){
	return {
		events: state.events.all
	};
}
export default connect(mapStateToProps, {fetchEvents})(EventsIndex);