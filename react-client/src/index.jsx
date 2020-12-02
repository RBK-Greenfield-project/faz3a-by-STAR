import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Search from './components/aboud.jsx';
import signIN from './components/signIN.jsx';
import SignUP from './components/SignUP.jsx';
import Navbar from './components/navbar.jsx';
import Homepage from './components/Homepage.jsx';
import Items from './components/Items.jsx';
import Delete from './components/delete.jsx';
import Button from '@material-ui/core/Button';
import Upload from './components/upload.jsx';
import Update from './components/update.jsx';

function App (){
  return (

    <Router>
      <div className="container">




        <br/>

        <Switch>


          <Route exact path="/" component={Homepage}/>
          <Route exact path="/Items" component={Items} />
          <Route path="/login" component={signIN}/>
          <Route path="/signup" component={SignUP}/>
          <Route path="/delete" component={Delete}/>
          <Route path="/upload" component={Upload}/>
          <Route path="/update" component={Update}/>



        </Switch>

      </div>
    </Router>
  );
}



ReactDOM.render( <App/>, document.getElementById('app'));


