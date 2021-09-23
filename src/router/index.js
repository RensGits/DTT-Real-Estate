import { createRouter, createWebHistory } from 'vue-router'

import AboutPage from '../views/AboutPage.vue'
import CreateListingPage from '../views/CreateListingPage.vue'
import EditListingPage from '../views/EditListingPage.vue'
import HouseDetailsPage from '../views/HouseDetailsPage.vue'
import HousesOverviewPage from '../views/HousesOverviewPage.vue'



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
    path: '/details',
    name: 'houseDetailsPage',
    component: HouseDetailsPage
  },
  {
    path: '/',
    name: 'housesOverviewPage',
    component: HousesOverviewPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
