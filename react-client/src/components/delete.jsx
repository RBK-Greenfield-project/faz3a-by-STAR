import ReactDOM from 'react-dom';
import React from 'react';
import $ from 'jquery';
import Axios from 'axios';
class Delete extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        id:'',
        items: []
      }
    }
     delete(id) {
       var that = this.state.id;
        console.log(`${that} was deleted`);
       $.ajax({
         type:'delete',
         url:'/delete1',
          contentType: "application/json",
          data: JSON.stringify({id:that}),
        success: (data) => {
           console.log('pass')
         },
    })};

    onChange (e) {
      console.log("change was made")
      this.setState({
       id: e.target.value
      });
    }
    render () {
      return (
      <div >
      <label>enter your name</label>
        <input   onChange={this.onChange.bind(this)}  />
        <button onClick={this.delete.bind(this)}> Delete </button>
      </div>)
    }
  }
export default Delete ;