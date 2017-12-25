
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vuex from 'vuex'

Vue.use(Vuex)

import store from './store/sample'

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


// import ProductList from './components/ProductList.vue'
// import CartLabel from './components/CartLabel.vue'

// const app = new Vue({
//     el: '#app',

//     components: {
//         ProductList,
//         CartLabel,
//     },

// });

import VxProductList from './components/VxProductList.vue'
import VxCartLabel from './components/VxCartLabel.vue'

const vxApp = new Vue({
    el: '#app',
    store: new Vuex.Store(store),
    components: {
        VxProductList,
        VxCartLabel,
    },

});
