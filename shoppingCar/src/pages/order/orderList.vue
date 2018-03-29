<template>
  <div style="min-height: 100%;">
  	<div class="comeBack" @click="$router.go(-1)">返回</div>
  	<div class="weui-navbar">
        <div class="weui-navbar__item " @click="tabChange(0)" :class="{'weui-bar__item_on':nowIndex==0}">
            未支付
        </div>
        <div class="weui-navbar__item" @click="tabChange(1)" :class="{'weui-bar__item_on':nowIndex==1}">
            已支付
        </div>
        <div class="weui-navbar__item" @click="tabChange(2)" :class="{'weui-bar__item_on':nowIndex==2}">
            待评价
        </div>
    </div>
  	<div class="weui-panel weui-panel_access" v-for="item in orderList">
        <div class="weui-panel__bd">
            <div class="weui-media-box weui-media-box_appmsg">
                <div class="weui-media-box__hd" :style="'background-image:url('+item.smeta+')'"></div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">{{item.name}} <span>${{item.pay_money}}</span></h4>
                    <p class="weui-media-box__desc">{{item.connect}}</p>
                    <ul class="weui-media-box__info">
                        <!--<li class="weui-media-box__info__meta">浏览：100</li>-->
                        <li class="weui-media-box__info__meta">
                        	 	<a href="javascript:;" @click="comment(item)" v-if="status==2" class="weui-btn weui-btn_mini weui-btn_default">待评价</a>
            								<router-link :to="{path:''}" v-if="status==-1" class="weui-btn weui-btn_mini weui-btn_default">取消订单</router-link>
            								<a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_default daifukuan" v-if="status==-1" >付款</a>
                        </li>
                       
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
    <span v-if="orderList&&orderList.length=='0'" class="empty">没有数据</span>
	    <i class="weui-loading" v-show="lodding" style=""></i>
  </div>
</template>

<script>

export default {
  data(){
		return{
			nowIndex:0,
			status:-1,
			userid:null,
			orderList:null,
			lodding:false
		}
  },
  mounted(){
  	this.tabChange("0")
  },
  methods:{
  	//点击评价将订单存入本地缓存 方便评价页展示
  	comment(item){
  		localStorage.setItem("tobecomment",JSON.stringify(item))
  		this.$router.push('/giveScore/'+item.userid+'/'+item.id+'/'+item.type)
  	},
  	//tab切换
  	 tabChange(index){
  	 	this.lodding=true
  	 	this.nowIndex=index
  	 	if(this.nowIndex==0){
  	 		this.status=-1
  	 	}else if(this.nowIndex==1){
  	 		this.status=1
  	 	}
  	 	else if(this.nowIndex==2){
  	 		this.status=2
  	 	}
  	 	
  	 	this.userid=localStorage.getItem("userId")
  	 	this.$http.post(this.Api+"UserCenter/buy",{userid:6,status:this.status}).then(response => {//获取数据
      	console.log(response)
      	this.lodding=false
      	if(response.body.error==0){
      		this.orderList=response.body.data
      	}
	 	 	});
  	 	
  	 }
  }
}
</script>

<style scoped>
	.date{font-size: 12px; color: #999;}
	.weui-media-box__hd{background: url(../../../static/images/banner.png) no-repeat center center; background-size: cover;}
	.weui-media-box_appmsg{
			-webkit-box-align: start; 
    -webkit-align-items: start; 
     align-items: start; 
		}
		.operation{text-align: right; border-top:1px solid #e5e5e5;padding: 10px 15px;}
		.weui-btn_default{background-color:#fff;overflow: hidden; border-radius: 20px; border:1px solid #ffa515}
		.weui-btn:after{width: 190%; display: none;}
		.weui-btn{margin: 0; color: #ffa515;}
		.weui-media-box__info{margin-top:5px;}
		.weui-media-box__title span{color: #ff9e19; float: right;}
		.weui-media-box__info .weui-media-box__info__meta:first-child {float:right}
		.weui-media-box__info__meta{padding-right: 0;}
		.weui-btn:after{border-color:#ffa515}
		.weui-navbar{position: relative;}
		.weui-navbar{background: #fff; }
		.weui-bar__item_on{color: #ffa515;background: #fff; }
		.weui-bar__item_on:before{content:"" ; position: absolute;left: 0;right: 0; bottom:0; height: 1px; background: #ffa515;}
		.weui-navbar__item:after,.weui-navbar:after{display: none;}
</style>
