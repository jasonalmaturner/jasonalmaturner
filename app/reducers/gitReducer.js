import { combineReducers } from 'redux';
import { REQUEST_EVENTS, RECEIVE_EVENTS, SELECT_USER, INVALIDATE_USER } from '../actions/actions';

function selectedUser(state = 'jasonalmaturner', action) {
  switch (action.type) {
    case SELECT_USER:
      return action.user;
    default:
      return state;
  }
}

function events(state = {
  isFetching: false,
  didInvalidate: false,
  events: [],
}, action) {
  switch (action.type) {
    case INVALIDATE_USER:
      return {
        ...state,
        ...{
          didInvalidate: true,
        },
      };
    case REQUEST_EVENTS:
      return {
        ...state,
        ...{
          isFetching: true,
          didInvalidate: false,
        },
      };
    case RECEIVE_EVENTS:
      return {
        ...state,
        ...{
          isFetching: false,
          didInvalidate: false,
          events: action.events,
          lastUpdated: action.receiveEvents,
        },
      };
    default:
      return state;
  }
}

function eventsByUser(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_USER:
    case RECEIVE_EVENTS:
    case REQUEST_EVENTS:
      return {
        [action.user]: events(state[action.user], action),
      };
    default:
      return state;
  }
}

const gitReducer = combineReducers({
  eventsByUser,
  selectedUser,
});

export default gitReducer;
