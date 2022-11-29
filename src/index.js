import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/NavBar';
import Footer from './components/Footer';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Header />
    <App />
    <Footer />
  </Provider>,
);