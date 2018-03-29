<template>
  <div style="padding-bottom: 80px;" id="box">
  	<div class="comeBack" @click="$router.go(-1)" >返回</div>
    <div class="weui-panel weui-panel_access goods" style="margin-top: 0;" v-if="goods_info">
	    <div class="weui-media-box weui-media-box_appmsg">
         	<div class="weui-media-box__hd" :style="'background-image:url('+goods_info.smeta+')'"></div>            
	        <div class="weui-media-box__bd">
	            <h4 class="weui-media-box__title">{{goods_info.name}}<span>￥{{goods_info.salary}}</span></h4>
	            <h4 class="weui-media-box__title">{{goods_info.connect}}<div class="weui-btn weui-btn_mini ">已完成</div></h4>
	        </div>
	    </div>
	    
		</div>
   
	   <div class="weui-panel weui-panel_access comment" v-if="pinjia">
		    <div class="weui-panel__bd">
		        <div class="weui-media-box weui-media-box_appmsg" >
		           	<div class="weui-media-box__hd" :style="'background-image:url('+pinjia.headimg+')'"></div> 
		            <div class="weui-media-box__bd">
		                <h4 class="weui-media-box__title">{{pinjia.username}} <span>{{Number(pinjia.add_time)| formatDate}}</span></h4>
		                <p class="weui-media-box__desc" v-if="pinjia.grade">
		                	<template  v-for="n in parseInt(pinjia.grade)"><img src="../../../../static/images/star-all.png"/></template><template v-for="n in 5-parseInt(pinjia.grade)"><img src="../../../../static/images/star-line.png"/></template>{{pinjia.grade}}分
		                </p>
		                <p class="weui-media-box__desc">{{pinjia.contents}}</p>
		                 <div class="weui-media-box__desc">
			                	<div class="flex">
			                		<div class="weui-media-box__hd" :style="'background-image:url('+item+')'" v-for="item in pinjia.image"></div> 
			                	</div>
			                </div>
		            </div>
		        </div>
		    </div>
		    
		</div>
    		
    		
    	<i class="weui-loading" v-show="lodding" style=""></i>
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
			goods_info:null,
			pinjia:null,
			lodding:false
		}
  },
  components:{
	
  },
	updated(){

	},
	mounted(){
		lodding:true
		//获取消息id
		this.id=this.$route.params.ID
		//根据消息id获取详情
		this.$http.post(this.Api+'Message/jy_xq',{id:1}).then(response => {
      	this.lodding=false
      	if(response.body.error==0){
      		this.goods_info=response.body.data.goods_info;
      		this.pinjia=response.body.data.pinjia;
      		console.log(this.pinjia)
      	}
      	
	  });
	},
	methods:{
	
	}
}
</script>

<style scoped>
	.banner{display: block;width: 100%;}
	.pay{position: fixed;left: 0; right: 0; bottom: 0; text-align: right;padding: 10px; background: #fff; color: #fca120; box-shadow: 0 0 5px #f0f0f0;}
	.pay .weui-btn {vertical-align:middle; margin-left: 15px; background-color: #fca120;}
	.weui-btn{float: right;}
	.weui-media-box__hd{
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-color: #f0f0f0;
    
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
</style>
