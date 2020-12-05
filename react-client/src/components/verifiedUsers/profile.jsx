import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import React from "react";
import $ from "jquery";
import Delete from './features/delete.jsx'
import Update from './features/update.jsx'
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";

import container from '@material-ui/core/container';

class  User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userid:[],
      name:[],
      Data:[],
}}
      //gets the username and id
    showList(){
     $.ajax({
    type: "Get",
    url: "/signIN1",
    success: (data) => {

     this.setState({
        userid:data.result[0].id,
        name:data.result[0].email
      })
      },
    error:()=> {
    console.log('error')
               }
          })
      }
      ///gets all the items in the database
    showitems(){
      $.ajax({
       type: "Get",
      url: "/profile1",
      success: (data) => {
      console.log(data)
      this.setState({
      Data:data
      })
      },
    error:()=> {
    console.log('error')
               }
            })
        }

        render() {
      return (
        <Grid container
        item xs={12}
     direction='column'
     width= '100px'
     alignContent='stretch'
     direction="row"
     alignItems='stretch'
     alignItems='stretch'
     justify='center'
     wrap='wrap'
     >
        <div>
        <Typography style={{ textAlign:'center' ,fontSize:'50px', fontFamily:'Cursive	'}}>* WELCOME *
                 Mr/Mrs: {this.state.name} : {this.state.userid}</Typography>

      <br/>
     <div >
      <Button  style={{marginLeft: '200px',background : 'rgb(70, 102, 97)',color: 'white'}} onClick= {this.showList.bind(this)}>view profile</Button>
      <Button  style={{ marginLeft:'5px' ,background : 'rgb(70, 102, 97)',color: 'white'}} onClick= {this.showitems.bind(this)}> items</Button>

      </div>
          {/* //brings all the data and compare them with the user id if it matches it will show his items */}
        <div  id ='dy'>  {this.state.Data.filter(elet=> this.state.userid=== elet.userId ).map((ele,index) =>
        <List key={index}> <Avatar  src={ele.image} style={{width:'100px' ,height:"100px"}} /> <ListItem styke={{fontSize:'20px'}}>{ele.title} </ListItem> <ListItem>{ele.description}</ListItem>  <ListItem>{ele.category}</ListItem>  <ListItem> {ele.id}</ListItem>    <Update/>  <Delete/></List> )
      } </div>
      </div></Grid>
      )}
    }


export default User;
// Registration.jsx