import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Search from './components/aboud.jsx';
import Navbar from './components/navbar.jsx';
import Homepage from './components/Homepage.jsx';
import Items from './components/Items.jsx';
import Delete from './components/delete.jsx';
import Button from '@material-ui/core/Button';
import Upload from './components/upload.jsx';
import Update from './components/update.jsx';
import Profile from "./components/profile.jsx"
import SignIn from './components/signIN.jsx'
import SignUP from './components/SignUP.jsx'
import LoggedIn from './components/loggedinpage.jsx'
import Items2 from './components/Itemslog.jsx'



function App (){
  return (

    <Router>
      <div className="container">




        <br/>

        <Switch>


          <Route exact path="/" component={Homepage}/>
          <Route exact path="/Items" component={Items} />
          <Route path="/upload" component={Upload}/>
          <Route path="/signIN" component={SignIn}/>
          <Route path="/SignUP" component={SignUP}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/loggedIn" component={LoggedIn}/>
          <Route path="/Items2" component={Items2} />





        </Switch>

      </div>
    </Router>
  );
}



ReactDOM.render( <App/>, document.getElementById('app'));


