import {
  REQUEST_SEND_EMAIL, RECEIVE_RESPONSE, HANDLE_EMAIL_ERROR, DISPLAY_RESPONSE,
} from '../actions/emailActions';

export function sendEmail(state = {
  isSending: false,
  error: null,
  status: null,
  rejectReason: null,
  displayResponse: false,
}, action) {
  switch (action.type) {
    case REQUEST_SEND_EMAIL:
      return {
        ...state,
        ...{
          isSending: true,
          error: null,
          status: null,
          rejectReason: null,
          displayResponse: false,
        },
      };
    case RECEIVE_RESPONSE:
      return {
        ...state,
        ...{
          isSending: false,
          status: action.status,
          rejectReason: action.rejectReason,
        },
      };
    case HANDLE_EMAIL_ERROR:
      return {
        ...state,
        ...{
          isSending: false,
          error: action.error,
        },
      };
    case DISPLAY_RESPONSE:
      return {
        ...state,
        ...{
          displayResponse: action.bool,
        },
      };
    default:
      return state;
  }
}
