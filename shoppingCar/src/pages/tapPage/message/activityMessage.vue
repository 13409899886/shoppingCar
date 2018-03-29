<template>
  <div  id="box">
  	<div class="comeBack" @click="$router.go(-1)" >返回</div>
  	<template v-for="item in messageList" >
  		<div class="box">
		  	<span class="date">{{item.add_time| formatDate}}</span>
		  	<div class="weui-panel weui-panel_access" >
		        <div class="weui-panel__bd">
		            <div class="weui-media-box weui-media-box_appmsg flex-v flex-align-center">
		                <div class="weui-media-box__bd">
		                    <h4 class="weui-media-box__title">{{item.title}}</h4>
		                </div>
		                <div class="weui-media-box__hd" :style="'background-image:url('+item.image+')'"></div> 
		                <div class="weui-media-box__bd">
		                    <p class="weui-media-box__desc" v-html="item.contents"></p>
		                </div>
		            </div>
		            
		        </div>
		        <div class="weui-panel__ft">
		            <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link" @click="$router.push('/newsDetail/'+item.id+'/huodong')">
		                <div class="weui-cell__bd">阅读全文</div>
		                <span class="weui-cell__ft"></span>
		            </a>    
		        </div>
		    </div>
		   </div>
	  </template>
  </div>
</template>

<script>
import {formatDate} from '../../../../static/js/date.js';

export default {
 filters: {
        formatDate(time) {
            var date = new Date(time*1000);
            return formatDate(date, 'yyyy-MM-dd ');
        }
   },
 data(){
		return{
			messageList:null
		}
  },
  components:{
	
  },
	updated(){

	},
	mounted(){
		lodding:true
		
		//根据消息id获取详情
		this.$http.get(this.Api+'Message/hdlist').then(response => {
      	this.lodding=false
      	if(response.body.error==0){
      		this.messageList=response.body.data
      		console.log(this.messageList)
      	}
      	
	  });
	},
	methods:{
	
	}
}
</script>

<style scoped>
	.weui-media-box>*{width: 100%;}
	.banner{display: block;width: 100%;}
	.pay{position: fixed;left: 0; right: 0; bottom: 0; text-align: right;padding: 10px; background: #fff; color: #fca120; box-shadow: 0 0 5px #f0f0f0;}
	.pay .weui-btn {vertical-align:middle; margin-left: 15px; background-color: #fca120;}
	.weui-btn{float: right;}
	.weui-media-box__hd{
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-color: #f0f0f0;
    width: 100%;height: 200px;
    margin: 0;
    
		}
		.comment .weui-media-box_appmsg{
			-webkit-box-align: start; 
    -webkit-align-items: start; 
     align-items: start; 
     background: #f0f0f0;
		}
		.weui-media-box__info__meta img,.weui-media-box__desc img{height: 12px;}
		.weui-media-box__title >span{font-size: 14px; color: #999; float:right}
		.kecheng .weui-media-box__desc {color: #fca120;}
		.weui-media-box__bd >:nth-child(2) {margin-bottom: 15px;}
		.weui-media-box__desc .weui-media-box__hd{margin-top: 15px; height: 80px; width: 80px;}
		.comment .weui-media-box >.weui-media-box__hd{border-radius: 50%;}
		.weui-tabbar{width: 150px; position: relative;background: #fff;}
		.weui-tabbar:before{display: none;}
		.weui-btn{margin: 0; border-radius: 20px;border: 1px solid #ffa515; color: #ffa515; background: #fff;line-height: 1.5;}
		.weui-btn:after{display: none;}
		.weui-tabbar__icon{width: 23px; height: 23px;}
		.goodsInfo .weui-media-box__title span{margin-left: 15px; font-size: 15px; color: #ffa515;}
		.weui-media-box{}
		.goods .weui-media-box__title span{color: #ffa515;}
		.comment .weui-media-box__desc{color: #333;}
		.weui-media-box__bd{padding: 10px;}
		.box{padding: 10px;}
		.weui-panel.weui-panel_access{border-radius: 10px;}
		.date {display: block;width: 100px; text-align: center; color: #fff; border-radius: 10px; margin: auto;background: #ddd; font-size: 12px;margin-top: 10px;}
</style>
