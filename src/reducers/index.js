import { combineReducers } from 'redux';
import events from './reducer_events';
import currentSchedule from './reducer_schedule';


const rootReducer = combineReducers({
  events:events,
  schedule: currentSchedule
});

export default rootReducer;
 