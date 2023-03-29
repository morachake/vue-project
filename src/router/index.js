import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue"
import Team from "../views/Team.vue"
import Product from "../views/Product.vue"


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes :[
        {
            path : '/',
            name: 'home',
            component:Home
        },
        {
            path : '/team',
            name: 'team',
            component:Team
        },
        {
            path : '/product',
            name: 'product',
            component:Product
        },
    ]
})

export default router