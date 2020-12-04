import React from 'react';

class SignOut extends React.Component {
  constructor(props) {
    super(props);
     }


  signout() {
  localStorage.clear()
  window.location = '/'
  }
  nosignout(){
    window.location ='/loggedIn'
  }





  render () {
    return (<div>
      <p>are you sure you want to sign out ?</p>

      <button onClick = {this.signout.bind(this)}>yes</button>
      <button onClick ={this.nosignout.bind(this)}>no</button>
        </div>)
        }


}

export default SignOut