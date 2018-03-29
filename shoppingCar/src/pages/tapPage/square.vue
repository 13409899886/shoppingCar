<template>
  <div style="padding-bottom: 80px;" id="box">
  	<my-slider :sliders="slideList"></my-slider>
    <div class="weui-panel weui-panel_access" v-if="mysquear">
    	<div class="weui-panel__hd">推荐广场 <router-link :to="{path:''}" tag="a" class="more">more</router-link></div>
        <div class="weui-panel__bd">
            <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" @click="$router.push('/squareDetails/'+item.id)" v-for="item in mysquear">
                <!--<div class="weui-media-box__hd" :style="'background-image: url('+item.image+');'">
                	<div class="tag">{{item.role_name}}</div>
                </div>-->
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">{{item.title}}</h4>
                    <p class="weui-media-box__desc">{{item.contents}}</p>
                </div>
                <div class="date">{{item.add_time| formatDate}}</div>
            </a>
        </div>
    </div>
    <div class="weui-panel weui-panel_access" v-if="squareList">
    	<div class="weui-panel__hd">推荐广场 <router-link :to="{path:''}" tag="a" class="more">more</router-link></div>
        <div class="weui-panel__bd">
            <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" @click="$router.push('/squareDetails/'+item.id)" v-for="item in squareList">
                <!--<div class="weui-media-box__hd" :style="'background-image: url('+item.image+');'">
                	<div class="tag">{{item.role_name}}</div>
                </div>-->
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
			squareList:[],
			count:"",
			mySquareList:null,
			mysquear:null,
			userid:""
		}
  },
  components:{
		mySlider
	},
	filters: {
        formatDate(time) {
            var date = new Date(time*1000);
            return formatDate(date, 'yyyy-MM-dd');
        }
   },
	mounted(){
		this.userid=localStorage.getItem("userId")
		this.lodding=true
		var that=this
		//监听页面滑动
  	setTimeout(()=>{
			document.getElementById('box').addEventListener('scroll', function(){  
	  		console.log("滑动了")
	  		//下面这句主要是获取网页的总高度，主要是考虑兼容性所以把Ie支持的documentElement也写了，这个方法至少支持IE8  
        var htmlHeight=document.getElementById('box').scrollHeight||document.getElementById('box').scrollHeight;  
        //clientHeight是网页在浏览器中的可视高度，  
        var clientHeight=document.body.clientHeight||document.documentElement.clientHeight;  
        //scrollTop是浏览器滚动条的top位置，  
        var scrollTop=document.getElementById('box').scrollTop||document.getElementById('box').scrollTop;  
        //通过判断滚动条的top位置与可视网页之和与整个网页的高度是否相等来决定是否加载内容；
        console.log(that.count)
        if(scrollTop+clientHeight==htmlHeight&&that.page<that.count){  
       		that.page++
       		that.getData()
        }
	    });
		},500) 
		//获取轮播参数
	  this.$http.get(this.Api+'Banner/squear_banner').then(response => {
      	if(response.body.error==0){
      		this.slideList=response.body.data
      		
      	}
	  });
	  this.getData()
	},
	methods:{
		getData(){
			//获取广场列表
		  this.$http.post(this.Api+'Mysquare/index',{page:this.page,userid:this.userid}).then(response => {
	      	if(response.body.error=="0"){
						for(var k in response.body.data.allsquear){
	      			this.squareList.push(response.body.data.allsquear[k])
	      		}
						this.mysquear=response.body.data.mysquear
						this.count=response.body.allsquear_count
	      		this.lodding=false
	      	}
		  });
		}
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
