import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Spinner from '../../layout/Spinner';
import ListedItems from './ListedItems';
// import { getCurrentStore, deleteStore } from '../actions/store';

// import MyStoreInfoBar from './MyStoreInfoBar';
// import Wishlist from './Wishlist';

//Material UI custom style maker
import { makeStyles } from '@material-ui/core/styles';
//Material UI components
// import AppBar from '@material-ui/core/AppBar';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

//Material UI icons
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
//Card
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Icon, Typography } from '@material-ui/core';
// import MyStoreInfoBar from './MyStoreInfoBar';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.root,
  },
  wallpic: {
    height: '526px',
    backgroundColor: '#CACACA',
    borderRadius: '2px',
    marginTop: '1px',
    marginBottom: '0px',
    marginLeft: '0',
    marginRight: '0',
    // width: '100vw',
    position: 'relative',
  },
  //   b1: {
  //     display: 'flex',
  //     flexDirection: 'row',
  //   },
  walledit: {
    height: 48,
    color: 'C4C4C4',
    display: 'flex',
    marginTop: '3px',
    marginLeft: 'auto',
    marginRight: '15px',
    flexDirection: 'row',
  },
  item: {
    marginLeft: '70%',
    marginRight: 'auto',
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
    marginLeft: '3px',
    marginRight: 'auto',
    position: 'relative',
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
  input: {
    //controls input on top left
    borderRadius: '3px',
    padding: '2px',
    height: '27px',
    border: '0',
    outline: 'none',
  },

  inputBox: {
    //controls the input box
    marginRight: '5px',

    borderRadius: '3px',
    backgroundColor: '#FFF',
  },
  filterIcon: {
    //Controls the filter icon
    display: 'flex',
    cursor: 'pointer',

    marginRight: '16px',
    alignItems: 'center',
  },
  searchIcon: {
    //Make the input search icon black
    fill: 'black',
  },
}));
const MyStoreContent = () => {
  const classes = useStyles();
  //   const dispatch = useDispatch();
  //   const profile = useSelector((state) => state.profile.profile);
  const item = useSelector((state) => state.item.item);
  const { name, price, description } = item;
  return (
    // to wait for the item to load
    <Fragment>
      {item === null ? (
        <Spinner />
      ) : (
        <Fragment>
          {/* wallpaper picture box */}
          <Card
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CardActionArea>
              <CardMedia className={classes.wallpic} />
            </CardActionArea>
          </Card>

          <Box
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: '3px',
              marginLeft: '16px',
            }}
          >
            {/* item name and description */}
            <Box
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyItems: 'center',
                width: '100%',
              }}
            >
              <Box>
                <Typography variant='h5'>{item.name}</Typography>
              </Box>
              {/* price */}
              <Box>
                <Typography variant='h5'>Price:RS {item.price}</Typography>
              </Box>
              {/* description */}
              <Typography variant='h6'>Item Description</Typography>
              <Box
                border={1}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  width: '100%',
                }}
              >
                <Typography variant='h5'>{item.description}</Typography>
              </Box>
            </Box>
            {/* wallpaper upload button and likes */}
            <Box style={{ display: 'flex', flexDirection: 'column' }}>
              <Button
                variant='contained'
                className={classes.walledit}
                endIcon={<AddAPhotoIcon />}
              >
                Upload Item Pictures
              </Button>
              {/* likes */}
              <Box
                border={1}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  height: '32px',
                  marginTop: '53px',
                  marginLeft: '16px',
                  marginRight: '16px',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant='h6' style={{ marginLeft: '2px' }}>
                  Likes:{item.likes}
                </Typography>
                <FavoriteBorderOutlinedIcon style={{ marginRight: '3px' }} />
              </Box>
            </Box>
          </Box>

          {/* bottom navbar */}
          <Box
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 16,
              marginTop: 12,
            }}
          >
            {/* add item */}
            <Button
              variant='outlined'
              style={{
                marginLeft: 'auto',
                marginRight: '15px',
              }}
            >
              <Link to='/mystore'>Back to MyStore</Link>
            </Button>
          </Box>
          {/* underline after bottom navbar */}
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
          {/*  itemlist  */}
        </Fragment>
      )}
    </Fragment>
  );
};
export default MyStoreContent;

//to add
/* options bar
            <Box borderRight={1} pr={1}>
              <Typography variant='h6' align='left'>
                LISTED ITEMS
              </Typography>
            </Box>
            <Box borderRight={1} pr={1} pl={1}>
              <Typography variant='h6'>JOINED MALLS</Typography>
            </Box>
            <Box borderRight={1} pr={1} pl={1}>
              <Typography variant='h6'>SERVICES</Typography>
            </Box>
            <Box border={0} pl={1}>
              <Typography variant='h6'>COLLECTIONS</Typography>
            </Box> */
/* search listeditems */
//  <Box
//  border={1}
//  display='flex'
//  alignItems='center'
//  className={classes.inputBox}
// >
//  <SearchIcon className={classes.searchIcon} />
//  <input
//    placeholder='search listeditems'
//    className={classes.input}
//  ></input>
// </Box>
// {/* filter ListedItems */}
// <Box className={classes.filterIcon}>
//  <FilterListIcon />
//  <span style={{ fontSize: '0.8em' }}>Filter</span>
// </Box>
