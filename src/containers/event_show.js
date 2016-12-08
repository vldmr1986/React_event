import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {fetchEvent} from '../actions/index';

class EventShow extends Component {
	componentWillMount(){
		this.props.fetchEvent(this.props.params.id);
	}
	
	render(){
		const {event} = this.props;

		console.log('gj',event);
		return (
			<div>
			<div className='img-wraper'>
				<img src={`${event && event.avatar ? event.avatar : 'src/img/no-avatar-icon.jpg'}`} alt=""/>
				<p>{`${event && event.createdBy && event.createdBy.lastname ? event.createdBy.lastname : ''}`}</p>
				<p>{`${event && event.createdBy && event.createdBy.firstname ? event.createdBy.firstname : ''}`}</p>
			</div>
			<h1>{`${event && event.name ? event.name : ''}`}</h1>
			<h3>{`${event && event.shortDescription ? event.shortDescription: ''}`}</h3>
			<h5>{`${event && event.description ? event.description : ''}`}</h5>
			<h6>{`Начало: ${event && event.eventStartDate ? event.eventStartDate : ''}`}</h6>
			<h6>{`Завершение:  ${event && event.eventEndDate ? event.eventEndDate : ''}`}</h6>
			<h6>{`Сумма:  ${event &&  event.money && event.money.amount ? event.money.amount : ''} ${event &&  event.money && event.money.currency ? event.money.currency : ''}`}</h6>
			
			
			<Link to='/' className='btn btn-primary pull-xs-center'>Back</Link>

			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		event: state.events.event
	};
}

export default connect(mapStateToProps, {fetchEvent})(EventShow);
