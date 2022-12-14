import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from './pages/ErrorBoundary';

import './index.css';

import Loading from './components/Loading';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<Loading />}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </Suspense>,
);
