import React, { Component } from 'react';
import Gallery from './components/Gallery';
import MyProvider from './store/MyProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
          <Gallery></Gallery>
        </div>
      </MyProvider>
    );
  }
}

export default App;
