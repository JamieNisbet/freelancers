import { lazy } from 'react';

export const publicRoutes = [
  {
    path: '/',
    exact: true,
    element: lazy(() => import('../pages/auth/Login')),
  },
  {
    path: '/login',
    exact: true,
    element: lazy(() => import('../pages/auth/Login')),
  },
  {
    path: '/verify-email',
    exact: true,
    element: lazy(() => import('../pages/auth/VerifySuccess')),
  },
  {
    path: '/register',
    exact: true,
    element: lazy(() => import('../pages/auth/Register')),
  },
  {
    path: '/registration-success',
    exact: true,
    element: lazy(() => import('../pages/auth/RegistrationSuccess')),
  },
  {
    path: '/forgot-password',
    exact: true,
    element: lazy(() => import('../pages/auth/ForgotPassword')),
  },
  {
    path: '/reset-password',
    exact: true,
    element: lazy(() => import('../pages/auth/ResetPassword')),
  },
  {
    path: '/reset-password-success',
    exact: true,
    element: lazy(() => import('../pages/auth/ResetPassword')),
  },
  {
    path: '/job-listing',
    exact: true,
    element: lazy(() => import('../pages/auth/Login')),
  },
];
