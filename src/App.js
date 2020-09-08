import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import Display from './components/DisplayForm/display';
import Navbar from './components/Navbar/Navbar';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Form /> */}
      {/* <Display /> */}
      <Switch>
      <Route path='/' exact component={Form} />
      <Route path='/details' component={Display} />
      </Switch>
    </div>
  );
}

export default App;
