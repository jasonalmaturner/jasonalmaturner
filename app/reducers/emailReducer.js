import {
  REQUEST_SEND_EMAIL, RECEIVE_RESPONSE, HANDLE_EMAIL_ERROR
} from '../actions/emailactions';

export function sendEmail(state = {
  isSending: false,
  error: null
})
