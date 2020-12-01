import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import Search from './components/aboud.jsx'
import AddingAndUpdate from './components/addingandupdate.jsx'
import signIN from './components/signIN.jsx'
import SignUP from './components/SignUP.jsx'
import Navbar from './components/navbar.jsx'
import Homepage from './components/Homepage.jsx'
function App (){
  return (

    <Router>
      <div className="container">



      <Navbar/>
        <br/>
        <Homepage/>
        <Switch>


          <Route path="/search" component={Search}/>
          <Route path="/signin" component={signIN}/>
          <Route path="/signup" component={SignUP}/>
          <Route path="/upload" component={AddingAndUpdate}/>


        </Switch>

      </div>
    </Router>
  );
}



ReactDOM.render( <App/>, document.getElementById('app'));


