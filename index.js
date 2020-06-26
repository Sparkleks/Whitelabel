/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import themeReducer from './src/redux/reducers/themeReducer';
import postReducer from './src/redux/reducers/postReducer';
import pinnedReducer from './src/redux/reducers/pinnedReducer';

const store = createStore(
  combineReducers({themeReducer, postReducer, pinnedReducer}),
  applyMiddleware(thunk),
);

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);
