import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Search from './components/aboud.jsx'
import Update from './components/taghreed.jsx'
import Add from './components/sara.jsx'
import Navbar from './components/navbar.jsx'

function App (){
  return (
    <Router>
      <div className="container">

      <br/>
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Update}/>
          <Route path="/aboud" component={Add}/>
          <Route path="/sara" component={Search}/>
        </Switch>

      </div>
    </Router>
  );
}



ReactDOM.render( <App/>, document.getElementById('app'));


