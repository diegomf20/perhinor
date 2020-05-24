import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var routes =[
    { 
        path: '', 
        component: require('./view/Home.vue').default,
        name: 'home'
    },
    {
        path: '/nosotros',
        component: require('./view/Nosotros.vue').default
    },
    {
        path: '/servicio',
        component: require('./view/Servicio.vue').default
    },
    {
        path: '/procesos',
        component: require('./view/Procesos.vue').default
    },
    {
        path: '/clientes',
        component: require('./view/Clientes.vue').default
    }
];
var router=new VueRouter({
    // mode: 'history',
    routes,
    linkExactActiveClass: "active",
});
export default router;