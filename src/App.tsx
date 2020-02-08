import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { NavTab } from "react-router-tabs";
import Header from './components/Header/Header';
import DataEntry from './components/DataEntry/DataEntry';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import 'react-router-tabs/styles/react-router-tabs.css';

export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <div className='navbar-wrapper'>
          <NavTab to="/dataentry">Data Entry</NavTab>
          <NavTab to="/dashboard">Dashboard</NavTab>
        </div>
  
        <Switch>
          <Route
            exact
            path='/'
            render={() => <Redirect to='/dataentry' />}
          />
          <Route path='/dataentry' component={DataEntry} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
        </div>
    );
  }
}