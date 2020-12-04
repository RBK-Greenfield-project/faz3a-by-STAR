import React from "react";
import Axios from "axios";
import Button from '@material-ui/core/Button';

import $ from "jquery";
import { render } from "react-dom";
import { storage } from "./firbase.jsx";


class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      categories: ['cars','business'],
      category:[],
      userId:"",
      image:null,
      url :'',
      progress:0,
     };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
     this.handleAdd = this.handleAdd.bind(this);
  }
  // it addes the values of the input fileds in the states
   handleChange (e) {
        if (e.target.files[0]) {
            this.setState({
            image: e.target.files[0],
        })
      }
    }
    // it handles the upload of the picture in the firbase
    handleUpload () {
      var uploadTask = storage.ref(`images/${this.state.image.name}`).put(this.state.image);
        uploadTask.on(
          "state_changed",
          snapshot => {
            var progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            this.setState({
              progress:progress})
            },
            error => {
            console.log(error);
           },
            () => {
              storage
              .ref("images")
              .child(this.state.image.name)
              .getDownloadURL()
              .then(url => {
                this.setState({
                  url:url
              })
              });
              }
              );
           }

//handles the change of the title and save it as a state
      handleChangeTitle(event) {
       this.setState({
      title: event.target.value,
    });
    }
  //handles the change of the descrpition and save it as a state
      handleChangeDescription(event) {
      this.setState({
      description: event.target.value,
    });
    }
  //handles the change of the category and save it as a state
    handleChangeCategory(event) {
      this.setState({
      category: event.target.value,
      });
      }
//this will add the our input from input field and picture from the firbase to our database
  handleAdd(event) {
    var title = this.state.title;
    var description = this.state.description;
    var category = this.state.category;
    var userId = this.state.userId
    var image = this.state.url
    event.preventDefault();
    Axios.post("http://localhost:3000/insert", {
      title: title,
      description: description,
      category: category,
      image:image,
      userId:userId,
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
      window.location ='/Items3'
     }
      //we used material ui
  render() {
    return (
      <div>
      <div>
      <progress value={this.state.progress} max="100" />
      <br />
      <br />
      <input type="file" onChange={this.handleChange.bind(this)} />
      <button onClick={this.handleUpload.bind(this)}>Upload</button>
      <br />
      {this.state.url}
      <br />
      <img src={this.state.url || "http://via.placeholder.com/100"} alt="firebase-image" />
      </div>
        <h1>Faz3etak</h1>
        <div onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              value={this.state.value}
              onChange={this.handleChangeTitle}
            />
          </label>
          <label>
            description:
            <input
              type="text"
              name="description"
              value={this.state.value}
              onChange={this.handleChangeDescription}
            />
          </label>
          <label>
            category:
            <select onChange={this.handleChangeCategory} >
            <option>choose your catogary</option>
           <option  value ='cars'>{this.state.categories[0]}</option>
           <option value='business' >{this.state.categories[1]}</option>
          </select>
          </label>
          <br></br>
          <br></br>
          <Button
            type="button"
            value="Info"
            onClick={this.handleAdd}
            >
           ADD
          </Button>
        </div>
        </div>
        )
        }
      }

export default Upload;
