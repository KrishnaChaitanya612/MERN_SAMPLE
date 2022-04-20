import logo from './logo.svg';
import React from 'react';
import Student from './components/student.js'
import './App.css';
import EditUser from './components/createStudent/edit.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
 
  return (
     <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Student} />
        <Route exact path="/edit/:id" component={EditUser} />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
