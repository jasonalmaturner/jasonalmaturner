import React, { PropTypes } from 'react';
import styles from './DisplayEmailResponse.css';

const DisplayEmailResponse = ({ error, displayResponse, status, rejectReason }) => {

  return (
    <div>

    </div>
  );
};

DisplayEmailResponse.propTypes = {
  error: PropTypes.object,
  displayResponse: PropTypes.bool.isRequired,
  status: PropTypes.string,
  rejectReason: PropTypes.string,
};

export default DisplayEmailResponse;
