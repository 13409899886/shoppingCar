<template>
  <div>
  	<keep-alive>
  	<router-view></router-view>
  	</keep-alive>
    <div class="weui-tabbar">
        <router-link :to="{path:item.LinkTo}" v-for="(item,index) in barList" href="javascript:;"  class="weui-tabbar__item" :class="{'weui-bar__item_on':nowIndex==index}" tag="a" :key="index">
            <span style="display: inline-block;position: relative;" @click="fabu(index)">
                <img v-if="nowIndex!==index" :src="item.Url+'.png'" alt="" class="weui-tabbar__icon">
                <img v-if="nowIndex==index" :src="item.Url+'active'+'.png'" alt="" class="weui-tabbar__icon">
            </span>
            <p class="weui-tabbar__label">{{item.Text}}</p>
        </router-link>
    </div>
    <my-dialog :isshow="isshow" @close="onclose">
    	<div class="flex flex-pack-center">
    		<router-link :to="{path:'/fabuTast'}" tag="div" class="task flex flex-v flex-align-center">
    			<div class="round" ></div>
    			发布任务
    		</router-link>
    		<router-link :to="{path:'/fabuSkill'}" tag="div" class="skill flex flex-v flex-align-center">
    			<div class="round"></div>
    			发布技能
    		</router-link>
    	</div>
    </my-dialog>
  </div>
</template>

<script>
import myDialog from "../components/dialog.vue"
export default {
  data(){
		return{
			nowIndex:0,
			isshow:false,
			barList:[
				{
					Url:"../../static/images/home",
					LinkTo:"/index/index1",
					Text:"首页"
				},
				{
					Url:"../../static/images/square",
					LinkTo:"/index/square",
					Text:"广场"
				},
				{
					Url:"../../static/images/release",
					LinkTo:"",
					Text:"发布"
				},
				{
					Url:"../../static/images/news",
					LinkTo:"/index/message",
					Text:"消息"
				},
				{
					Url:"../../static/images/me",
					LinkTo:"/index/my",
					Text:"我的"
				}
			]
		}
  },
  mounted(){
  		this.$router.push("/index/index1")
  },
  components:{
  	myDialog
  },
  methods:{
  	onclose(){
  		this.isshow=false
  	},
  	fabu(index){
  		if(index==2){
  				this.isshow=true
  		}else{
  			this.nowIndex=index;
  			console.log(this.nowIndex)
  		}
  	}
  }
}
</script>

<style scoped>
		.weui-bar__item_on .weui-tabbar__label{color: #ff7f3d;}
		.weui-tabbar{position: fixed; background: #fff;}
		.task,.skill{text-align: center; color: #fff; width: 100px;}
		.task{margin-right: 30px;}
		.task .round{background-image:url(../../static/images/task.png)}
		.skill .round{background-image:url(../../static/images/skill.png)}
		.round{width: 70px; height:70px; border-radius: 50%; background-position: center center; background-repeat:no-repeat; background-size:cover; background-color:#fff ;}
</style>
