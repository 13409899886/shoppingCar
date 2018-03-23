<template>
  <div style="padding-bottom: 80px;">
  	<my-slider :sliders="slideList"></my-slider>
    
    <div class="weui-panel weui-panel_access" v-if="squareList">
    	<div class="weui-panel__hd">推荐广场 <router-link :to="{path:''}" tag="a" class="more">more</router-link></div>
        <div class="weui-panel__bd">
            <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" @click="$router.push('/squareDetails/'+item.id)" v-for="item in squareList">
                <div class="weui-media-box__hd" :style="'background-image: url('+item.image+');'">
                	<div class="tag">{{item.role_name}}</div>
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">{{item.title}}</h4>
                    <p class="weui-media-box__desc">{{item.contents}}</p>
                </div>
                <div class="date">{{item.add_time| formatDate}}</div>
            </a>
        </div>
    </div>
    <router-link :to="{path:'/fabiao'}" tag="div" class="fabu">发表</router-link>
     <i class="weui-loading" v-show="lodding" style=""></i>
  </div>
</template>

<script>
import mySlider from "../../components/slider.vue"
import {formatDate} from '../../../static/js/date.js';
export default {
	
  data(){
		return{
			slideList:[],
			lodding:false,
			page:1,
			squareList:null
		}
  },
  components:{
		mySlider
	},
	filters: {
        formatDate(time) {
            var date = new Date(time*1000);
            return formatDate(date, 'yyyy-MM-dd hh:mm');
        }
   },
	mounted(){
		this.lodding=true
		//获取轮播参数
	  this.$http.get(this.Api+'Banner/squear_banner').then(response => {
      	if(response.body.error==0){
      		this.slideList=response.body.data
      		
      	}
	  });
	  //获取广场列表
	  this.$http.post(this.Api+'Mysquare/index',{page:this.page}).then(response => {
      	if(response.body.error==0){
      		console.log(response.body)
      		this.squareList=response.body.data
      		this.lodding=false
      	}
	  });
	}
}
</script>

<style scoped>
	.weui-media-box__hd{background: url("../../../static/images/newsLogo.png") no-repeat center center; background-size: cover;position: relative;}
	.date{font-size: 12px; color: #999;}
	.more{float: right; color: #ffa01a;}
	.fabu{position: fixed; right: 15px; top: 40%; width: 60px; height: 60px; text-align: center;line-height: 60px; border-radius: 50%;background:-webkit-linear-gradient(top,#ffa515,#ff7e3d); color:#fff;}
	.tag{position: absolute;left: 0; right: 0; bottom: 0; line-height: 1.5; background-color:rgba(0,0,0,.3) ; color: #fff; font-size: 14px;}
</style>
