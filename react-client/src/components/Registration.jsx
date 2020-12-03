import React from "react";
import $ from "jquery";
import SignUP from './Main.jsx'

class signIN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: [],
      password: [],
      loginStatus:[],
      history:["james"]

    };
  }
  login(email, password) {
    // console.log(this.state);
    var email = this.state.email;
    var password = this.state.password;
    $.ajax({
      method: "POST",
      url: "/signIN1",
      data: JSON.stringify({ email, password }),
      contentType: "application/json",
      success: (data) => {
        this.setState({
          loginStatus:data.auth

        })
          // console.log(data)

        if (this.state.loginStatus===true){
          window.location = '/';
          }
          else{
            alert('you dont have an account')
          }
      },
      error: (xhr) => {
        if (xhr.status == 201) {
          this.success(null, "Created", xhr);

          return;
        }
      },
    });

    $.ajax({

      type: "Get",
      url: "/signIN1",
      success: (data) => {


      },
      error:()=> {
      console.log('error')
                 }
            })
    }










  handleChangeemail(event) {
    //  console.log(event.target.value)
    this.setState({
      email: event.target.value,
    });
  }
  handleChangepassword(event) {
    //  console.log(event.target.value)
    this.setState({
      password: event.target.value,
    });
  }
  render() {
    return (
      <div>

        <SignUP/>
        <h1>sign in</h1>
        <input
          type="text"
          placeholder=" email"
          onChange={this.handleChangeemail.bind(this)}
        ></input>
        <input
          type="text"
          placeholder=" password"
          onChange={this.handleChangepassword.bind(this)}
        ></input>

        <button
          id="btn"
          type="text"
          onClick={() => {
            this.login();
          }}
        >
          Add account
        </button>


      </div>
    );
  }
}
export default signIN;