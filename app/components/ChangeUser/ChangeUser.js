import React, { PropTypes } from 'react';
import styles from './ChangeUser.css';

const ChangeUser = ({ searchUser }) => (
  <div>
    <form onSubmit={searchUser}>
      <input ref='username' type='text' placeholder='Enter GitHub username' />
      <input type='submit' value='Submit' />
    </form>
  </div>
);

ChangeUser.propTypes = {
  searchUser: PropTypes.func.isRequired,
};

export default ChangeUser;
