import axios from 'axios';

export const REQUEST_EVENTS = 'REQUEST_EVENTS';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const SELECT_USER = 'SELECT_USER';
export const INVALIDATE_USER = 'INVALIDATE_USER';

export function selectUser(user = 'jasonalmaturner') {
  return {
    type: SELECT_USER,
    user,
  };
}

export function requestEvents(user = 'jasonalmaturner') {
  return {
    type: REQUEST_EVENTS,
    user,
  };
}

export function receiveEvents(user, json) {
  return {
    type: RECEIVE_EVENTS,
    user,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now(),
  };
}
