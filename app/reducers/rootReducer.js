import { eventsByUser, selectedUser } from './gitReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  eventsByUser,
  selectedUser,
});

export default rootReducer;
