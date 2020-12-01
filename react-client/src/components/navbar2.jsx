import {NavLink} from 'react-router-dom';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(10),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
          <nav className="navBar">

          <NavLink  to="/" className={classes.menuButton}> Home </NavLink>
          <NavLink to="/upload/"> upload </NavLink>
          <NavLink to="/update/"> update </NavLink>
          <NavLink to="/delete/">  delete </NavLink>

      </nav>
          </Typography>

        </Toolbar>
      </AppBar>

    </div>
  );
}
export default Navbar2;

