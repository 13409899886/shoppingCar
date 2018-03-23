<template>
  <div style="padding-bottom: 80px;" >
  	<i class="weui-loading" v-show="lodding" style=""></i>
  	<div v-if="userInfo">
	  	<div class="userInfo flex flex-v flex-align-center flex-pack-center">
	  		<div class="config">
	  				<img src="../../../static/images/site.png"/>
	  		</div>
	  		<div class="userPic"></div>
	  		<div class="userName">莫小玲<img src="../../../static/images/icon-man.png" alt="" /><img src="../../../static/images/icon-woman.png" alt="" /></div>
	  		<a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_default">学生认证</a>
				<ul class="amount1 amount">
					<li>粉丝：{{userInfo.amountFans}}</li>
					<li><img src="../../../static/images/icon-wallet.png"/>{{userInfo.amountMoney}}</li>
				</ul>
	  		<ul class="amount2 amount">
					<li @click="$router.push('/focusList/focu')">{{userInfo.amountFocus}} <br />关注</li>
					<li @click="$router.push('/focusList/friend')">{{userInfo.amountFriend}}<br />朋友</li>
					<li @click="$router.push('/MyScore/'+userInfo.amountComment)">{{userInfo.amountComment}}<br />评分</li>
				</ul>
	  	</div>
	  	<div class="weui-cells weui-panel" v-if=false>
        <a class="weui-cell weui-cell_access js_item" data-id="button" href="javascript:;">
            <div class="weui-cell__bd">
                <p>积分商城</p>
            </div>
            <div class="weui-cell__ft"></div>
        </a>
        <div class="weui-grids">
	        <a href="javascript:;" class="weui-grid">
	            <div class="weui-grid__icon">
	                <img src="../../../static/images/fabu.png" alt="">
	            </div>
	            <p class="weui-grid__label">Grid</p>
	        </a>
	        <a href="javascript:;" class="weui-grid">
	            <div class="weui-grid__icon">
	                <img src="../../../static/images/fabu.png" alt="">
	            </div>
	            <p class="weui-grid__label">Grid</p>
	        </a>
	        <a href="javascript:;" class="weui-grid">
	            <div class="weui-grid__icon">
	                <img src="../../../static/images/fabu.png" alt="">
	            </div>
	            <p class="weui-grid__label">Grid</p>
	        </a>
	    </div>
    </div>
  	<div class="weui-cells weui-panel">
  		
        <router-link :to="{path:'/fabuList/task/'+userid}" class="weui-cell weui-cell_access js_item" data-id="button" href="javascript:;">
            <div class="weui-cell__bd">
                <p>我的任务</p>
            </div>
            <div class="weui-cell__ft">进行中 : {{userInfo.amountTasking}}</div>
        </router-link>
        <router-link :to="{path:'/fabuList/skill/'+userid}" class="weui-cell weui-cell_access js_item" data-id="button" href="javascript:;">
            <div class="weui-cell__bd">
                <p>我的技能</p>
            </div>
            <div class="weui-cell__ft">已上架 :{{userInfo.amountSkill}}</div>
        </router-link>
        <router-link :to="{path:'/money'}" class="weui-cell weui-cell_access js_item" data-id="input" >
            <div class="weui-cell__bd">
                <p>我的钱包</p>
            </div>
            <div class="weui-cell__ft">余额 : {{userInfo.amountMoney}}</div>
        </router-link>
        <a class="weui-cell weui-cell_access js_item" data-id="list" href="javascript:;" v-if=false>
            <div class="weui-cell__bd">
                <p>我的积分</p>
            </div>
            <div class="weui-cell__ft">积分 : {{userInfo.amountFocus}}</div>
        </a>
       
        <router-link :to="{path:'/skillList'}" class="weui-cell weui-cell_access js_item" data-id="uploader" >
            <div class="weui-cell__bd">
                <p>我卖出的</p>
            </div>
            <div class="weui-cell__ft"></div>
        </router-link>
        <router-link :to="{path:'/orderList'}" class="weui-cell weui-cell_access js_item" data-id="uploader" >
            <div class="weui-cell__bd">
                <p>我买到的</p>
            </div>
            <div class="weui-cell__ft"></div>
        </router-link>
        <router-link :to="{path:'/shoucangList'}" class="weui-cell weui-cell_access js_item" data-id="uploader">
            <div class="weui-cell__bd">
                <p>我的收藏</p>
            </div>
            <div class="weui-cell__ft"></div>
        </router-link>
        <router-link :to="{path:'/changeBindTel'}" class="weui-cell weui-cell_access js_item" data-id="uploader" >
            <div class="weui-cell__bd">
                <p>绑定手机</p>
            </div>
            <div class="weui-cell__ft"></div>
        </router-link>
    	</div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
		return{
			lodding:false,
			userid:null,
			userInfo:null
		}
  },
  mounted(){
  	this.userid=localStorage.getItem("userId")
  	this.lodding=true
  	//如果本地没有用户信息就查询是否有用户id 如果没有就跳转登陆 如果有就从服务器获取
  	if(localStorage.getItem("userInfo")){
  		this.userInfo=JSON.parse(localStorage.getItem("userInfo"))
  		this.lodding=false
  		console.log(this.userInfo)
  	}
  	if(this.userInfo==null){
  		if(localStorage.getItem("userId")){
	  		this.$http.post(this.Api+'UserCenter/index',{userid:this.userid}).then(response => {//获取用户数据
		      	console.log(response)
		      	this.lodding=false
		      	if(response.body.error==0){
		      		this.userInfo=response.body.data
		      		localStorage.setItem("userInfo",JSON.stringify(response.body.data))//登陆成功存储用户id
		      	}
			  });
	  	}else{
	  		this.$router.push("/login")
	  	}
  	}
  	
  },
  methods:{
  	
  	
  }
}
</script>

<style scoped>
	.userInfo{background:-webkit-linear-gradient(top,#ffa515,#ff7e3d); color: #fff;}
	li{float: left;}
	ul{overflow: hidden;}
	.weui-cell__ft{color: #ffa515;}
	.config{overflow: hidden;width: 100%; padding: 10px;}
	.config img{float: right; height: 20px;}
	.userPic{width: 70px; height: 70px; border-radius: 50%; overflow: hidden; background: url(../../../static/images/me.png) no-repeat center center; background-size:cover; background-color:#2e5b78 ;border: 2px solid rgba(255,255,255,.3);}
	.userInfo>*:not(.config){margin-bottom: 10px;}
	.userName img{height: 25px; vertical-align: middle;}
	.amount img{height: 17px; margin-right: 10px; vertical-align: middle;}
	.amount li{padding: 0 15px ;}
	.amount li:not(:first-child){border-left: 1px solid #fff;}
	.amount2{width: 100%; background: rgba(255,255,255,.3); margin-bottom: 0 !important; padding: 10px; margin-top: 15px;}
	.amount2 li{width: 33%; text-align: center;}
	.amount1{font-size: 12px;}
</style>
