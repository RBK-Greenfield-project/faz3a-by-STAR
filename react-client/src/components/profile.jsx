import React from "react";
import $ from "jquery";
import Delete from './delete.jsx'
class  User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userid:[],
      name:[],
      Data:[],
}}



showList(){
  $.ajax({

    type: "Get",
    url: "/signIN1",
    success: (data) => {

      console.log(data)
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
      <div> {this.state.Data.filter(elet=> this.state.userid=== elet.userId ).map((ele,index) =>
       <li key={index}>{ele.image}   {ele.title}    {ele.description}   {ele.category}  <Delete/></li>)
     } </div>


      </div>
      )}
    }


export default User;
// Registration.jsx