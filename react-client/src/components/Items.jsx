import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Navbar2 from './navbar2.jsx'


class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['cars','business','ShowAll'],
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
      <h2>Please Choose A Category</h2>
        <select onChange={this.handleChange} >
        <option value ='ShowAll' >{this.state.items[2]}</option>
         <option  value ='cars'>{this.state.items[0]}</option>
           <option value='business' >{this.state.items[1]}</option>
      </select>


      <div> {this.state.newData.filter(elet=> this.state.select === elet.category || this.state.select === this.state.items[2] ).map((ele,index) => <div key={index}>{ele.id}<br/>{ele.title} <br/>{ele.description} <br/>{ele.category}<br/>  </div>)
     } </div>
        </div>)
        }
  }

export default Items;