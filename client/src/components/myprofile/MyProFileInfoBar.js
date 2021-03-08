import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link, Redirect } from 'react-router-dom';
import Spinner from '../layout/Spinner';
// import { getCurrentProfile, deleteAccount } from '../actions/profile';
//Material UI custom style maker
import { makeStyles } from '@material-ui/core/styles';
//Material UI components
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
//Material UI icons
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import StoreMallDirectoryOutlinedIcon from '@material-ui/icons/StoreMallDirectoryOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
//Card
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.root,
  },
  probox: {
    display: 'flex',
    flexDirection: 'column',
    height: 325,
    width: 340,
    backgroundColor: '#fff',
    borderRadius: '2px',
    boxShadow: 'none',
    // marginBottom: '3px',
  },
  pic: {
    borderRadius: '25px',
    backgroundColor: 'red',
    height: 264,
  },
  sbutton: {
    color: 'black',
    borderRadius: '20px',
  },
  fbutton: {
    color: 'black',
    borderRadius: '1px',
    height: '48px',
  },
  filterIcon: {
    //Controls the filter icon
    display: 'flex',
    cursor: 'pointer',

    marginRight: '16px',
    alignItems: 'center',
  },
}));

const MyProfileInfoBar = () => {
  const classes = useStyles();
  const store = useSelector((state) => state.store.store);
  const profile = useSelector((state) => state.profile.profile);
  const { contactemail, contactnumber } = profile;
  return (
    <Fragment>
      {/* check to see if profile have store */}
      {profile.store === undefined ? (
        <Fragment>
          {/* container for myprofile info*/}
          <Box
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: '3px',
              alignItems: 'center',
            }}
          >
            {/* contact info  */}
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '16px',
                marginRight: 'auto',
              }}
            >
              <Typography>Contact Number :{contactnumber} </Typography>
              <Typography>Contact Email :{contactemail} </Typography>
            </Box>
            {/* create store button */}
            <Link to='/create-store'>
              <Button
                variant='outlined'
                className={classes.sbutton}
                style={{ marginRight: '320px', marginLeft: 'auto' }}
                clone
                endIcon={<StoreMallDirectoryOutlinedIcon />}
              >
                Create A Store
              </Button>
            </Link>
            {/* follow buttons */}
            <Button
              variant='outlined'
              className={classes.fbutton}
              style={{ marginRight: '5px' }}
              endIcon={<MoreHorizIcon />}
            >
              Following:
            </Button>

            {/* Edit Profile */}
            <Box
              style={{ marginRight: '15px' }}
              className={classes.filterIcon}
              clone
            >
              <Link to='/edit-profile'>
                <span style={{ fontSize: '0.8em' }}>Update Profile info</span>
                <EditOutlinedIcon />
              </Link>
            </Box>
          </Box>
        </Fragment>
      ) : (
        // if they have created a store show store bar
        <Fragment>
          {/* container for myprofile info*/}
          <Box
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',

              marginTop: '3px',
            }}
          >
            {/* contact info  */}
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '16px',
                marginRight: 'auto',
              }}
            >
              <Typography>Contact Number :{contactnumber} </Typography>
              <Typography>Contact Email :{contactemail} </Typography>
            </Box>

            {/* follow buttons */}
            <Button
              variant='outlined'
              className={classes.fbutton}
              style={{ marginRight: '5px' }}
              endIcon={<MoreHorizIcon />}
            >
              Following:
            </Button>
            <Button
              variant='outlined'
              className={classes.fbutton}
              style={{ marginRight: '15px' }}
              endIcon={<MoreHorizIcon />}
            >
              Follower:
            </Button>

            {/* Edit Profile */}
            <Box
              style={{ marginRight: '15px' }}
              className={classes.filterIcon}
              clone
            >
              <Link to='/edit-profile'>
                <span style={{ fontSize: '0.8em' }}>Update Profile info</span>
                <EditOutlinedIcon />
              </Link>
            </Box>
          </Box>

          {/* mystore bar inside profile */}
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant='h6'>
              {profile.username}'s Store page
            </Typography>
            <hr
              style={{
                display: 'block',
                marginTop: 1,
                marginLeft: 16,
                marginRight: 16,
                overflow: 'hidden',
                borderStyle: 'inset',
                borderWidth: 2,
              }}
            />
            {/* mystore card */}
            <Card className={classes.probox}>
              <CardActionArea>
                <Link to='/mystore'>
                  <CardMedia className={classes.pic} />
                  <CardContent>
                    <Typography style={{ marginLeft: '30%' }} variant='h6'>
                      {profile.storename}
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
          </Box>
        </Fragment>
      )}
      ;
    </Fragment>
  );
};
export default MyProfileInfoBar;
