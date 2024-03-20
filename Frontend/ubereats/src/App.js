import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appStore from './utils/reduxStore/store';

function App() {
  return (
    <div className="App font-inter">
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;

