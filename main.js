import Vue from 'vue'
import App from './App'
import uView from "uview-ui"
import common from './common/common.js';

Vue.use(uView);
Vue.config.productionTip = false
Vue.prototype.common = common
App.mpType = 'app'

const app = new Vue({
	...App
})

app.$mount()


