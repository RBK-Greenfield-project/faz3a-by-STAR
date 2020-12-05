import React from "react";
import Axios from "axios";
import Button from '@material-ui/core/Button';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      category: ['cars','small-business-for-sale',"food recipes","shoes",'clothes'],
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
            <TextField
              value={this.state.value}
              onChange={this.handleChangeTitle}
            />
            <br/> <br/>
          </label>
          <label>
            description:
            <TextField
              type="text"
              name="description"
              value={this.state.value}
              onChange={this.handleChangeDescription}
            />
          </label>
          <br/><br/>
          <NativeSelect
              id="demo-customized-select-native"
                onChange={this.handleChangeCategory}
            >
              <option aria-label="None" value="" />
              <option  value ='cars'> {this.state.category[0]}</option>
              <option  value='small-business-for-sale'>{this.state.category[1]}</option>
              <option  value ='food recipes'>{this.state.category[2]}</option>
              <option  value='shoes'>{this.state.category[3]}</option>
              <option  value ='clothes'>{this.state.category[4]}</option>

            </NativeSelect>
            <br/><br/>
          <label>
            id:
            <TextField
              type="text"
              name=" category"
              value={this.state.value}
              onChange={this.handleChangeid.bind(this)}
            />
          </label>
          {/* //handles the update  */}
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
