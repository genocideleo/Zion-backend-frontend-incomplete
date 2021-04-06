import api from '../utils/api';
import { setAlert } from './alert';

import {
  //  ADD_ITEM,
  GET_ITEM,
  GET_ITEMS,
  ITEM_ERROR,
  //   UPDATE_ITEM,
  CLEAR_ITEM,
  DELETE_ITEM,
  UPDATE_LIKES,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from './types';

// Get all items from all stores
export const getItems = () => async (dispatch) => {
  try {
    const res = await api.get('/items');

    dispatch({
      type: GET_ITEMS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ITEM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get all items from mystore
export const getMyItems = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/items/store/${id}`);

    dispatch({
      type: GET_ITEMS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ITEM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add like to item
export const addLike = (id) => async (dispatch) => {
  try {
    const res = await api.put(`/items/like/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: ITEM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Remove like
export const removeLike = (id) => async (dispatch) => {
  try {
    const res = await api.put(`/items/unlike/${id}`);

    dispatch({
      type: UPDATE_LIKES,
      payload: { id, likes: res.data },
    });
  } catch (err) {
    dispatch({
      type: ITEM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete item
export const deleteItem = (id) => async (dispatch) => {
  try {
    await api.delete(`/items/${id}`);

    dispatch({
      type: DELETE_ITEM,
      payload: id,
    });

    dispatch(setAlert('Post Removed', 'success'));
  } catch (err) {
    dispatch({
      type: ITEM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add item
export const addItem = (formData, history, match) => async (dispatch) => {
  try {
    const res = await api.post('/items/add', formData);

    dispatch({
      type: GET_ITEM,
      payload: res.data,
    });
    // console.log(res.data._id);
    const id = res.data._id;
    dispatch(setAlert('Item Created', 'success'));
    history.push(`/mystore/myitem/${id}`);
    // history.push(`/mystore`);
  } catch (err) {
    dispatch({
      type: ITEM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Get item by id
export const getItem = (id) => async (dispatch) => {
  try {
    const res = await api.get(`/items/${id}`);

    dispatch({
      type: GET_ITEM,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ITEM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Add comment on item
export const addComment = (itemId, formData) => async (dispatch) => {
  try {
    const res = await api.post(`/items/comment/${itemId}`, formData);

    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });

    dispatch(setAlert('Comment Added', 'success'));
  } catch (err) {
    dispatch({
      type: ITEM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete comment
export const deleteComment = (itemId, commentId) => async (dispatch) => {
  try {
    await api.delete(`/items/comment/${itemId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId,
    });

    dispatch(setAlert('Comment Removed', 'success'));
  } catch (err) {
    dispatch({
      type: ITEM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
