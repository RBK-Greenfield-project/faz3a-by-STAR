import React from 'react';
import $ from 'jquery';
import ReactDOM from "react-dom";
import Button from '@material-ui/core/Button';




class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select:[],
      newData:[]
}
    this.showList = this.showList.bind(this)
    this.SearchItems = this.SearchItems.bind(this)
  }

  SearchItems(event) {
  var val=event.target.value
  this.setState({
  select:val
  })
    }


   showList(){
    $.ajax({

      type: "Get",
      url: "/search2",
      success: (data) => {
       this.setState({
         newData:data })

      },
      error:()=> {
      console.log('error')
                 }
            })
    }

  render () {
    return (<div>
<h1>Categories</h1>
<form>
        <h1>Hello</h1>
        <p>Enter your name:</p>
        <input
          type="text"
          onChange={this.SearchItems}
        />
      </form>


      <button  onClick={this.showList}>show category</button>
      <div> {this.state.newData.filter(elet=> this.state.select===(elet.name) ).map((ele,index) =>
       <li key={index}>{ele.name}{ele.email}{ele.phone}</li>)
     } </div>
        </div>)
        }
  }



export default Search