// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
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
import AllH from './pages/tapPage/indexpage/allList'
import NewsList from './pages/tapPage/indexpage/newsList'
import squareDetails from './pages/tapPage/square/squareDetails'
import Fabiao from './pages/tapPage/square/fabiao'
import Task from './pages/fabu/fabuTask'
import Skill from './pages/fabu/fabuSkill'
import FabuList from './pages/fabu/fabuList'
import FabuClassify from './pages/fabu/fabuClassify'
import OrderList from './pages/order/orderList'
import SkillList from './pages/order/skillList'
import Login from './pages/login/login'
import Money from './pages/money/money'
import MyScore from './pages/money/myScore'
import GiveScore from './pages/money/giveScore'
import ShoucangList from './pages/shoucang/shoucangList'
import FocusList from './pages/shoucang/focus'
import ChangeBindTel from './pages/login/changeBindTel'
import Telcode from './pages/login/telcode'
import LookTalent from './pages/fabu/lookTalent'
import EvaluateDetail from './pages/tapPage/message/evaluateDetail'
import ActivityMessage from './pages/tapPage/message/activityMessage'
//Vue.prototype.Api="http://192.168.31.233/fenghuaxiaoyuan/code/index.php?s=Api/"
Vue.prototype.Api="http://fhxy.helpxue.com/Api/index.php?s=Api/"
import NewsDetail from './pages/tapPage/newsDetail'
Vue.http.options.emulateJSON = true;
var router=new myRouter({
	mode:"history",
//	base:"/html/",
	routes:[
		{
			path:"/",
			redirect:"/index/0"
		},
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
			path:"/detail/:id/:type", 
			component:Product
		},
		{
			path:"/all/:type",
			component:AllH
		},
		{
			path:"/NewsList",
			component:NewsList
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
			path:"/fabuTast/:type/:id",//id文章id
			component:Task
		},
		{
			path:"/lookTalent/:Type/:type",//Type区分发布的类型 type 返回的发布类型
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
			path:"/skillList",
			component:SkillList
		},
		{
			path:"/shoucangList",
			component:ShoucangList
		},
		{
			path:"/focusList/:type",//type区分是关注列表或朋友裂变
			component:FocusList
		},
		{
			path:"/myScore/:score",
			component:MyScore
		},
		{
			path:"/giveScore/:touserid/:goods_id/:goods_type",
			component:GiveScore
		},
		{
			path:"/evaluateDetail/:ID",
			component:EvaluateDetail
		},
		{
			path:"/activityMessage",
			component:ActivityMessage
		},
		{
			path:"/newsDetail/:id/:type",//id 文章id type 区分父级页面
			component:NewsDetail
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
