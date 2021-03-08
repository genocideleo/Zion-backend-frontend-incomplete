import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createStore, getCurrentStore } from '../actions/store';
// import { createStore } from '../actions/createStore';
const initialState = {
  storename: '',
  storenumber: '',
  storeemail: '',
  address: '',
  //provideservice:'',
  sdescription: '',
  storeaddress: '',
};
const MyStoreForm = ({ createStore, getCurrentStore, history }) => {
  const store = useSelector((state) => state.store.store);
  const loading = useSelector((state) => state.store.loading);
  const [formData, setFormData] = useState(initialState);
  //   const dispatch = useDispatch();
  // const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    if (!store) getCurrentStore();
    if (!loading && store) {
      const storeData = { ...initialState };
      for (const key in store) {
        if (key in storeData) storeData[key] = store[key];
      }

      setFormData(storeData);
    }
  }, [loading, getCurrentStore, store]);

  const {
    storename,
    storenumber,
    storeemail,
    storeaddress,
    sdescription,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createStore(formData, history, store ? true : false);
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Enter Your Store Info</h1>

      <small> These information are required </small>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Store Name'
            name='storename'
            value={storename}
            onChange={onChange}
          />
          <small className='form-text'>Name your Store</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Store Description'
            name='sdescription'
            value={sdescription}
            onChange={onChange}
          />
          <small className='form-text'>
            Add a description about your Store
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Store Contact Number'
            name='storenumber'
            value={storenumber}
            onChange={onChange}
          />
          <small className='form-text'>
            Add a phone number for people to contact your Store
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Store Contact Email'
            name='storeemail'
            value={storeemail}
            onChange={onChange}
          />
          <small className='form-text'>
            Add a contact email for people to contact your Store
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Store Address'
            name='storeaddress'
            value={storeaddress}
            onChange={onChange}
          />
          <small className='form-text'>Store Address</small>
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        {store == null ? (
          <Link className='btn btn-light my-1' to='/myprofile'>
            Go Back
          </Link>
        ) : (
          <Link className='btn btn-light my-1' to='/mystore'>
            Go Back
          </Link>
        )}
        ;
      </form>
    </Fragment>
  );
};

MyStoreForm.propTypes = {
  createStore: PropTypes.func.isRequired,
  getCurrentStore: PropTypes.func.isRequired,
  // store: PropTypes.object.isRequired
};

//   const mapStateToProps = state => ({
//     store: state.store
//   });

export default connect(null, { createStore, getCurrentStore })(MyStoreForm);
