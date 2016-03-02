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
          <a href="#" className={`${styles.icon} ${styles.iconBorder} ${styles.facebook}`}>
            facebook</a>
          <a href="#" className={`${styles.icon} ${styles.iconBorder} ${styles.twitter}`}>
            twitter</a>
          <a href="#" className={`${styles.icon} ${styles.iconBorder} ${styles.googleplus}`}>
            google+</a>
          <a href="#" className={`${styles.icon} ${styles.iconBorder} ${styles.github}`}>
            github</a>
          <a href="#" className={`${styles.icon} ${styles.iconBorder} ${styles.rss}`}>
            rss</a>
        </div>
    </Parallax>
  </div>
);

export default Name;
