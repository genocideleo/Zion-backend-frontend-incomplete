import React from 'react';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

const Alert = () => {
  const alerts = useSelector((state) => state.alert);
  return alerts.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));
};
// Alert.propTypes = {
//   alerts: PropTypes.array.isRequired
// };

// const mapStateToProps = (state) => ({
//   alerts: state.alert
// });

// export default connect(mapStateToProps)(Alert);
export default Alert;
