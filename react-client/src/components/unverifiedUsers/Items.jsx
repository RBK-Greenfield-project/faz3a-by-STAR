import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Navbar2 from './navbar2.jsx'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Image from 'material-ui-image'
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';


class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['cars','ShowAll','small-business-for-sale',"food recipes","shoes",'clothes'],
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
    url: "/Items1",
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
      <h2 id='h2'>Please Choose A Category</h2>
        <select id='select' onChange={this.handleChange} >
        <option id='option' >choose category</option>
        <option id='option' value ='ShowAll' >{this.state.items[1]}</option>
         <option id='option' value ='cars'>{this.state.items[0]}</option>
           <option id='option' value='small-business-for-sale' >{this.state.items[2]}</option>
           <option id='option' value='food recipes' >{this.state.items[3]}</option>
           <option id='option' value='shoes' >{this.state.items[4]}</option>
           <option id='option' value='clothes' >{this.state.items[5]}</option>
      </select>


      <div id ='dy'> {this.state.newData.filter(elet=> this.state.select === elet.category || this.state.select === this.state.items[1] ).map((ele,index) => <ul id = 'ul' key={index}> <li id='lz'> <img id='image' src={ele.image} height='200' width='500' /> </li> <li id ='title'>{ele.title}</li> <li id ='list'>{ele.description} </li> <li id ='category'> {ele.category}</li> </ul>)
     } </div>
        </div>)
        }
  }

export default Items;