// Import Axios library
import axios from 'axios';
import loaderService from '@/services/loaderService'; 

// Create an instance of Axios
const instance = axios.create({
  // You can set custom configurations here if needed
  headers: {
    'Content-Type':'application/json; charset=utf-8',
    'Accept':'*/*',
    // Add other default headers as needed
  }
});

// Add request interceptor
instance.interceptors.request.use(
  (config) => {
    loaderService.showLoader();
    // Check if the user is logged in and has an authorization token
    const token = localStorage.getItem('oauth');
    if (token) {
      // If a token exists, set the Authorization header
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    loaderService.hideLoader();
    // Handle request error
    return Promise.reject(error);
  }
);

// Add response interceptor
instance.interceptors.response.use(
  (response) => {
    loaderService.hideLoader();
    // Handle successful response
    return response;
  },
  (error) => {
    loaderService.hideLoader();
    // Handle response error
    return Promise.reject(error);
  }
);

export default instance;
