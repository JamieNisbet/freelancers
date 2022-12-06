import { SET_CURRENT_USER, SET_PLATFORM, USER_LOADING } from '../reducers/actions/types';

const isEmpty = require('is-empty');

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  platform: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    case USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case SET_PLATFORM:
      return {
        ...state,
        platform: action?.platform,
      };
    default:
      return state;
  }
}
