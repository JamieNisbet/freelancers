import axios from 'axios';

export const adminApi = axios.create({
  // baseURL: "https://adminapi.supportpod.com",
  baseURL: 'https://devadminapi.supportpod.com',
  // baseURL: "http://localhost:8000"
});

export const freelancerApi = axios.create({
  // baseURL: "https://freelancersapi.supportpod.com",
  baseURL: 'https://devfreelancersapi.supportpod.com',
  // baseURL: "http://localhost:8080",
});

export const setAuthToken = (token) => {
  if (token) {
    // Apply authorization token to every request if logged in
    axios.defaults.headers.common['Authorization'] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common['Authorization'];
  }
};

export const authToken = { headers: { Authorization: `${localStorage.getItem('jwtToken')}` } };
