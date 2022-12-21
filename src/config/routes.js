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
    path: '/job-listing',
    exact: true,
    element: lazy(() => import('../pages/freelancers/JobListing')),
  },
  {
    path: '/freelancers',

    exact: true,
    element: lazy(() => import('../pages/freelancers/Freelancers')),
  },
  {
    path: '/admin',
    exact: true,
    element: lazy(() => import('../pages/admin/Admin')),
  },
  {
    path: '/bid-request',
    element: lazy(() => import('../pages/serviceManager/Bid')),
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
  {
    path: '/categories-skills',
    exact: true,
    element: lazy(() => import('../pages/admin/Categories')),
  },
  // {
  //   path: '/add-bids',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  {
    path: '/all-bids',
    exact: true,
    element: lazy(() => import('../pages/serviceManager/AllBids')),
  },
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
  {
    path: '/quotes',
    exact: true,
    element: lazy(() => import('../pages/finances/Quotes')),
  },
  {
    path: '/my-quotes',
    exact: true,
    element: lazy(() => import('../pages/finances/MyQuotes')),
  },
  // {
  //   path: '/CreateInvoice',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  {
    path: '/invoices',
    exact: true,
    element: lazy(() => import('../pages/finances/Invoices')),
  },
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

  {
    path: '/customers',
    exact: true,
    element: lazy(() => import('../pages/admin/Customers')),
  },
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
  {
    path: '/customer-status',
    exact: true,
    element: lazy(() => import('../pages/admin/Status')),
  },
  {
    path: '/customer-category',
    exact: true,
    element: lazy(() => import('../pages/admin/SkillCategories')),
  },
  {
    path: '/service-requests',
    exact: true,
    element: lazy(() => import('../pages/serviceManager/ServiceRequests')),
  },
  {
    path: '/freelancer-service-requests',
    exact: true,
    element: lazy(() => import('../pages/freelancers/ServiceRequests')),
  },
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
  {
    path: '/partners',
    exact: true,
    element: lazy(() => import('../pages/admin/Partners')),
  },
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
  {
    path: '/purchase-orders',
    exact: true,
    element: lazy(() => import('../pages/finances/PurchaseOrders')),
  },
  {
    path: '/jira-requests',
    exact: true,
    element: lazy(() => import('../pages/jira/JiraRequests')),
  },
  // {
  //   path: '/jiraDetails',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  {
    path: '/qa',
    exact: true,
    element: lazy(() => import('../pages/admin/QA')),
  },
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
  {
    path: '/freelancer-messages',
    exact: true,
    element: lazy(() => import('../pages/freelancers/Messages')),
  },
  // {
  //   path: '/freelancer-chat',
  //   exact: true,
  //   element: lazy(() => import('')),
  // },
  {
    path: '/freelancer-services',
    exact: true,
    element: lazy(() => import('../pages/freelancers/Services')),
  },
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

/* USER ROLES 
   Admin = 1
   Freelancer = 2
   Service Manager = 3
*/

export const MenuConstants = {
  freelancer: [
    {
      title: 'Bids',
      route: '/all-bids',
    },
    {
      title: 'Skills',
      route: '/skills',
    },
    {
      title: 'Purchase Orders',
      route: '/purchase-orders',
    },
    {
      title: 'Job Listing',
      route: '/job-listing',
    },
    {
      title: 'Messages',
      route: '/freelancer-messages',
    },
    {
      title: 'My Services',
      route: '/freelancer-services',
    },
    {
      title: 'Service Requests',
      route: '/freelancer-service-requests',
    },
    {
      title: 'My Quotes',
      route: '/my-quotes',
    },
  ],
  admin: [
    {
      title: 'Freelancers',
      route: '/freelancers',
    },
    {
      title: 'Bids',
      route: '/all-bids',
    },
    {
      title: 'Skills',
      route: '/categories-skills',
    },
    {
      title: 'Admin Users',
      route: '/admin-users',
    },
    {
      title: 'Quotes',
      route: '/quotes',
    },
    {
      title: 'Invoices',
      route: '/invoices',
    },
    {
      title: 'Customers',
      route: '/customers',
    },
    // {
    //   title: 'Customer Status',
    //   route: '/customer-status',
    // },
    // {
    //   title: 'Customer Categories',
    //   route: '/customer-category',
    // },
    {
      title: 'Partners',
      route: '/partners',
    },
    {
      title: 'Service Requests',
      route: '/service-requests',
    },
    {
      title: 'Purchase Orders',
      route: '/purchase-orders',
    },
    // {
    //   title: 'Jira Requests',
    //   route: '/jira-requests',
    // },
    // {
    //   title: 'Q&A',
    //   route: '/qa',
    // },
    // {
    //   title: 'Services',
    //   route: '/freelancer-services',
    // },
  ],
  serviceManager: [
    {
      title: 'Freelancers',
      route: '/freelancers',
    },
    {
      title: 'Bid Requests',
      route: '/all-bids',
    },
    {
      title: 'Customers',
      route: '/customers',
    },
    {
      title: 'Quotes',
      route: '/quotes',
    },
    {
      title: 'Service Requests',
      route: '/service-requests',
    },
  ],
  customer: [],
  operationsManager: [],
  resourcesManager: [],
};
