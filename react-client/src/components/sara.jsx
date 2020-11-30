import React from "react";
import $ from 'jquery';

class Add extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        titles: '',
        newArray:[]
      }
    }
    componentDidMount(titles) {
       console.log (this.state)
       var title= this.state.titles;
      //  var des= this.state.des;
        $.ajax({
          method:'POST',
          url:'/insert',
          data:JSON.stringify({title}),
          contentType: "application/json",
          success: (data) => {
            console.log("success"+data)
          },
          error: (xhr) => {
            if (xhr.status===201) { this.success(null, "Created", xhr); return; }
          }
        });
      }
        handleChange(event){
          //  console.log(event.target.value)
          this.setState({
            titles: event.target.value
           })
          }
          // handleChange(event){
          //   //  console.log(event.target.value)
          //   this.setState({
          //   des: event.target.value
          //    })
          //   }
    render () {
      return (<div>
        <h1>adding</h1>
        <input type="text" placeholder =" title"  onChange ={this.handleChange.bind(this)}></input>
        {/* <input type="text" placeholder =" description"  onChange ={this.handleChange.bind(this)}></input> */}
        <button  id="btn" type="text"   onClick={()=>{this.componentDidMount()}}>Add </button>
      </div>)
    }
  }
  export default  Add;