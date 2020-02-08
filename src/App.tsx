import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import DataEntry from './components/DataEntry/DataEntry';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <DataEntry />
      </div>
    );
  }
}