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
            <a
              className={`${styles.icons} ${styles.facebook}`}
              href='https://www.facebook.com/jasonalmaturner'
              target='_blank'><span>Facebook</span></a>
            <a
              className={`${styles.icons} ${styles.twitter}`}
              href='https://twitter.com/jasonalmaturner'
              target='_blank'><span>Twitter</span></a>
            <a
              className={`${styles.icons} ${styles.github}`}
              href='https://github.com/jasonalmaturner'
              target='_blank'><span>Github</span></a>
            <a
              className={`${styles.icons} ${styles.linkedIn}`}
              href='https://www.linkedin.com/in/jasonalmaturner'
              target='_blank'><span>LinkedIn</span></a>
          </div>
        </div>
    </Parallax>
  </div>
);

export default Name;
