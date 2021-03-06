import React, { Fragment, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getItem } from '../../actions/item';
import MyItemContent from './MyItemContent';
// import MyStoreForm from '../my-forms/MyStoreForm';
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
import FilterListIcon from '@material-ui/icons/FilterList';

// //Card
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.root, // this part does margin:0 and padding: 0
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
    height: '23px',
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
  },

  //End of nav bar

  asidel: {
    //Controls the left part the main section
    position: 'absolute',
    height: '100%',
    backgroundColor: '#dadbdd',
    width: '140px',
  },
  asider: {
    //Controls the right part the main section
    position: 'relative',
    height: '100%',
    backgroundColor: '#dadbdd',
    minWidth: '140px',
  },

  main: {
    //The middle part of the main section
    marginLeft: '140px',

    width: '100%',
    padding: '2px 1px',
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
const MyItem = ({ match }) => {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.auth.user);

  const classes = useStyles();

  useEffect(() => {
    dispatch(getItem(match.params.id));
  }, []);
  const item = useSelector((state) => state.item.item);
  return (
    <Fragment>
      {/* Start of left nav bar of main */}
      <Box
        mt={1}
        ml={1}
        display='flex'
        style={{ position: 'relative', margin: 0, height: '100vh' }}
      >
        <aside className={classes.asidel}>
          <Typography>Shop By Category</Typography>
        </aside>
        {/* End of left nav bar of main */}

        {/* Header of middle part of main section */}
        <main className={classes.main}>
          {/* insert main profile content here*/}
          {item !== null ? (
            <Fragment>
              <MyItemContent />
            </Fragment>
          ) : (
            <Fragment>
              <p className='large text-primary'>Cannot find Item</p>
            </Fragment>
          )}
        </main>
        {/* Right Nav bar  */}
        <aside className={classes.asider}>
          <Typography>Contacts</Typography>
        </aside>
      </Box>
    </Fragment>
  );
};
// MyStore.propTypes = {
//   getCurrentStore: PropTypes.func.isRequired,
//   deleteStoret: PropTypes.func.isRequired,
//   // auth: PropTypes.object.isRequired,
//   // profile: PropTypes.object.isRequired
// };
// connect(null, { getCurrentStore, deleteStore })
export default MyItem;
