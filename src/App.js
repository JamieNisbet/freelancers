import React from 'react';
import { Routes, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './layout/Header';
import { setAuthToken } from './axios';
import store from './store';
import { Provider } from 'react-redux';
import { setCurrentUser, logoutUser } from './reducers/actions/authActions';
import { Toaster } from 'react-hot-toast'; // Toast Notifications
import Protected from './config/Protected';
import { publicRoutes, privateRoutes } from './config/routes'; // Publicly Available Routes

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  console.log('Current User', decoded);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
  }
}

const publicRouteComponents = publicRoutes.map((route) => (
  <Route key={route} path={route.path} element={<route.element />} />
));

const privateRouteComponents = privateRoutes.map((route) => (
  <Route
    key={route}
    path={route.path}
    element={
      <Protected>
        <route.element />
      </Protected>
    }
  />
));

const App = () => {
  return (
    <Provider store={store}>
      <>
        <Router>
          <div>
            <Header />
            <Routes>
              {publicRouteComponents}
              {privateRouteComponents}
            </Routes>
            <Toaster
              toastOptions={{
                success: {
                  style: {
                    borderRadius: '12px',
                    background: '#333',
                    color: '#fff',
                  },
                },
                error: {
                  style: {
                    borderRadius: '12px',
                    background: '#333',
                    color: '#fff',
                  },
                },
                duration: 4000,
              }}
            />
          </div>
        </Router>
      </>
    </Provider>
  );
};

export default App;
