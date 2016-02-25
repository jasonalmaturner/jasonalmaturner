import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { sendEmail } from '../../actions/emailActions';
import styles from './SendEmail.css';

class SendEmail extends Component {
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
    const { error, isSending, rejectReason, status } = this.props;
    return (
      <div></div>
    );
  }
}
