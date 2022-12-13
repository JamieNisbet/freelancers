import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';
import { useSelector } from 'react-redux';
import Header from './layout/Header';

import { setAuthToken } from './axios/index';
import store from './store';
import { setCurrentUser, logoutUser } from './reducers/actions/authActions';

import { Toaster } from 'react-hot-toast'; // Toast Notifications
// import FreelancerProfile from './components/profile/FreelancerProfile';
// import ErrorBoundries from './shared/ErrorComponent';

import Protected from './config/Protected';
import { publicRoutes, privateRoutes } from './config/routes'; // Publicly Available Routes
import Loading from './components/Loading';

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
  <Route
    key={route}
    path={route.path}
    element={
      <Suspense fallback={<Loading />}>
        <route.element />
      </Suspense>
    }
  />
));

const privateRouteComponents = privateRoutes.map((route) => (
  <Route
    key={route}
    path={route.path}
    element={
      <Suspense fallback={<Loading />}>
        <Protected>
          <route.element />
        </Protected>
      </Suspense>
    }
  />
));

const App = () => {
  const storeState = useSelector((state) => state);
  const { loading } = storeState;
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
            <Footer />
          </div>
        </Router>
      )}
    </>
  );
};

export default App;
