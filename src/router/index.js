import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from '../views/AboutPage.vue'
import CreateListingPage from '../views/CreateListingPage.vue'
import HouseDetailsPage from '../views/HouseDetailsPage.vue'
import HousesOverviewPage from '../views/HousesOverviewPage.vue'
import MyListingsPage from '../views/MyListingsPage.vue'


const routes = [
  {
    path: '/',
    name: 'housesOverviewPage',
    component: HousesOverviewPage
  },
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
    path: '/edit-listing/:id',
    name: 'editListingPage',
    component: CreateListingPage,
    props: true
  },
  {
    path: '/details/:id',
    name: 'houseDetailsPage',
    component: HouseDetailsPage,
    props: true
  },
  {
    path: '/my-listings',
    name: 'myListings',
    component: MyListingsPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),  // enables the user to go back to the previous page when pressing back in the browser or mobile
  routes
})

export default router
