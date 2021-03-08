import React, { Fragment, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

import { addItem, getItem } from '../actions/item';

const initialState = {
  name: '',
  price: '',
  description: '',
};
const ItemForm = ({ history, match }) => {
  // const item = useSelector((state) => state.item.item);
  // const loading = useSelector((state) => state.item.loading);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  // for when we add an option to edit item
  //   const dispatch = useDispatch();
  // const [displaySocialInputs, toggleSocialInputs] = useState(false);

  // useEffect(() => {
  //   if (!item) getCurrentItem();
  //   if (!loading && item) {
  //     const itemData = { ...initialState };
  //     for (const key in item) {
  //       if (key in itemData) itemData[key] = item[key];
  //     }

  //     setFormData(itemData);
  //   }
  // }, [loading, getCurrentItem, item]);

  const { name, price, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem(formData, history));
  };
  const item = useSelector((state) => state.item.item);
  // if (item.id) {
  //   return <Redirect to={`/mystore/myitem/${item.id}`} />;
  // }

  return (
    <Fragment>
      <h1 className='large text-primary'>Enter your Item information</h1>

      <small> These information are required </small>
      <form className='form' onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Item Name'
            name='name'
            value={name}
            onChange={onChange}
          />
          <small className='form-text'>Name of your item to sell</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Item Description'
            name='description'
            value={description}
            onChange={onChange}
          />
          <small className='form-text'>Add a description about your Item</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Price Rs'
            name='price'
            value={price}
            onChange={onChange}
          />
          <small className='form-text'>
            Add a price for your Item in Rupees
          </small>
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/mystore'>
          Go Back
        </Link>
        ;
      </form>
    </Fragment>
  );
};

// ItemForm.propTypes = {
//   createItem: PropTypes.func.isRequired,
//   getCurrentItem: PropTypes.func.isRequired,
//   // store: PropTypes.object.isRequired
// };

//   const mapStateToProps = state => ({
//     store: state.store
//   });
// connect(null, { createItem, getCurrentItem })
export default ItemForm;
