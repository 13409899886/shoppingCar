<template>
  <div style="min-height: 100%;">
  	<div class="weui-cells">
        <div class="weui-cell weui-cell_access" v-if="messageList" v-for="item in messageList" @click="readMessage(item)">
            <div class="weui-cell__bd">{{item.title}}<span class="weui-badge weui-badge_dot" v-if="item.status==0" style="margin-left: 5px;margin-right: 5px;"></span></div>
            <div class="weui-cell__ft" style="font-size: 0">
                <span style="vertical-align:middle; font-size: 12px;" >{{item.add_time| formatDate}}</span>
                
            </div>
        </div>
    </div>
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
            return formatDate(date, 'yyyy-MM-dd');
        }
   },
  mounted(){
//	this.$router.push("/evaluateDetail/3")
	this.userid=localStorage.getItem("userId")
	this.lodding=true
	if(this.userid){
		this.$http.post(this.Api+'Message/index',{userid:1}).then(response => {
		      	this.lodding=false
		      	if(response.body.error==0){
		      		this.messageList=response.body.data;
		      		console.log(response.body)
		      	}
			  });
	}else{
		alert("请登录")
		this.$router.push("/login")
	}
  },
  methods:{
  	readMessage(item){
  		
  		if(item.type=="1"){//活动消息
  			this.$router.push("/activityMessage")
  		}else if(item.type=="2"){//交易消息
  			
  		}else if(item.type=="3"){//评价消息
  			this.$router.push("/evaluateDetail/"+item.id)
  		}
  	}
  }
}
</script>

<style scoped>
	.date{font-size: 12px; color: #999;}
	.weui-media-box__hd{background: url(../../../static/images/newsLogo.png) no-repeat center center; background-size: cover;}
</style>
