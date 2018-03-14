// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import myRouter from "vue-router"
Vue.use(myRouter)
import myResource from "vue-resource"
Vue.use(myResource)

import Index from './pages/index'
import IndexPage from './pages/tapPage/index'
import Square from './pages/tapPage/square'
import Message from './pages/tapPage/message'
import My from './pages/tapPage/my'
import Product from './pages/tapPage/indexpage/productDetails'
import squareDetails from './pages/tapPage/square/squareDetails'
import Fabiao from './pages/tapPage/square/fabiao'
import Task from './pages/fabu/fabuTask'
import Skill from './pages/fabu/fabuSkill'
import FabuList from './pages/fabu/fabuList'
import FabuClassify from './pages/fabu/fabuClassify'
import OrderList from './pages/order/orderList'
import Login from './pages/login/login'
import Money from './pages/money/money'
import ShoucangList from './pages/shoucang/shoucangList'
import ChangeBindTel from './pages/login/changeBindTel'
import Telcode from './pages/login/telcode'
import LookTalent from './pages/fabu/lookTalent'
Vue.prototype.Api="http://192.168.31.233/fenghuaxiaoyuan/code/index.php?s=Api/"

Vue.http.options.emulateJSON = true;
let router=new myRouter({
	mode:"history",
//	base:"/github/shoppingCar/shoppingCar/dist",
	routes:[
		{
			path:"/",
			redirect:"/index/0"
		},
//{
//			path:"/",
//			redirect:"/login"
//		},
		{
			path:"/",
			component:Index,
			children:[
				{path:"index/:now",component:IndexPage},
				{path:"square/:now",component:Square},
				{path:"message/:now",component:Message},
				{path:"my/:now",component:My}
			]
		},
		{
			path:"/detail/:id",
			component:Product
		},
		{
			path:"/squareDetails/:id",
			component:squareDetails
		},
		{
			path:"/fabiao",
			component:Fabiao
		},
		{
			path:"/fabuTast/:type/:id",
			component:Task
		},
		{
			path:"/lookTalent",
			component:LookTalent
		},
		{
			path:"/fabuSkill",
			component:Skill
		},
		{
			path:"/login",
			component:Login
		},
		{
			path:"/changeBindTel",
			component:ChangeBindTel
		},
		{
			path:"/telcode",
			component:Telcode
		},
		{
			path:"/fabuList/:type/:userid",
			component:FabuList
		},
		{
			path:"/fabuClassify/:type",
			component:FabuClassify
		},
		{
			path:"/money",
			component:Money
		},
		{
			path:"/orderList",
			component:OrderList
		},
		{
			path:"/shoucangList",
			component:ShoucangList
		}
	]
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
