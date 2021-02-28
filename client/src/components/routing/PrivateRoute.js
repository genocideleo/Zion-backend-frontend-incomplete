import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { useSelector } from 'react-redux';

const PrivateRoute = ({
  component: Component,

  ...rest
}) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  //   aisAuthenticated = isAuthenticated;
  //   aloading = loading;
  return (
    <Route
      {...rest}
      render={(props) =>
        loading ? (
          <Spinner />
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  );
};
// const PrivateRoute = ({
//     component: Component,
//     auth: { isAuthenticated, loading },
//     ...rest
//   })
// =>

//   <Route
//     {...rest}
//     render={props =>
//       loading ? (
//         <Spinner />
//       ) : isAuthenticated ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to="/login" />
//       )
//     }
//   />

// PrivateRoute.propTypes = {
//   auth: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth
// });

export default PrivateRoute;
