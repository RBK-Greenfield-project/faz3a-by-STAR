import React from "react";
import Axios from "axios";
import Button from '@material-ui/core/Button';



class Update extends React.Component {
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
    this.handleUpdate = this.handleUpdate.bind(this);

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
  handleUpdate(event) {
    // console.log(this.state.description);
    var title = this.state.title;
    var description = this.state.description;
    var category = this.state.category;
    event.preventDefault();
    Axios.put("http://localhost:3000/update1", {
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
          <Button
            type="button"
            value="Info"
            onClick={this.handleUpdate}
          >
            Update
          </Button>

        </div>

      </div>
    );
  }
}

export default Update;
