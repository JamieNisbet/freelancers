import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import Loading from './components/Loading';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={<Loading />}>
    <App />
  </Suspense>,
);
