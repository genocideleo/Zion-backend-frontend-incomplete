import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link, Redirect } from 'react-router-dom';
// import Spinner from '../layout/Spinner';
// import { getCurrentProfile, deleteAccount } from '../actions/profile';
//Material UI custom style maker
import { makeStyles } from '@material-ui/core/styles';
//Material UI components
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
//Material UI icons
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

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
  },
  filterIcon: {
    //Controls the filter icon
    display: 'flex',
    cursor: 'pointer',

    marginRight: '16px',
    alignItems: 'center',
  },
}));

const StoreInfoBar = () => {
  const classes = useStyles();
  const store = useSelector((state) => state.store.store);
  //   const profile = useSelector((state) => state.profile.profile);
  const { storefollowers, storeaddress, storeemail, storenumber } = store;
  return (
    <Fragment>
      {/* container for myprofile info*/}
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
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
          <Typography>Store Contact Number :{store.storenumber} </Typography>
          <Typography>Store Contact Email :{store.storenumber} </Typography>
          <Typography>Store Address :{store.storeaddress} </Typography>
        </Box>

        {/* follow buttons */}
        <Button
          variant='outlined'
          className={classes.fbutton}
          style={{ marginRight: '5px', height: '48px' }}
          endIcon={<MoreHorizIcon />}
        >
          Followers:
        </Button>

        {/* Edit Store */}
        {/* <Box
          style={{ marginRight: '15px' }}
          className={classes.filterIcon}
          clone
        >
          <Link to='/edit-store'>
            <span style={{ fontSize: '0.8em' }}>Update Store info</span>
            <EditOutlinedIcon />
          </Link>
        </Box> */}
      </Box>
    </Fragment>
  );
};
export default StoreInfoBar;
