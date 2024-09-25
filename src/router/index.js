import { createRouter, createWebHistory } from 'vue-router';
import ErrorPage from '../views/404-page.vue';
import CourseDashboard from '../views/course-dashboard.vue';
import courseDesc from '../components/tab-views/course-desc.vue';
import noInfo from '../components/tab-views/no-Info.vue';

const routes = [
  {
    path: '/:pathMatch(.*)*', // This is the wildcard path
    name: 'error-page',
    component: ErrorPage,
  },
  {
    path: '/',
    name: 'course-dashboard',
    component: CourseDashboard,
    children: [
      { path: '/course-desc', name: 'course-desc', component: courseDesc },
      { path: '/reviews', name: 'reviews', component: noInfo},
      { path: '/discussion', name: 'descussion', component: noInfo},
      { path: '/resources', name: 'resources', component: noInfo},
      { path: '/instructor', name: 'instuctor', component: noInfo},
    ],
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
