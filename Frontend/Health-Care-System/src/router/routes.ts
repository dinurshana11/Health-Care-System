import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    meta: { requiresAuth: false },
    children: [
      { path: 'login', component: () => import('pages/auth/SignInPage.vue') },
      { path: 'signup', component: () => import('pages/auth/SignUpPage.vue') }
    ]
  },

  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      { path: '', component: () => import('pages/IndexPage.vue'), meta: { requiresAuth: true } },

      // Doctors
      { path: 'doctor', component: () => import('pages/doctors/DoctorPage.vue'), meta: { requiresAuth: true } },

      // Doctors
      { path: 'paitent', component: () => import('pages/paitents/PaitentPage.vue'), meta: { requiresAuth: true } },

      // Doctors
      { path: 'payment', component: () => import('pages/payment/PaymentPage.vue'), meta: { requiresAuth: true } },

      // Doctors
      { path: 'appointment', component: () => import('pages/appointment/AppointmentPage.vue'), meta: { requiresAuth: true } },


    ]
  },
];

export default routes;
