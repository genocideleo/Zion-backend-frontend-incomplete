import api from '../utils/api';
import { setAlert } from './alert';

import {
  GET_STORE,
  GET_STORES,
  STORE_ERROR,
  UPDATE_STORE,
  CLEAR_STORE,
  CLEAR_STORES,
  STORE_DELETED,
} from './types';

// Get current users store
export const getCurrentStore = () => async (dispatch) => {
  try {
    const res = await api.get('/stores/mystore');

    dispatch({
      type: GET_STORE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: STORE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get all Stores
export const getStores = () => async (dispatch) => {
  dispatch({ type: CLEAR_STORE });

  try {
    const res = await api.get('/stores');

    dispatch({
      type: GET_STORES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: STORE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get store by ID
export const getStoreById = (storeId) => async (dispatch) => {
  dispatch({ type: CLEAR_STORES });
  try {
    const res = await api.get(`/stores/${storeId}`);

    dispatch({
      type: GET_STORE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: STORE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create or update store
export const createStore = (formData, history, edit = false) => async (
  dispatch
) => {
  try {
    const res = await api.post('/stores/mystore', formData);

    dispatch({
      type: GET_STORE,
      payload: res.data,
    });

    dispatch(setAlert(edit ? 'Store Updated' : 'Store Created', 'success'));

    history.push('/mystore');
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: STORE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete store
export const deleteStore = (storeId) => async (dispatch) => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      await api.delete(`/stores/${storeId}`);

      dispatch({ type: CLEAR_STORE });
      dispatch({ type: STORE_DELETED });

      dispatch(setAlert('Your account has been permanently deleted'));
    } catch (err) {
      dispatch({
        type: STORE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};
