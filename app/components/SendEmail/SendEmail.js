import React, { PropTypes } from 'react';
import styles from './SendEmail.css';

const SendEmail = ({ sendEmail, handleClick }) => {
  let message;
  let fromName;
  let fromEmail;
  return (
    <div>
      <form onSubmit={e => {
        handleClick(e);
        sendEmail(message.value, fromName.value, fromEmail.value);
        message.value = '';
        fromName.value = '';
        fromEmail.value = '';
      }}>
        <input type='email' ref={node => {

          fromEmail = node;
        }} placeholder='Enter your email address'/>
        <input type='text' ref={node => {

          fromName = node;
        }} placeholder='Enter your name'/>
        <textarea type='text' ref={node => {

          message = node;
        }} placeholder='Enter your message' />
        <input type='submit' value='Send' />
      </form>
    </div>
  );
};

SendEmail.propTypes = {
  sendEmail: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SendEmail;
