import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';
import styles from './App.css';
import Name from '../../components/Name/Name';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div className={styles.mainContainer}>
      <Name />
    </div>
  </Provider>
);

export default App;
