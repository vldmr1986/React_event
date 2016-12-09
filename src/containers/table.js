import React, {Component} from 'react';
import {connect} from 'react-redux';

class Table extends Component{
	constructor (props) {
		super(props);
		this.state = {mo$0: 0, mo$1: 0, mo$2: 0, mo$3: 0, mo$4: 0, mo$5: 0, mo$6: 0, mo$7: 0, mo$8: 0, mo$9: 0, mo$10: 0, mo$11: 0,
			mo$12: 0, mo$13: 0, mo$14: 0, mo$15: 0, mo$16: 0, mo$17: 0, mo$18: 0, mo$19: 0, mo$20: 0, mo$21: 0, mo$22: 0, mo$23: 0,
			tu$0: 0, tu$1: 0, tu$2: 0, tu$3: 0, tu$4: 0, tu$5: 0, tu$6: 0, tu$7: 0, tu$8: 0, tu$9: 0, tu$10: 0, tu$11: 0,
			tu$12: 0, tu$13: 0, tu$14: 0, tu$15: 0, tu$16: 0, tu$17: 0, tu$18: 0, tu$19: 0, tu$20: 0, tu$21: 0, tu$22: 0, tu$23: 0,
			we$0: 0, we$1: 0, we$2: 0, we$3: 0, we$4: 0, we$5: 0, we$6: 0, we$7: 0, we$8: 0, we$9: 0, we$10: 0, we$11: 0,
			we$12: 0, we$13: 0, we$14: 0, we$15: 0, we$16: 0, we$17: 0, we$18: 0, we$19: 0, we$20: 0, we$21: 0, we$22: 0, we$23: 0,
			th$0: 0, th$1: 0, th$2: 0, th$3: 0, th$4: 0, th$5: 0, th$6: 0, th$7: 0, th$8: 0, th$9: 0, th$10: 0, th$11: 0,
			th$12: 0, th$13: 0, th$14: 0, th$15: 0, th$16: 0, th$17: 0, th$18: 0, th$19: 0, th$20: 0, th$21: 0, th$22: 0, th$23: 0,
			fr$0: 0, fr$1: 0, fr$2: 0, fr$3: 0, fr$4: 0, fr$5: 0, fr$6: 0, fr$7: 0, fr$8: 0, fr$9: 0, fr$10: 0, fr$11: 0,
			fr$12: 0, fr$13: 0, fr$14: 0, fr$15: 0, fr$16: 0, fr$17: 0, fr$18: 0, fr$19: 0, fr$20: 0, fr$21: 0, fr$22: 0, fr$23: 0,
			sa$0: 0, sa$1: 0, sa$2: 0, sa$3: 0, sa$4: 0, sa$5: 0, sa$6: 0, sa$7: 0, sa$8: 0, sa$9: 0, sa$10: 0, sa$11: 0,
			sa$12: 0, sa$13: 0, sa$14: 0, sa$15: 0, sa$16: 0, sa$17: 0, sa$18: 0, sa$19: 0, sa$20: 0, sa$21: 0, sa$22: 0, sa$23: 0,
			su$0: 0, su$1: 0, su$2: 0, su$3: 0, su$4: 0, su$5: 0, su$6: 0, su$7: 0, su$8: 0, su$9: 0, su$10: 0, su$11: 0,
			su$12: 0, su$13: 0, su$14: 0, su$15: 0, su$16: 0, su$17: 0, su$18: 0, su$19: 0, su$20: 0, su$21: 0, su$22: 0, su$23: 0
		};
	this.renderHours = this.renderHours.bind(this);
	this.onHourClick = this.onHourClick.bind(this);
	this.onAllClick = this.onAllClick.bind(this);
}

componentWillMount(){
	this.refactorSchedule(this.props.schedule);
}

	renderHours(day, hour){
		return this.state[day+'$'+hour];
	}
	onHourClick(day,indexHour) {
		event.preventDefault();
		this.setState({[day+'$'+indexHour]: 1- this.state[day+'$'+indexHour]});
	}
	onAllClick(day,hoursInDay) {
		let arr=[];
		for (let i=0; i<hoursInDay; i++) {
			arr.push(this.state[day+'$'+i]);
		}
		let autoComplete = (arr.indexOf(0)>-1)? 1 : 0;
		for (let i=0; i<hoursInDay; i++) {
			this.setState({
				[day+'$'+i]: autoComplete
			});
		} 

	}
	refactorSchedule(recievedData) {
		Object.keys(recievedData).map((day)=>{
			recievedData[day].forEach((time)=>{
				let beginBusy = Math.floor(time.bt/60);
				let endBusy = Math.floor(time.et/60);
				for (let i=beginBusy; i<=endBusy; i++ )
				{ this.setState({[day+'$'+i]: 1})}
			});

		});
		
	}


	render(){
		const arr=['mo', 'tu','we','th','fr', 'sa', 'su'];
		const arr2=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
		const hoursInDay = arr2.length;


		return (
			<table>
			<thead>
				<tr>
					<td>Days </td>
					<td>ALL</td>
					<td colSpan='3'>00:00 </td>
					<td colSpan='3'>03:00 </td>
					<td colSpan='3'>06:00 </td>
					<td colSpan='3'>09:00 </td>
					<td colSpan='3'>12:00 </td>
					<td colSpan='3'>15:00 </td>
					<td colSpan='3'>18:00 </td>
					<td colSpan='3'>21:00 </td>
				</tr>
			</thead>
			<tbody>
				{arr.map((day,indexDay)=>{ return (
					<tr key={day}>
						<td >{day}</td>
						<td onClick={(e)=>{ console.log(e);
							this.onAllClick(day, hoursInDay)}}
						>ALL</td>
						{arr2.map((hour, indexHour)=>{
							return (
								<td 
									className={['', 'busy'][this.state[day+'$'+hour]]}
									onMouseDown={()=>{event.preventDefault();
										this.onHourClick(day, indexHour )}}
									key={hour}>
								</td>);
						})}
					</tr>
					)})}
			</tbody>
			</table>);
	}
}

function mapStateToProps(state){
	return {
		schedule: state.schedule
	};
}
export default connect(mapStateToProps)(Table);