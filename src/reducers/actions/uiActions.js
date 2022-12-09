import { SET_LOADING, GET_LOADING } from '../actions/types';

// User loading
export const setLoading = (bool) => {
  return {
    type: SET_LOADING,
    payload: bool,
  };
};

export const getLoading = () => {
  return {
    type: GET_LOADING,
  };
};
