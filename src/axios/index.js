import axios from 'axios';

export const adminApi = axios.create({
  // baseURL: "https://adminapi.supportpod.com",
  baseURL: 'https://devadminapi.supportpod.com/api',
  // baseURL: "http://localhost:8000"
});

export const freelancerApi = axios.create({
  // baseURL: "https://freelancersapi.supportpod.com",
  baseURL: 'https://devfreelancersapi.supportpod.com/api',
  // baseURL: "http://localhost:8080",
});
