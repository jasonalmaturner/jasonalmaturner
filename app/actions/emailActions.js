import axios from 'axios';

export const REQUEST_SEND_EMAIL = 'REQUEST_SEND_EMAIL';
export const RECEIVE_RESPONSE = 'RECEIVE_RESPONSE';
export const HANDLE_EMAIL_ERROR = 'HANDLE_EMAIL_ERROR';

export function requestSendEmail(message, fromName, fromEmail) {
  return {
    type: SEND_EMAIL,
    message,
    fromName,
    fromEmail,
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

export function sendEmail(message, fromName, fromEmail) {
  return dispatch => {
    dispatch(requestSendEmail(message, fromName, fromEmail));
    axios.post('/api/email', {
      message,
      fromName,
      fromEmail,
    }).then(res => {
      return dispatch(receiveResponse(res.data.status, res.data.reject_reason));
    }).catch(err => {
      console.log('email error', err);
      return dispatch(handleEmailError(err.data));
    });
  };
}
