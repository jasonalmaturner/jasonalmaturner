import React from 'react';
import styles from './Name2.css';
import { Parallax, Background}  from 'react-parallax';

const Name = () => (
  <div className={styles.contentContainer}>
    <Parallax
      className={styles.parallax}
      strength={300}
      bgImage='images/bg.jpg'
      bgHeight='130%'
      bgWidth='auto'>
        <div className={styles.background}>
          This is a test
        </div>
    </Parallax>
  </div>
);

export default Name;
