import React, { PropTypes } from 'react';
import styles from './SendEmail.css';
import Select from 'react-select';
import { complimentsOptions } from './compliments';

const SendEmail = ({ sendEmail, handleClick, handleOptions, compliments }) => {
  let message;
  let fromName;
  let fromEmail;
  let selectedCompliments = [];
  return (
    <div className={styles.formContainer}>
      <form className={styles.emailForm} onSubmit={e => {
        handleClick(e);
        sendEmail(message.value, fromName.value, fromEmail.value);
        message.value = '';
        fromName.value = '';
        fromEmail.value = '';
      }}>
        <div className={styles.title}>
          Send me a message, jokes, puns, stories, and/or compliments.
        </div>
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
          <Select

            placeholder='Pick as many compliments as you can'
            multi={true}
            value={compliments}
            options={complimentsOptions}
            onChange={handleOptions}
            className={styles.select}
           />
          <input className={styles.submitButton} type='submit' value='Send' />
      </form>
    </div>
  );
};

SendEmail.propTypes = {
  sendEmail: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  handleOptions: PropTypes.func.isRequired,
};

export default SendEmail;
