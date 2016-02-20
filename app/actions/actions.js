import axios from 'axios';

export const REQUEST_EVENTS = 'REQUEST_EVENTS';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const SELECT_USER = 'SELECT_USER';
export const INVALIDATE_USER = 'INVALIDATE_USER';
export const HANDLE_ERROR = 'HANDLE_ERROR';

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

export function handleError(err) {
  return {
    type: HANDLE_ERROR,
    err,
  };
}

function fetchEvents(user = 'jasonalmaturner') {
  return dispatch => {
    dispatch(requestEvents(user));
    axios.get(`api/events?user=${user}`).then(res =>
      dispatch(receiveEvents(user, res.data))
    ).catch(err => {
      console.log(55555, err);
      return dispatch(handleError(err.data));
    });
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
      return dispatch(fetchEvents(user));
    }
  };
}
