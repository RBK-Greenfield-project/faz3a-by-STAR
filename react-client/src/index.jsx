import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Signout from './components/signout.jsx';
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
import ProtectedRoute from './components/ProtectedRoute.jsx'



function App (){
  return (

    <Router>
      <div className="container">




        <br/>

        <Switch>


          <Route exact path="/" component={Homepage}/>
          <Route exact path="/Items" component={Items} />

          <Route path="/signIN" component={SignIn}/>
          <Route path="/SignUP" component={SignUP}/>
          <ProtectedRoute path="/profile" component={Profile} />
          <ProtectedRoute path="/loggedIn" component={LoggedIn} />
          <ProtectedRoute path="/upload" component={Upload} />
          <ProtectedRoute path="/Items3" component={Items2} />
          <ProtectedRoute path="/SignOut" component={Signout} />






        </Switch>

      </div>
    </Router>
  );
}



ReactDOM.render( <App/>, document.getElementById('app'));


