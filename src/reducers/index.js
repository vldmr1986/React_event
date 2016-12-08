import { combineReducers } from 'redux';
import events from './reducer_events';


const rootReducer = combineReducers({
  events:events
});

export default rootReducer;
 