import { eventsByUser, selectedUser } from './gitReducer';
import { sendEmail } from './emailReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  eventsByUser,
  selectedUser,
  sendEmail,
});

export default rootReducer;
