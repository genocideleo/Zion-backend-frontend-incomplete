import React, { useState, Fragment } from 'react';

//Material UI custom style maker
import { makeStyles } from '@material-ui/core/styles';
//Material UI components
// import AppBar from '@material-ui/core/AppBar';
// import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
//Material UI icons
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
//Card
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.root, // this part does margin:0 and padding: 0
  },
  card: {
    // copied from Material-Ui Documentation. Just for making cards nicer.
    maxWidth: 250,
  },
  media: {
    // copied from Material-Ui Documentation. Just for making cards nicer.
    height: 190,
  },
}));

const WishlistItem = () => {
  const classes = useStyles();
  return (
    <Fragment>
      {/* wishlist card */}
      <Box
        style={{
          paddingLeft: 0,
          marginLeft: 0,
          marginRight: '5px',
          marginTop: '5px',
          marginBottom: '5px',
        }}
      >
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image='https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80'
              title='Contemplative Reptile'
            />
            <CardContent
              style={{
                paddingTop: 0,
                paddingLeft: '3px',
                paddingRight: '3px',
                paddingBottom: 0,
              }}
            >
              <Typography variant='h5' component='h2'>
                XPS Laptop
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Lightweight, fast and long lasting. Tan han la deuh teh le. CTO
                i nih kha. Nobody is coming to save you. Lo chei kual la, let
                your inner beast run wild
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Button style={{ paddingLeft: 0 }} size='small' color='primary'>
              Rs
            </Button>
            <Button
              variant='contained'
              size='small'
              color='secondary'
              startIcon={<FavoriteBorderOutlinedIcon />}
            >
              :
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Fragment>
  );
};

export default WishlistItem;
