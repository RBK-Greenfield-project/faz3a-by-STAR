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
      id:'',

    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);

  }
//handle the change of the input
  handleChangeTitle(event) {
    this.setState({
      title: event.target.value,
    });
    }
    //handle the change of the input
  handleChangeDescription(event) {
    this.setState({
      description: event.target.value,
    });
    }
    //handle the change of the input
  handleChangeCategory(event) {
    this.setState({
      category: event.target.value,

    })
  }
  //handle the change of the input
    handleChangeid(event) {
      this.setState({
        id: event.target.value,

      })

      }
//handles the update for the items
  handleUpdate(event) {
    var title = this.state.title;
    var description = this.state.description;
    var category = this.state.category;
    var Id= this.state.id
    event.preventDefault();
    Axios.put("http://localhost:3000/update1", {
      title: title,
      description: description,
      category: category,
      Id:Id,
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

//render the application
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
          <label>
            id:
            <input
              type="text"
              name=" category"
              value={this.state.value}
              onChange={this.handleChangeid.bind(this)}
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
