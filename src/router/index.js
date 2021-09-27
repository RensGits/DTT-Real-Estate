import { createRouter, createWebHistory } from 'vue-router'

import AboutPage from '../views/AboutPage.vue'
import CreateListingPage from '../views/CreateListingPage.vue'
import EditListingPage from '../views/EditListingPage.vue'
import HouseDetailsPage from '../views/HouseDetailsPage.vue'
import HousesOverviewPage from '../views/HousesOverviewPage.vue'
import RegisterPage from '../views/RegisterPage.vue'


const routes = [
  {
    path: '/about',
    name: 'aboutPage',
    component: AboutPage
  },
  {
    path: '/create-listing',
    name: 'createListingPage',
    component: CreateListingPage
  },
  {
    path: '/edit-listing',
    name: 'editListingPage',
    component: EditListingPage
  },
  {
    path: '/details/:id',
    name: 'houseDetailsPage',
    component: HouseDetailsPage,
    props: true
  },
  {
    path: '/',
    name: 'housesOverviewPage',
    component: HousesOverviewPage
  },
  {
    path: '/register',
    name: 'registerPage',
    component: RegisterPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
