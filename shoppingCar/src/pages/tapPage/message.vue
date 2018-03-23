<template>
  <div style="min-height: 100%;">
  	<div class="weui-panel weui-panel_access" v-if="messageList&&messageList.length!='0'">
        <div class="weui-panel__bd">
            <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" v-for="item in messageList" @click="readMessage(item)">
                <div class="weui-media-box__hd" :style="'background-image:url('+item.image+')'">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">{{item.title}}<span class="weui-badge weui-badge_dot" style="margin-left: 5px;margin-right: 5px;" v-if="item.status==0"></span></h4>
                    <p class="weui-media-box__desc">{{item.contents}}</p>
                </div>
                <div class="date">{{item.add_time| formatDate}}</div>
            </a>
           
        </div>
    </div>
    <span v-if="messageList&&messageList.length=='0'">没有新消息</span>
    <i class="weui-loading" v-show="lodding" style=""></i>
  </div>
</template>

<script>
import {formatDate} from '../../../static/js/date.js';
export default {
  data(){
		return{
			messageList:null,
			userid:"",
			lodding:false
		}
  },
  filters: {
        formatDate(time) {
            var date = new Date(time*1000);
            return formatDate(date, 'yyyy-MM-dd hh:mm');
        }
   },
  mounted(){
  	this.userid=localStorage.getItem("userId")
  	this.lodding=true
  	if(this.userid){
  		this.$http.post(this.Api+'Message/index',{userid:this.userid}).then(response => {
		      	this.lodding=false
		      	if(response.body.error==0){
		      		this.messageList=response.body.data;
		      		
		      	}
			  });
  	}else{
  		alert("请登录")
  		this.$router.push("/login")
  	}
  },
  methods:{
  	readMessage(item){
  		this.lodding=true
  		this.$http.post(this.Api+'Message/index',{id:item.id,userid:this.userid}).then(response => {
		      	console.log(response.body)
		      	if(response.body.error==0){
		      		item.status=1
		      		console.log(this.messageList)
		      	}
		      	this.lodding=false
			  });
  	}
  }
}
</script>

<style scoped>
	.date{font-size: 12px; color: #999;}
	.weui-media-box__hd{background: url(../../../static/images/newsLogo.png) no-repeat center center; background-size: cover;}
</style>
