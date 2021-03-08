import {
  GET_STORE,
  GET_STORES,
  STORE_ERROR,
  UPDATE_STORE,
  CLEAR_STORE,
  STORE_DELETED,
} from '../actions/types';

const initialState = {
  store: null,
  stores: [],
  loading: true,
  error: {},
};

function storeReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_STORE:
    case UPDATE_STORE:
      return {
        ...state,
        store: payload,
        loading: false,
      };
    // case GET_STORES:
    //   return {
    //     ...state,
    //     stores: payload,
    //     loading: false,
    //   };
    case STORE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        store: null,
      };
    case CLEAR_STORE:
      return {
        ...state,
        store: null,
      };
    // case GET_REPOS:
    //   return {
    //     ...state,
    //     repos: payload,
    //     loading: false
    //   };
    // case NO_REPOS:
    //   return {
    //     ...state,
    //     repos: []
    //   };
    case STORE_DELETED:
      return {
        ...state,

        loading: false,
        store: null,
      };
    default:
      return state;
  }
}

export default storeReducer;
