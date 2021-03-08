import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { login } from '../actions/auth';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { sizing, flexbox, spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import image from './image.jpg';
import SendIcon from '@material-ui/icons/Send';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
  root: {
    height: '80vh',
  },
  boxImg: {
    background: ` url(${image}) no-repeat center`,
    minHeight: '40rem',
  },
  textField: {
    margin: '3px 0',
  },
  button: {
    margin: '20px 0',
  },
  hr: {
    border: 0,
    height: 0,
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
  },
});

const Landing = () => {
  const classes = useStyles();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  if (isAuthenticated) {
    return <Redirect to='/home' />;
  }

  return (
    <>
      <Box display='flex' width='70%' mx='auto' mt={8} className={classes.root}>
        <Box width='70%' className={classes.boxImg} />
        <Box width='30%' textAlign='center' p={3}>
          <Typography variant='h3'>Zion</Typography>
          <form noValidate autoComplete='off'>
            <Box display='flex' flexDirection='column'>
              <TextField
                id='outlined-secondary'
                label='Email or Ph. no'
                variant='outlined'
                color='secondary'
                className={classes.textField}
                name='email'
                value={email}
                onChange={onChange}
              />
              <TextField
                id='outlined-secondary'
                label='Password'
                variant='outlined'
                color='secondary'
                className={classes.textField}
                name='password'
                value={password}
                onChange={onChange}
              />
              <Button
                variant='contained'
                color='primary'
                onClick={onSubmit}
                className={classes.button}
              >
                Log in
              </Button>
            </Box>
            <hr className={classes.hr} />
            <Link to='/register'>
              <Button
                variant='outlined'
                color='secondary'
                className={classes.button}
              >
                Sign Up
              </Button>
            </Link>
          </form>
          <Box>
            <Typography variant='h6' align='left'>
              Create store
            </Typography>
            <Typography align='left'>
              <ul style={{ padding: '0 15px' }}>
                <li>For your business</li>
                <li>Services</li>
                <li>And interact with buyers and sellers</li>
              </ul>
            </Typography>
          </Box>
          <Button
            variant='contained'
            color='secondary'
            className={classes.button}
            endIcon={<SendIcon />}
          >
            Skip to Store
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Landing;
