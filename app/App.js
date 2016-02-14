import React from 'react';
import ReactDOM from 'react-dom';
import styles from './App.css';
import Name from './components/Name/Name';

const App = () => (
  <div className={styles.mainContainer}>
    <Name />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
