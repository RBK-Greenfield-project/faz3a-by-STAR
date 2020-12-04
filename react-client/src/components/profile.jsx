import React from "react";
import $ from "jquery";
import Delete from './delete.jsx'
import Update from './update.jsx'
class  User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userid:[],
      name:[],
      Data:[],
}}
      //gets the username and id
    showList(){
     $.ajax({
    type: "Get",
    url: "/signIN1",
    success: (data) => {
     this.setState({
        userid:data.user.result[0].id,
        name:data.user.result[0].email
      })
      },
    error:()=> {
    console.log('error')
               }
          })
      }
      ///gets all the items in the database
    showitems(){
      $.ajax({
       type: "Get",
      url: "/profile1",
      success: (data) => {
      console.log(data)
      this.setState({
      Data:data
      })
      },
    error:()=> {
    console.log('error')
               }
            })
        }

        render() {
      return (
      <div>welcome {this.state.name}
      <p>{this.state.userid}</p>
      <br/>
      <p>{this.state.name}</p>
      <button onClick= {this.showList.bind(this)}>view profile</button>
      <button onClick= {this.showitems.bind(this)}> items</button>
          {/* //brings all the data and compare them with the user id if it matches it will show his items */}
      <div> {this.state.Data.filter(elet=> this.state.userid=== elet.userId ).map((ele,index) =>
       <li key={index}> {ele.title}    {ele.description}   {ele.category} {ele.id} <Update/> <img src={ele.image} />   <Delete/></li>)
      } </div>
      </div>
      )}
    }


export default User;
// Registration.jsx