import React from "react";
import Axios from "axios";
import Button from '@material-ui/core/Button';



class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      category: "",
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
     this.handleAdd = this.handleAdd.bind(this);
  }
  handleChangeTitle(event) {
    this.setState({
      title: event.target.value,
    });
    <ul>{this.state}</ul>;
  }
  handleChangeDescription(event) {
    this.setState({
      description: event.target.value,
    });
    <ul>{this.state}</ul>;
  }
  handleChangeCategory(event) {
    this.setState({
      category: event.target.value,
    });
    <ul>{this.state}</ul>;
  }


  handleAdd(event) {
    // console.log(this.state.description);
    var title = this.state.title;
    var description = this.state.description;
    var category = this.state.category;
    event.preventDefault();
    Axios.post("http://localhost:3000/insert", {
      title: title,
      description: description,
      category: category,
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    // res.data.headers["Content-Type"];
  }
  render() {
    return (
      <div>
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
            <input
              type="text"
              name=" category"
              value={this.state.value}
              onChange={this.handleChangeCategory}
            />
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
    );
  }
}

export default Upload;
