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
let router=new myRouter({
	mode:"history",
//	base:"/github/shoppingCar/shoppingCar/dist",
	routes:[
		{
			path:"/",
			redirect:"/index"
		},
		{
			path:"/index",
			component:Index,
			children:[
				{path:"index1",component:IndexPage},
				{path:"square",component:Square},
				{path:"message",component:Message},
				{path:"my",component:My}
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
			path:"/fabuTast",
			component:Task
		},
		{
			path:"/fabuSkill",
			component:Skill
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
