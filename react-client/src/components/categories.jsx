import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Navbar2 from './navbar2.jsx'


class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['cars','business'],
      select:[],
      newData:[]
}
    this.handleChange = this.handleChange.bind(this)
    this.handlepage = this.handlepage.bind(this)
  }

  handleChange(event) {
  var val=event.target.value
  this.setState({
  select:val
  })
  $.ajax({
    type: "Get",
    url: "/category1",
    success: (data) => {
     this.setState({
       newData:data })
    },
    error:()=> {
    console.log('error')
               }
          })
  }
  handlepage(){
    <Homepage/>
  }
   render () {
    return (<div>
      <Navbar2/>
      <h2>Please Choose A Category</h2>
        <select onChange={this.handleChange} >
        <option ></option>
         <option  value ='cars'>{this.state.items[0]}</option>
           <option value='business' >{this.state.items[1]}</option>
      </select>


      <div> {this.state.newData.filter(elet=> this.state.select===(elet.category) ).map((ele,index) => <li key={index}>{ele.id}<br/>{ele.title} <br/>{ele.description} <br/>{ele.category}<br/>  <button onClick={this.handlepage}>update</button></li>)
     } </div>
        </div>)
        }
  }

export default Category;