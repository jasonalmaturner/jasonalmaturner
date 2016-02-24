import {
  REQUEST_SEND_EMAIL, RECEIVE_RESPONSE, HANDLE_EMAIL_ERROR
} from '../actions/emailactions';

export function sendEmail(state = {
  isSending: false,
  error: null,
  status: null,
  rejectReason: null,
}, action) {
  switch (action.type) {
    case REQUEST_SEND_EMAIL:
      return {
        ...state,
        ...{
          isSending: true,
        },
      };
    case RECEIVE_RESPONSE:
      return {
        ...state,
        ...{
          
        }
      }
  }
}
