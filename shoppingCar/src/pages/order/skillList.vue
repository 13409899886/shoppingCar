<template>
  <div style="min-height: 100%;">
  	<div class="comeBack" @click="$router.go(-1)">返回</div>
  	<span v-if="fabuList&&fabuList.length=='0'" class="empty">没有数据</span>
  	<div class="weui-panel weui-panel_access" v-if="fabuList" v-for="item in fabuList">
        <div class="weui-panel__bd">
            <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                <div class="weui-media-box__hd" v-if="!item.smeta" :style="'background-image:url('+item.smeta+')'"></div>
                <div class="weui-media-box__hd" :style="'background-image:url('+item.smeta+')'" v-if="item.smeta"></div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">{{item.name}}</h4>
                    <p class="weui-media-box__desc">￥<span style="font-size: 17px;">{{item.pay_money}}</span></p>
                    <ul class="weui-media-box__info">
                        <li class="weui-media-box__info__meta">{{"交易状态"}}</li>
                    </ul>
                </div>
            </a>
            <div class="operation">
            	<router-link :to="{path:''}" v-if="item.status==2" class="weui-btn weui-btn_mini weui-btn_default">查看评价</router-link>
            	<router-link :to="{path:''}" v-if="item.status==1||item.status==2" class="weui-btn weui-btn_mini weui-btn_default">删除订单</router-link>
            	<a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_default daifukuan" v-if="item.status==-1" @click="">等待付款</a>
            </div>
        </div>
    </div>
    <i class="weui-loading" v-show="lodding" style=""></i>
  </div>
</template>

<script>

export default {
  data(){
		return{
			fabuList:null,
			type:"",
			Url:"",//编辑地址
			userid:"",
			delUrl:"",//删除地址
			lodding:false
		}
  },
  mounted(){
  	this.userid=localStorage.getItem("userId")
		this.$http.post(this.Api+"UserCenter/my_sell",{userid:this.userid}).then(response => {//获取用户数据
      	console.log(response)
      	this.lodding=false
      	if(response.body.error==0){
      		this.fabuList=response.body.data
      	}
	  });
  },
  methods:{
//	delet(item){
//		this.lodding=true
//		this.$http.post(this.Api+this.delUrl,{id:item.id}).then(response => {//获取用户数据
//    	console.log(response)
//    	this.lodding=false
//    	if(response.body.error==0){
//					this.fabuList.splice(this.fabuList.indexOf(item),1)
//    	}
//	  	});
//	}
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
		.weui-btn_default{background-color:#fff;overflow: hidden; }
		.weui-btn{border: 1px solid #d8d8d8;}
		.weui-btn:after{width: 190%;}
		.weui-btn{margin: 0;}
		.weui-media-box__info{margin-top:5px;}
		.weui-media-box__desc{color: #ff9e19;}
		.daifukuan{color: #ff9e19; border:1px solid #ff9e19;}
		.weui-btn:after{display: none;}
</style>
