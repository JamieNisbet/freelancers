import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Router Utils
import { publicRoutes } from './config/routes'; // Publicly Available Routes
import { Toaster } from 'react-hot-toast'; // Toast Notifications

const App = () => {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, i) => (
          <Route
            key={i}
            path={route.path}
            element={
              <Suspense fallback={<>...</>}>
                <route.element />
              </Suspense>
            }
          />
        ))}
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
  );
};

export default App;
