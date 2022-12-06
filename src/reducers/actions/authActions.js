import { freelancerApi as axios, setAuthToken } from '../../axios/index';
import jwt_decode from 'jwt-decode';
import * as URL from '../../utils/apiEndpoints';

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING, SET_PLATFORM } from '../actions/types';
import { LogOutLink } from '../../config/Constants';

// Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post(URL.REGISTER_URL, userData)
    .then((res) => history.push('/registration-success'))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      }),
    );
};

// Confirm Email
export const confirmEmail = (userData) => (dispatch) => {
  axios
    .post(URL.EMAIL_CONFIRM, userData)
    .then((res) => {
      const { email } = res.data;

      localStorage.setItem('validation_email', email);
      localStorage.setItem('user_role', res.data.platforms && res.data.platforms[0]);
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      }),
    );
};

// Register User
export const verifyEmail = (userData, history) => (dispatch) => {
  axios
    .post(URL.VERIFY_EMAIL, userData)
    .then((res) => history.push('/verification-email-sent'))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      }),
    );
};

// Create User
export const createAdminUser = (userData, history) => (dispatch) => {
  axios
    .post(URL.OLD_REGISTER_URL, userData)
    .then((res) => history.push('/admin-users'))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      }),
    );
};

// Update User
export const updateAdminUser = (userData, history) => (dispatch) => {
  axios
    .post(URL.UPDATE_ROLE, userData)
    .then((res) => history.push('/admin-users'))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response && err.response.data,
      }),
    );
};

// Login - get user token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post(URL.LOGIN_URL, userData)
    .then((res) => {
      // Save to localStorage
      // Set token to localStorage
      const { token } = res.data;
      const { email, password, userRole, platforms, isActiveFreelancer } = res.data.user;
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      localStorage.setItem('userRole', userRole);
      localStorage.setItem('platform', platforms);
      localStorage.setItem('activeFreelancer', isActiveFreelancer);

      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);

      // console.log("login decoded", decoded);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response?.data,
      }),
    );
};

// Set screenname
const authRole = localStorage.getItem('userRole');
export const setScreenName = (userData, history) => (dispatch) => {
  axios
    .post(URL.SCREEN_NAME, userData)
    .then((res) => {
      if (res.data === 'Success') {
        if (authRole == 1) {
          history.push('/freelancers');
        } else if (authRole == 2) {
          history.push('/edit-profile');
        } else if (authRole == 3) {
          history.push('/service-requests');
        } else if (authRole == 4) {
          history.push('/freelancers');
        } else if (authRole == 5) {
          history.push('/freelancers');
        } else {
          history.push('/dashboard');
        }
      }
    })

    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      }),
    );
};

// remove profile pic
export const removeProfilePicture = (userData, history) => (dispatch) => {
  axios
    .post(URL.REMOVE_PROFILE_PICTURE, userData)
    .then((res) => {
      history.push('/edit-profile');
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      }),
    );
};

// Forgot Password
export const forgotPassword = (userData, history) => (dispatch) => {
  axios
    .post(URL.FORGOT_PASSWORD, userData)
    .then((res) => {
      if (res.status === 200) {
        dispatch(clearErrors());
      }
    })

    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      }),
    );
};

// Forgot Password
export const checkEmail = (userData) => (dispatch) => {
  axios
    .post(URL.CHECK_EMAIL, userData)
    .then((res) => {
      console.log('forgot password response', res);
    })

    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      }),
    );
};

// Reset Password
export const resetPassword = (userData, history) => (dispatch) => {
  axios
    .post(URL.RESET_PASSWORD, userData)
    .then((res) => {
      history.push('/reset-password-success');
    })

    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      }),
    );
};

export const updateProfile = (userData, history) => (dispatch) => {
  axios
    .post(URL.UPDATE_PROFILE, userData)
    .then((res) => {
      history.push('/edit-profile');
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      }),
    );
};
// update user

export const updateUser = (userData, history) => (dispatch) => {
  axios
    .post(URL.UPDATE_PROFILE, userData)
    .then((res) => {
      history.push('/id-verification');
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      }),
    );
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};

// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  // localStorage.removeItem("jwtToken");
  // localStorage.removeItem("jobBidId");
  // localStorage.removeItem("jobSrId");

  localStorage.clear();

  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  window.location.assign(`${LogOutLink}`);
};

// Created By: Taniya Malviya
// set platform
export const setPlatform = (plaform) => (dispatch) => {
  dispatch({
    type: SET_PLATFORM,
    payload: plaform,
  });
};

// clear all error
export const clearErrors = () => (dispatch) => {
  dispatch({
    type: GET_ERRORS,
    payload: {},
  });
};
