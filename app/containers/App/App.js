import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';
import styles from './App.css';
import Name from '../../components/Name2/Name2';

// import GitEvents from '../GitEvents/GitEvents';
// import { IntlProvider } from 'react-intl';
import SendEmailContainer from '../SendEmailContainer/SendEmailContainer';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div className={styles.mainContainer}>
      <Name />
      <SendEmailContainer />
    </div>
  </Provider>
);

export default App;
