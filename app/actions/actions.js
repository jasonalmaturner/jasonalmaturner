import axios from 'axios';

export const REQUEST_EVENTS = 'REQUEST_EVENTS';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';

function requestEvents(user = 'jasonalmaturner') {
  return {
    type: REQUEST_EVENTS,
    user,
  };
}
