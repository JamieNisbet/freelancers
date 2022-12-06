import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './axios/index';
import { setCurrentUser, logoutUser } from './reducers/actions/authActions';
import store from './store';
import { Toaster } from 'react-hot-toast'; // Toast Notifications
// import FreelancerProfile from './components/profile/FreelancerProfile';
// import ErrorBoundries from './shared/ErrorComponent';
import { Provider } from 'react-redux';
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
    window.location.href = 'https://devlogin.supportpod.com/';
  }
}

const publicRouteComponents = publicRoutes.map((route, i) => (
  <Route
    key={i}
    path={route.path}
    element={
      <Suspense fallback={<>...</>}>
        <route.element />
      </Suspense>
    }
  />
));

const privateRouteComponents = privateRoutes.map((route, i) => (
  <Route
    key={i}
    path={route.path}
    element={
      <Suspense fallback={<>...</>}>
        <Protected>
          <route.element />
        </Protected>
      </Suspense>
    }
  />
));

const App = () => {
  return (
    <Provider store={store}>
      <Router>
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
      </Router>
    </Provider>
  );
};

export default App;
