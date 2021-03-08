import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { logout } from '../actions/auth';
import { useDispatch, useSelector } from 'react-redux';

//Material UI custom style maker
import { makeStyles } from '@material-ui/core/styles';

//Material UI components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

// Icons
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppleIcon from '@material-ui/icons/Apple';
import SearchIcon from '@material-ui/icons/Search';
import StoreIcon from '@material-ui/icons/Store';
import ExploreIcon from '@material-ui/icons/Explore';
import PanToolIcon from '@material-ui/icons/PanTool';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.root, // this part does margin:0 and padding: 0
  },
  companyIcon: {
    //Controls the company icon on top left
    marginRight: 'auto',
    marginLeft: '35px',
    cursor: 'pointer',
  },

  inputBox: {
    //controls the input box
    marginLeft: '7px',
    borderRadius: '3px',
    backgroundColor: '#FFF',
  },

  searchIcon: {
    //Make the input search icon black
    fill: 'black',
  },

  input: {
    //controls input on top left
    borderRadius: '3px',
    padding: '2px',
    height: '27px',
    border: '0',
    outline: 'none',
  },

  middleList: {
    //controls the middle header list like: MyProfile etc
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 30px',
    cursor: 'pointer',
    color: '#fff',
  },

  navList: {
    // Nav list on top left. Can be deleted if you want other styles
    color: '#fff',
    display: 'flex',
    marginLeft: 'auto',
    marginRight: '35px',
    cursor: 'pointer',
    flexDirection: 'column',
    alignItems: 'center',
  },

  //End of nav bar

  aside: {
    //Controls the left part the main section
    position: 'absolute',
    height: '100vh',
    backgroundColor: '#dadbdd',
    width: '140px',
  },

  main: {
    //The middle part of the main section
    marginLeft: '140px',
    width: '100%',
    padding: '3px 40px',
  },

  filterIcon: {
    //Controls the filter icon on main top left
    display: 'flex',
    cursor: 'pointer',
    marginLeft: 'auto',
    alignItems: 'center',
  },

  card: {
    // copied from Material-Ui Documentation. Just for making cards nicer.
    maxWidth: 250,
  },
  media: {
    // copied from Material-Ui Documentation. Just for making cards nicer.
    height: 140,
  },
}));

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const classes = useStyles();
  const logOut = () => {
    dispatch(logout());
  };
  const authLinks = (
    <>
      {/* Navbar starts */}
      <AppBar position='static'>
        <Toolbar className={classes.root}>
          <Box display='flex' justifyContent='center' width='100%'>
            <Box
              display='flex'
              alignItems='center'
              className={classes.companyIcon}
            >
              {' '}
              <Link to='/home'>
                <AppleIcon></AppleIcon>
              </Link>
              <Box
                display='flex'
                alignItems='center'
                className={classes.inputBox}
              >
                <SearchIcon className={classes.searchIcon} />
                <input placeholder='search' className={classes.input}></input>
              </Box>
            </Box>

            <Box display='flex'>
              <Box className={classes.middleList}>
                <StoreIcon />
                <span>Stores</span>
              </Box>
              <Box className={classes.middleList}>
                <ExploreIcon />
                <span>Explore</span>
              </Box>
              <Box className={classes.middleList}>
                <PanToolIcon />
                <span>Services</span>
              </Box>
              <Box className={classes.middleList} clone>
                <Link to='/myprofile'>
                  <AccountCircleIcon />
                  <span>My Profile</span>
                </Link>
              </Box>
            </Box>

            <Box className={classes.navList} onClick={logOut}>
              <AccountCircleIcon />
              Log out
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {/* End of nav bar */}
    </>
  );
  const guestLinks = (
    <>
      {/* Navbar starts */}
      <AppBar position='static'>
        <Toolbar className={classes.root}>
          <Box display='flex' justifyContent='center' width='100%'>
            <Box
              display='flex'
              alignItems='center'
              className={classes.companyIcon}
            >
              <Link to='/landing'>
                <AppleIcon></AppleIcon>
              </Link>
              <Box
                display='flex'
                alignItems='center'
                className={classes.inputBox}
              >
                <SearchIcon className={classes.searchIcon} />
                <input placeholder='search' className={classes.input}></input>
              </Box>
            </Box>

            <Box display='flex'>
              <Box className={classes.middleList}>
                <StoreIcon />
                <span>Stores</span>
              </Box>
              <Box className={classes.middleList}>
                <ExploreIcon />
                <span>Explore</span>
              </Box>
              <Box className={classes.middleList}>
                <PanToolIcon />
                <span>Services</span>
              </Box>

              <Box className={classes.middleList} clone>
                <Link to='/register'>
                  <AccountCircleIcon />
                  <span>Create Account</span>
                </Link>
              </Box>
            </Box>

            <Box className={classes.navList} clone>
              <Link to='/login'>
                <AccountCircleIcon />
                <span>Log In</span>
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {/* End of nav bar */}
    </>
  );
  return <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>;
};
export default Navbar;
