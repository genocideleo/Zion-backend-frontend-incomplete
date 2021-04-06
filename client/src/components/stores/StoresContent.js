import React, { Fragment, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStores } from '../actions/store';

//Material UI custom style maker
import { makeStyles } from '@material-ui/core/styles';

//Material UI components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

// Icons
import GroupIcon from '@material-ui/icons/Group';

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

    // backgroundColor: 'red',
    width: '100%',
  },
  card: {
    // copied from Material-Ui Documentation. Just for making cards nicer.
    marginRight: '20px',
    width: 250,
  },
  media: {
    // copied from Material-Ui Documentation. Just for making cards nicer.
    height: 190,
    backgroundColor: 'red',
  },
}));

const StoresContent = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const stores = useSelector((state) => state.store.stores);

  useEffect(() => {
    dispatch(getStores());
  }, []);
  return (
    <Fragment>
      <Box className={classes.main}>
        {stores.map((store) => (
          <Card className={classes.card}>
            <CardActionArea>
              <Link to={`store/${store._id}`}>
                <CardMedia className={classes.media} />
                <CardContent style={{ paddingTop: 0, paddingBottom: 0 }}>
                  <Typography variant='h5' component='h2'>
                    {store.storename}
                  </Typography>
                  {/* <Typography variant='h5' component='h2'>
                      {store.price}
                    </Typography> */}
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    description:{store.sdescription}
                  </Typography>
                  <Button
                    variant='contained'
                    size='small'
                    color='secondary'
                    endIcon={<GroupIcon />}
                    style={{ paddingTop: 0, paddingBottom: 0 }}
                  >
                    Followers:{store.storefollowers.length}
                  </Button>
                </CardContent>
              </Link>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Fragment>
  );
};
export default StoresContent;
