import ReactDOM from 'react-dom';
import React from 'react';
import $ from 'jquery';
import Axios from 'axios';
class Delete extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title:'',
        items: []
      }
    }
     delete(title) {
       var that = this.state.title;
        console.log(`${that} was deleted`);
       $.ajax({
         type:'delete',
         url:'/delete1',
          contentType: "application/json",
          data: JSON.stringify({title:that}),
        success: (data) => {
           console.log('pass')

         },
    })};

    onChange (e) {
      console.log("change was made")
      this.setState({
       title: e.target.value
      });
    }
    render () {
      return (
      <div >
      <label>Enter your title  please</label>
        <input   onChange={this.onChange.bind(this)}  />

      <button onClick={this.delete.bind(this)}> Delete </button>
      </div>)
    }
  }
export default Delete ;
//