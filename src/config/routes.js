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
];

export const privateRoutes = [
  {
    path: '/freelancers',

    exact: true,
    element: lazy(() => import('../pages/freelancers/Freelancers')),
  },
  {
    path: '/bids',

    exact: true,
    element: lazy(() => import('../pages/freelancers/Bids')),
  },
  {
    path: '/admin',
    exact: true,
    element: lazy(() => import('../pages/admin/Admin')),
  },
  {
    path: '/admin-users',
    exact: true,
    element: lazy(() => import('../pages/admin/AdminUsers')),
  },
  {
    path: '/create-user',
    exact: true,
    element: lazy(() => import('../pages/admin/CreateUser')),
  },
  {
    path: '/update-user',
    exact: true,
    element: lazy(() => import('../pages/admin/UpdateUser')),
  },
  {
    path: '/dashboard',
    exact: true,
    element: lazy(() => import('../pages/admin/Dashboard')),
  },
  {
    path: '/service-manager',
    exact: true,
    element: lazy(() => import('../pages/serviceManager/ServiceManager')),
  },
  {
    path: '/messages',
    exact: true,
    element: lazy(() => import('../pages/freelancers/Messages')),
  },
  {
    path: '/skills',
    exact: true,
    element: lazy(() => import('../pages/freelancers/Skills')),
  },
  {
    path: '/screenname',
    exact: true,
    element: lazy(() => import('../pages/auth/Screenname')),
  },
  {
    path: '/profile',
    exact: true,
    element: lazy(() => import('../pages/auth/Profile')),
  },
  // {
  //   path: '/edit-profile',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/id-verification',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/categories',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/add-bids',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/all-bids',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/bid-request',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/job-details',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/sr-details',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/freelancerRequestDetails',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/edit-bid',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/quotes',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/my-quotes',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/CreateInvoice',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/Invoices',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/quote-details',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/sr-quote-details',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/add-customers',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },

  // {
  //   path: '/customers',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/add-new-customer',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/edit-customer/:email',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/customer-status',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/customer-category',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/service-requests',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/freelancer-service-requests',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/RequestDetails',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/FreelancerRequestDetails/:_id',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/partners',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/PartnerDetails/',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/PartnerTransactions/',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/purchase-details',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/purchase-orders',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/jira-requests',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/jiraDetails',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/qa',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/add-new-qa',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/view-qa',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/freelancer-messages',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/freelancer-chat',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/freelancer-services',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/add-new-service',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  // {
  //   path: '/view-service',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
];
