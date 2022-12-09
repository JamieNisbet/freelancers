import { SET_LOADING, GET_LOADING } from '../reducers/actions/types';

const isEmpty = require('is-empty');

const initialState = {
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        loading: action.payload,
      };
    case GET_LOADING:
      return state.loading;
    default:
      return state;
  }
}
