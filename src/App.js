import React from 'react';
import './App.css';
import Nav from './Nav'
import LoginPage from './LoginPage'
import './css/Style.css'
import SubmitRecord from './SubmitRecord';
import SearchRecord from './SearchRecord';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  
  return (
    <Router>
    <div className="App">

   <Nav/>
  <Switch>
  
  <Route path="/SearchRecord" component={SearchRecord}/>
  <Route path="/LoginPage" component={LoginPage}/>
   <Route path="/SubmitRecord" component={SubmitRecord}/>
   </Switch>
</div>
</Router>
  );
}

export default App;
