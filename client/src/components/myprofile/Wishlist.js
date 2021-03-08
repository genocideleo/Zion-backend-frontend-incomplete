import React, { useState, Fragment } from 'react';
import WishlistItem from './WishlistItem';
//Material UI custom style maker
// import { makeStyles } from '@material-ui/core/styles';
//Material UI components
// import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
// import Button from '@material-ui/core/Button';
//Material UI icons
// //Card
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import { Typography } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         ...theme.root, // this part does margin:0 and padding: 0
//       },

// }));
const Wishlist = () => {
  return (
    <Fragment>
      {/* wishlist cards */}
      <Box
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          marginLeft: '16px',
          marginRight: '16px',
        }}
      >
        <WishlistItem />
      </Box>
    </Fragment>
  );
};
export default Wishlist;
