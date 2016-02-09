import React from 'react';
import styles from './Name.css';

const Name = () => (
  <div className={styles.contentContainer}>
    <div className={styles.contents}>
      <img className={styles.profilePic} src='images/profile_center.jpg' />
      <h1 className={styles.myName}>Jason Turner</h1>
    </div>
  </div>
);

export default Name;
