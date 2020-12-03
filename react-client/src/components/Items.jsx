import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Navbar2 from "./navbar2.jsx";
import SimpleBottomNavigation from "./footer.jsx";
import Home from "./background.jsx";
// import FolderList from "./listFolder.jsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
// //import ImageIcon from "@material-ui/icons/Image";
import Image from "material-ui-image";
class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["cars", "business", "ShowAll"],
      select: [],
      newData: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlepage = this.handlepage.bind(this);
  }

  handleChange(event) {
    var val = event.target.value;
    this.setState({
      select: val,
    });
    $.ajax({
      type: "Get",
      url: "/Items1",
      success: (data) => {
        this.setState({
          newData: data,
        });
      },
      error: () => {
        console.log("error");
      },
    });
  }
  handlepage() {
    <Homepage />;
  }
  render() {
    return (
      <div>
        <Navbar2 />
        <h2>Please Choose A Category</h2>
        <select onChange={this.handleChange}>
          <option value="ShowAll">{this.state.items[2]}</option>
          <option value="cars">{this.state.items[0]}</option>
          <option value="business">{this.state.items[1]}</option>
        </select>

        <div>
          {" "}
          {this.state.newData
            .filter(
              (elet) =>
                this.state.select === elet.category ||
                this.state.select === this.state.items[2]
            )

            .map((ele, index) => (
              <List key={index}>
                <ListItem> {ele.id}</ListItem>
                <br />
                <ListItem>
                  <Image
                    src="http://loremflickr.com/300/200"
                    style={{
                      height: 10,
                      maxWidth: 100,
                      //paddingLeft: theme.spacing(15),
                      overflow: "hidden",
                      display: "block",
                      width: "100%",
                    }}
                  />

                  <ListItemText
                    primary={ele.title}
                    secondary={ele.description}
                  />
                </ListItem>
              </List>
            ))}
        </div>
      </div>
    );
  }
}

export default Items;
