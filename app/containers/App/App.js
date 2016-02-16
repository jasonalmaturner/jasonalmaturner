import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../store/configureStore';
import styles from './App.css';
import Name from '../../components/Name/Name';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <div className={styles.mainContainer}>
        <Name />
      </div>
    );
  }
}
