import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main'
import {store} from './store';
import _ from 'lodash';

const {user,contacts,activeUser} = store.getState();


console.log(store.getState());

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Sidebar contacts={_.values(contacts.contacts)}/>
        <Main user={user} activeUser={activeUser}/>

      </div>
    );
  }
}

export default App;
