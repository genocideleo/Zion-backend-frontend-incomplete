import React, { Fragment, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMyItems } from '../../actions/item';
// import ProfileContent from './ProfileContent';
// import MyProfileForm from '../my-forms/MyProfileForm';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
//Material UI custom style maker
import { makeStyles } from '@material-ui/core/styles';

//Material UI components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

// Icons

//Card
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.root, // this part does margin:0 and padding: 0
  },
  main: {
    //The middle part of the main section
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    marginLeft: '16px',
    marginRight: '16px',
    // backgroundColor: 'red',
    width: '100%',
  },
  card: {
    // copied from Material-Ui Documentation. Just for making cards nicer.

    width: 250,
  },
  media: {
    // copied from Material-Ui Documentation. Just for making cards nicer.
    height: 190,
    backgroundColor: 'green',
  },
}));

const ListedItems = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.store.store);
  const classes = useStyles();
  //   const id = store._id;
  //   useEffect(() => {
  //     dispatch(getMyItems(id));
  //   }, []);
  return (
    <Fragment>
      {typeof store.listeditems === 'undefined' &&
      store.listeditems.length <= 0 ? (
        <Typography variant='h6'> No listed item</Typography>
      ) : (
        <Fragment>
          <Box className={classes.main}>
            {store.listeditems.map((item) => (
              <Card className={classes.card}>
                <CardActionArea>
                  <Link to={`mystore/myitem/${item._id}`}>
                    <CardMedia className={classes.media} />
                    <CardContent>
                      <Typography variant='h5' component='h2'>
                        {item.name}
                      </Typography>
                      <Typography variant='h5' component='h2'>
                        {item.price}
                      </Typography>
                      <Typography
                        variant='body2'
                        color='textSecondary'
                        component='p'
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Link>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Fragment>
      )}
    </Fragment>
  );
};
export default ListedItems;
