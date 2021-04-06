import React, { Fragment, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

import { getCurrentProfile } from '../actions/profile';
import { useDispatch, useSelector } from 'react-redux';
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
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

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

  navList: {
    // Nav list on top left. Can be deleted if you want other styles
    marginLeft: 'auto',
    marginRight: '35px',
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
    position: 'aboslute',
    height: '100%',
    backgroundColor: '#dadbdd',
    minWidth: '140px',
  },

  main: {
    //The middle part of the main section
    marginLeft: '140px',
    marginRight: '140px',
    width: '100%',
    padding: '3px 20px',
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
    height: 190,
  },
}));
const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const store = useSelector((state) => state.store.store);
  const profile = useSelector((state) => state.profile.profile);
  useEffect(() => {
    dispatch(getCurrentProfile());
  }, []);
  return (
    <>
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
          <Box display='flex'>
            <Typography variant='h6'>Shops</Typography>
            <Box className={classes.filterIcon}>
              <FilterListIcon />
              <span style={{ marginLeft: '7px', fontSize: '0.8em' }}>
                Filter
              </span>
            </Box>
          </Box>

          {/* End of header of middle part of main section */}

          {/* Split this Card Components into another file and import it so that debugging is easier and for cleaner code */}
          <Box mt={8}>
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
                  <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                  >
                    Lightweight, fast and long lasting. Tan han la deuh teh le.
                    CTO i nih kha. Nobody is coming to save you. Lo chei kual
                    la, let your inner beast run wild
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
            {/* End of card component */}
          </Box>
        </main>
        {/* Right nav bar */}
        <aside className={classes.asider}>
          <Typography>Contacts</Typography>
        </aside>
      </Box>
    </>
  );
};
export default Home;

// const Dashboard = ({
//   getCurrentProfile,
//   deleteAccount,
//   auth: { user },
//   profile: { profile }
// }) => {
//   useEffect(() => {
//     getCurrentProfile();
//   }, [getCurrentProfile]);

//   return (
//     <Fragment>
//       <h1 className="large text-primary">Dashboard</h1>
//       <p className="lead">
//         <i className="fas fa-user" /> Welcome {user && user.name}
//       </p>
//       {profile !== null ? (
//         <Fragment>
//           <DashboardActions />
//           <Experience experience={profile.experience} />
//           <Education education={profile.education} />

//           <div className="my-2">
//             <button className="btn btn-danger" onClick={() => deleteAccount()}>
//               <i className="fas fa-user-minus" /> Delete My Account
//             </button>
//           </div>
//         </Fragment>
//       ) : (
//         <Fragment>
//           <p>You have not yet setup a profile, please add some info</p>
//           <Link to="/create-profile" className="btn btn-primary my-1">
//             Create Profile
//           </Link>
//         </Fragment>
//       )}
//     </Fragment>
//   );
// };

// Dashboard.propTypes = {
//   getCurrentProfile: PropTypes.func.isRequired,
//   deleteAccount: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   profile: PropTypes.object.isRequired
// };

// const mapStateToProps = (state) => ({
//   auth: state.auth,
//   profile: state.profile
// });

// export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
//   Dashboard
// );
