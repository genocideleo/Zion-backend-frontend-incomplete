import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../layout/Theme/Theme';

import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Home from '../home/Home';
import MyProfile from '../myprofile/MyProfile';
import PrivateRoute from '../routing/PrivateRoute';
import Navbar from '../layout/Navbar';
import NotFound from '../layout/NotFound';
import MyProfileForm from '../my-forms/MyProfileForm';
import MyStore from '../mystore/MyStore';
import MyStoreForm from '../my-forms/MyStoreForm';
import ItemForm from '../my-forms/ItemForm';
import MyItem from '../mystore/items/MyItem';
import Stores from '../stores/Stores';
import Store from '../stores/Store';

const Routes = (props) => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Navbar />
        <section>
          <Alert />
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/stores' component={Stores} />
            <Route exact path='/store/:id' component={Store} />
            <PrivateRoute exact path='/home' component={Home} />
            <PrivateRoute exact path='/myprofile' component={MyProfile} />
            <PrivateRoute
              exact
              path='/create-profile'
              component={MyProfileForm}
            />
            <PrivateRoute
              exact
              path='/edit-profile'
              component={MyProfileForm}
            />
            <PrivateRoute exact path='/mystore' component={MyStore} />
            <PrivateRoute exact path='/create-store' component={MyStoreForm} />
            <PrivateRoute exact path='/edit-store' component={MyStoreForm} />
            <PrivateRoute exact path='/additem' component={ItemForm} />
            <PrivateRoute exact path='/mystore/myitem/:id' component={MyItem} />
            <Route component={NotFound} />
          </Switch>
        </section>
      </ThemeProvider>
    </Fragment>
  );
};

export default Routes;
