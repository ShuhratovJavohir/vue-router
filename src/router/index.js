import { createRouter, createWebHistory } from "vue-router";
import Home from '@/pages/Home.vue'
import Cars from '@/pages/Cars.vue'
import CarsItem from '@/pages/CarsItem.vue'
import NotFound from '@/pages/404.vue'

const roters = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/cars', name: 'Cars', component: Cars},
    {path: '/cars/:id', name: 'CarsItem', component: CarsItem},
    {path: '/:catchAll(.*)', name: '404Page', component: NotFound}
  ]
})

export default roters
