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
        <div className={`${styles.background} ${styles.background2}`}>
          <div className={styles.iconsContainer}>
            <a className={`${styles.icons} ${styles.facebook}`} href="#"><span>Facebook</span></a>
            <a className={`${styles.icons} ${styles.twitter}`} href="#"><span>Twitter</span></a>
            <a className={`${styles.icons} ${styles.github}`} href="#"><span>Github</span></a>
            <a className={`${styles.icons} ${styles.linkedIn}`} href="#"><span>LinkedIn</span></a>
          </div>
        </div>
    </Parallax>
  </div>
);

export default Name;
