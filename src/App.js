import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard'
import Form from './component/Form/Form'
import Header from './component/Header/Header'
import {Switch, Route} from 'react-router-dom'


class App extends Component {
  constructor(){
    super()
      
      this.state = {
        inventory: []
      }
  }
  render() {
    return (
      <div className="App">
        <Dashboard />
        <Form />
        <Header />
        <Switch>
          <Route exact path='/' component={Form}></Route>
          <Route path="/details/:id" component={Product}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
