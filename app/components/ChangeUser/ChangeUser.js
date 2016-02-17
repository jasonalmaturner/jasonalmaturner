import React, { PropTypes } from 'react';
import styles from './ChangeUser.css';

const ChangeUser = ({ searchUser, handleClick }) => {
  let input;
  return (
    <div>
      <form onSubmit={(e) => {
        handleClick(e);
        searchUser(input.value);
        input.value = '';
      }}>
        <input ref={node => {

          input = node;
        }
        } type='text' placeholder='Enter GitHub username' />
      <input type='submit' value='Submit'/>
      </form>
    </div>
  );
};

ChangeUser.propTypes = {
  searchUser: PropTypes.func.isRequired,
};

export default ChangeUser;