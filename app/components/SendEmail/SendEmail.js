import React, { PropTypes } from 'react';
import styles from './SendEmail.css';

const SendEmail = ({ sendEmail, handleClick }) => {
  let message;
  let fromName;
  let fromEmail;
  return (
    <div className={styles.formContainer}>
      <form className={styles.emailForm} onSubmit={e => {
        handleClick(e);
        sendEmail(message.value, fromName.value, fromEmail.value);
        message.value = '';
        fromName.value = '';
        fromEmail.value = '';
      }}>
        <div className={styles.title}>Send me a message</div>
        <div className={styles.inputsContainer}>
          <input className={styles.input} type='email' ref={node => {

            fromEmail = node;
          }} placeholder='Enter your email address'/>
          <input className={styles.input} type='text' ref={node => {

            fromName = node;
          }} placeholder='Enter your name'/>
        </div>
          <textarea type='text' ref={node => {

            message = node;
          }} placeholder='Enter your message' />
          <input className={styles.submitButton} type='submit' value='Send' />
      </form>
    </div>
  );
};

SendEmail.propTypes = {
  sendEmail: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SendEmail;
