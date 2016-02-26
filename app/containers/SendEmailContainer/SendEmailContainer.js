import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { sendEmail } from '../../actions/emailActions';
import styles from './SendEmailContainer.css';
import SendEmail from '../../components/SendEmail/SendEmail';
import DisplayEmailResponse from '../../components/DisplayEmailResponse/DisplayEmailResponse';

class SendEmailContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSend = this.handleSend.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  handleSend(message, fromName, fromEmail) {
    this.props.dispatch(sendEmail(message, fromName, fromEmail));
  }

  handleRefreshClick(e) {
    e.preventDefault();
  }

  render() {
    const { error, isSending, rejectReason, status, displayResponse } = this.props;
    return (
      <div className={styles.mainContainer}>
        <SendEmail
          sendEmail={this.handleSend}
          handleClick={this.handleRefreshClick} />
        <DisplayEmailResponse
          isSending={isSending}
          error={error}
          status={status}
          rejectReason={rejectReason}
          displayResponse={displayResponse} />
      </div>
    );
  }
}

SendEmailContainer.propTypes = {
  error: PropTypes.object,
  isSending: PropTypes.bool.isRequired,
  rejectReason: PropTypes.string,
  status: PropTypes.string,
};

function mapStateToProps(state) {
  const { sendEmail } = state;
  const {
    error,
    isSending,
    rejectReason,
    status,
    displayResponse,
  } = sendEmail || {
    error: null,
    isSending: false,
    status: null,
    rejectReason: null,
    displayResponse: false,
  };

  return {
    error,
    isSending,
    rejectReason,
    status,
    displayResponse,
  };
}

export default connect(mapStateToProps)(SendEmailContainer);
