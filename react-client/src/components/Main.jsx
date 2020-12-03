
import React from "react";
import $ from "jquery";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  register(email, password) {
    // console.log(this.state);
    var email = this.state.email;
    var password = this.state.password;
    $.ajax({
      method: "POST",
      url: "/SignUp1",
      data: JSON.stringify({ email: email, password: password }),
      contentType: "application/json",
      success: (data) => {
        console.log("success" + data);
      },
      error: (xhr) => {
        if (xhr.status == 201) {
          this.success(null, "Created", xhr);
          return;
        }
      },
    });
  }
  handleChangeemail(event) {
    //  console.log(event.target.value)
    this.setState({
      email: event.target.value,
    });
  }
  handleChangepass(event) {
    //  console.log(event.target.value)
    this.setState({
      password: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <h1>sign up</h1>
        <input
          type="text"
          placeholder=" email"
          onChange={this.handleChangeemail.bind(this)}
        ></input>
        <input
          type="text"
          placeholder=" password"
          onChange={this.handleChangepass.bind(this)}
        ></input>
        <button
          id="btn"
          type="text"
          onClick={() => {
            this.register();
          }}
        >
          Add account
        </button>
      </div>
    );
  }
}
export default SignUp;