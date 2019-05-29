import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home'
import City from '@/page/city'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/city',
            name: 'City',
            component: City
        }
    ]
})