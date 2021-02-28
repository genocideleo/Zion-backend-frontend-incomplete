import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';

import PrivateRoute from '../routing/PrivateRoute';
// import Navbar from './components/layout/Navbar';
import NotFound from '../layout/NotFound';

const Routes = (props) => {
  return (
    <Fragment>
      <section className='container'>
        <Alert />
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />

          <PrivateRoute exact path='/dashboard' component={Dashboard} />

          <Route component={NotFound} />
        </Switch>
      </section>
    </Fragment>
  );
};

export default Routes;
