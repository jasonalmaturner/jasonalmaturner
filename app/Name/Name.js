import React from 'react';
import styles from './Name.css';

const Name = () => (
  <div className={styles.contentContainer}>
    <div className={styles.contents}>
      <img className={styles.profilePic} src='images/profile.jpg' />
      <h1>Jason Turner</h1>
    </div>
  </div>
);

export default Name;
