import React, { PropTypes } from 'react';
import styles from './DisplayEmailResponse.css';

const DisplayEmailResponse = ({ error, displayResponse, status, rejectReason, isSending }) => {
  let response = 'neutral';
  switch (status) {
    case 'sent':
      response = 'good';
      break;
    case 'queued' || 'scheduled':
      response = 'neutral';
      break;
    case 'rejected' || 'invaled':
      response = 'error';
      break;
    default:
      response = 'neutral';
      break;
  }
  return (
    <div className={styles.mainContainer}>
      {isSending && <img src='images/ripple3.gif'/>}
      <div className={styles[response]}>{displayResponse && status && `Message ${status}`}</div>
      <div className={styles.error}>{displayResponse && rejectReason}</div>
      <div className={styles.error}>{displayResponse && error && 'Something bad happened'}</div>
    </div>
  );
};

DisplayEmailResponse.propTypes = {
  isSending: PropTypes.bool.isRequired,
  error: PropTypes.object,
  displayResponse: PropTypes.bool.isRequired,
  status: PropTypes.string,
  rejectReason: PropTypes.string,
};

export default DisplayEmailResponse;
