import React from 'react';
import styles from './Me.css';

const Me = () => (
  <div className={styles.meContainer} >
    <div className={styles.meContent} >
      <p className={styles.flexItem} >
      My name is Jason Turner. I was born and raised in
      Idaho. In an alternate life, I would have been a
      rancher. But, I'm not smart enough, dumb enough, or
      tough enough to be a rancher. Instead, I write code.
      I graduated with a degree in biology from Idaho State University,
      and I try to incorporate my interest and knowledge in
      science into my projects as much as possible and practical.
      </p>
      <p className={styles.flexItem} >
        My favorite cold cereal is a toss up between Corn Pops
        and Waffle Crisp. I floss my teeth every day. The Western
        Meadowlark has the prettiest song in comparison to other
        birds. The smell of sagebrush and Russian olive trees
        is sublime. Pie is almost always superior to cake. It's
        not that I don't know how to juggle, I just don't have
        the balls to do it. I almost always appreciate a pun.
        I like to spend my time birding, hiking, cross-country
        skiing, playing the guitar, binge watching The West Wing,
        baking cookies, and eating food with family and friends.
      </p>
    </div>
  </div>
);

export default Me;
