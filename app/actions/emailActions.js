import axios from 'axios';
import _ from 'lodash';

export const REQUEST_SEND_EMAIL = 'REQUEST_SEND_EMAIL';
export const RECEIVE_RESPONSE = 'RECEIVE_RESPONSE';
export const HANDLE_EMAIL_ERROR = 'HANDLE_EMAIL_ERROR';
export const DISPLAY_RESPONSE = 'DISPLAY_RESPONSE';

export function requestSendEmail() {
  return {
    type: REQUEST_SEND_EMAIL,
  };
}

export function receiveResponse(status, rejectReason) {
  return {
    type: RECEIVE_RESPONSE,
    status,
    rejectReason,
  };
}

export function handleEmailError(error) {
  return {
    type: HANDLE_EMAIL_ERROR,
    error,
  };
}

export function displayResponse(bool = false) {
  return {
    type: DISPLAY_RESPONSE,
    bool,
  };
}

let timeoutId;
function toggleResponse() {
  return (dispatch, getState) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    dispatch(displayResponse(true));
    timeoutId = setTimeout(() => {
      dispatch(displayResponse(false));
    }, 8000);
  };
}

export function sendEmail(message, fromName, fromEmail) {
  return dispatch => {
    dispatch(requestSendEmail(message, fromName, fromEmail));
    axios.post('/api/email', {
      message,
      fromName,
      fromEmail,
    }).then(res => {
      dispatch(receiveResponse(res.data.status, res.data.reject_reason));
      return dispatch(toggleResponse());
    }).catch(err => {
      console.log('email error', err);
      dispatch(handleEmailError(err.data));
      return dispatch(toggleResponse());
    });
  };
}
