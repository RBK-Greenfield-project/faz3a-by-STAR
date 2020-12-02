import React from "react";
import $ from "jquery";
import SignUP from './SignUP.jsx'
class signIN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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
            console.log('hey there!')
      },
      error: (xhr) => {
        if (xhr.status == 201) {
          this.success(null, "Created", xhr);

          return;
        }
      },
    });
    $.ajax({
      method: "get",
      url: "/signIN1",
      success: (data) => {
            console.log(data)
            // window.location = '/';
      },
      error: (xhr) => {
        if (xhr.status == 201) {
          this.success(null, "Created", xhr);

          return;
        }
      },
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