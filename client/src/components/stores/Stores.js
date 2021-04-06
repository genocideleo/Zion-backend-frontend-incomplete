import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Spinner from '../layout/Spinner';

import StoresContent from './StoresContent';

import { makeStyles } from '@material-ui/core/styles';

//Material UI components
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Icon, Typography } from '@material-ui/core';
//Material UI icons
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FilterListIcon from '@material-ui/icons/FilterList';

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.root, // this part does margin:0 and padding: 0
  },
  asidel: {
    //Controls the left part the main section
    position: 'absolute',
    height: '100%',
    backgroundColor: '#dadbdd',
    width: '140px',
  },
  asider: {
    //Controls the right part the main section
    position: 'absolute',
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
  // card: {
  //   // copied from Material-Ui Documentation. Just for making cards nicer.
  //   padding: 16,
  //   width: 250,
  // },
  // media: {
  //   // copied from Material-Ui Documentation. Just for making cards nicer.
  //   height: 190,
  //   backgroundColor: 'green',
  // },
}));

const Stores = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Box
        mt={1}
        ml={1}
        display='flex'
        style={{ position: 'relative', margin: 0, height: '100vh' }}
      >
        {/* left side nav */}
        <aside className={classes.asidel}>
          <Typography>Shop By Category</Typography>
        </aside>
        {/* maincontent */}
        <main className={classes.main}>
          <Box display='flex' style={{ marginBottom: '64px' }}>
            <Typography variant='h6'>Stores</Typography>
            <Box className={classes.filterIcon}>
              <FilterListIcon />
              <span style={{ marginLeft: '7px', fontSize: '0.8em' }}>
                Filter
              </span>
            </Box>
          </Box>
          {/* stores content  cards */}
          <StoresContent />
        </main>

        {/* right side nav */}
        <aside className={classes.asider}>
          <Typography>Contacts</Typography>
        </aside>
      </Box>
    </Fragment>
  );
};
export default Stores;
