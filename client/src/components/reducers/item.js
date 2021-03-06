import {
  GET_ITEMS,
  ITEM_ERROR,
  UPDATE_LIKES,
  DELETE_ITEM,
  ADD_ITEM,
  GET_ITEM,
  ADD_COMMENT,
  REMOVE_COMMENT,
  CLEAR_ITEM,
} from '../actions/types';

const initialState = {
  items: [],
  item: null,
  loading: true,
  error: {},
};

function itemReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ITEMS:
      return {
        ...state,
        items: payload,
        loading: false,
      };
    case GET_ITEM:
      return {
        ...state,
        item: payload,
        loading: false,
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [payload, ...state.items],
        loading: false,
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.posts.filter((item) => item._id !== payload),
        loading: false,
      };
    case ITEM_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case UPDATE_LIKES:
      return {
        ...state,
        items: state.items.map((item) =>
          item._id === payload.id ? { ...item, likes: payload.likes } : item
        ),
        loading: false,
      };
    case ADD_COMMENT:
      return {
        ...state,
        item: { ...state.item, comments: payload },
        loading: false,
      };
    case REMOVE_COMMENT:
      return {
        ...state,
        item: {
          ...state.item,
          comments: state.item.comments.filter(
            (comment) => comment._id !== payload
          ),
        },
        loading: false,
      };
    default:
      return state;
  }
}

export default itemReducer;
