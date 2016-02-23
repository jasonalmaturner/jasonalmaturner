import { combineReducers } from 'redux';
import {
  REQUEST_EVENTS, RECEIVE_EVENTS,
  SELECT_USER, INVALIDATE_USER, HANDLE_ERROR } from '../actions/actions';

export function selectedUser(state = 'jasonalmaturner', action) {
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
  error: false,
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
    case HANDLE_ERROR:
      return {
        ...state,
        ...{
          isFetching: false,
          didInvalidate: false,
          error: action.err,
        },
      };
    default:
      return state;
  }
}

export function eventsByUser(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_USER:
    case RECEIVE_EVENTS:
    case HANDLE_ERROR:

      // return {
      //   ...state,
      //   [action.user]: events(state[action.user], action),
      // };
    case REQUEST_EVENTS:
      return {
        ...state,
        [action.user]: events(state[action.user], action),
      };
    default:
      return state;
  }
}

// const gitReducer = combineReducers({
//   eventsByUser,
//   selectedUser,
// });
