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

export function invalidateUser(user = 'jasonalmaturner') {
  return {
    type: INVALIDATE_USER,
    user,
  };
}

export function requestEvents(user = 'jasonalmaturner') {
  return {
    type: REQUEST_EVENTS,
    user,
  };
}

export function receiveEvents(user = 'jasonalmaturner', events) {
  return {
    type: RECEIVE_EVENTS,
    user,
    events,
    receivedAt: Date.now(),
  };
}

function fetchEvents(user = 'jasonalmaturner') {
  return dispatch => {
    dispatch(requestEvents(user));
    axios.get(`api/events?user=${user}`).then(res => dispatch(receiveEvents(user, res.data)));
  };
}

function shouldFetchEvents(state, user) {
  const posts = state.eventsByUser[user];
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  } else {
    return posts.didInvalidate;
  }
}

export function fetchEventsIfNeeded(user) {
  return (dispatch, getState) => {
    if (shouldFetchEvents(getState(), user)) {
      return dispatch(fetchEvents(users));
    }
  };
}
