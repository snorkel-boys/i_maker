import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { Tabs } from './src/utils/navigation';
import { store } from './src/store/';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Tabs />
      </Provider>
    );
  }
}