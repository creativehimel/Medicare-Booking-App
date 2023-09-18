import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Services from '@/views/Services.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import Contact from '@/views/Contact.vue'
import Doctors from '@/views/Doctors/Doctors.vue'
import DoctorDetails from '@/views/Doctors/DoctorDetails.vue'
import NotFound from '@/views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/doctors',
      name: 'doctor',
      component: Doctors
    },
    {
      path: '/doctors/:id',
      name: 'doctordetails',
      component: DoctorDetails
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Signup
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: NotFound
    }
  ]
})

export default router
