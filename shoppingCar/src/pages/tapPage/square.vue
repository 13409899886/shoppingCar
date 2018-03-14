<template>
  <div style="padding-bottom: 80px;">
  	<my-slider :sliders="slideList"></my-slider>
    <div class="weui-panel weui-panel_access">
    	<div class="weui-panel__hd">我的广场 <router-link :to="{path:''}" tag="a" class="more">more</router-link></div>
        <div class="weui-panel__bd">
            <router-link :to="{path:'/squareDetails/2'}" class="weui-media-box weui-media-box_appmsg">
                <div class="weui-media-box__hd" style="background-image:url(../../../static/images/newsLogo.png)">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">错误点</h4>
                    <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                </div>
            </router-link>
            <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                <div class="weui-media-box__hd">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">标题一</h4>
                    <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                </div>
            </a>
        </div>
    </div>
    <div class="weui-panel weui-panel_access">
    	<div class="weui-panel__hd">推荐广场 <router-link :to="{path:''}" tag="a" class="more">more</router-link></div>
        <div class="weui-panel__bd">
            <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                <div class="weui-media-box__hd">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">标题一</h4>
                    <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                </div>
                <div class="date">2019.02.1</div>
            </a>
            <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                <div class="weui-media-box__hd">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">标题一</h4>
                    <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                </div>
                <div class="date">2019.02.1</div>
            </a>
        </div>
    </div>
    <router-link :to="{path:'/fabiao'}" tag="div" class="fabu">发表</router-link>
  </div>
</template>

<script>
import mySlider from "../../components/slider.vue"
export default {
  data(){
		return{
			slideList:[]
		}
  },
  components:{
		mySlider
	},
	mounted(){
		//获取轮播参数
	  this.$http.get('../../../static/sliderList.json').then(response => {
      	
      	this.slideList=response.body
      	console.log(this.slideList);//成功回调
	  }, response => {
	      console.log("response"); //成功回调
	  });
	}
}
</script>

<style scoped>
	.weui-media-box__hd{background: url("../../../static/images/newsLogo.png") no-repeat center center; background-size: cover;}
	.date{font-size: 12px; color: #999;}
	.more{float: right; color: #ffa01a;}
	.fabu{position: fixed; right: 15px; top: 40%; width: 60px; height: 60px; text-align: center;line-height: 60px; border-radius: 50%;background:-webkit-linear-gradient(top,#ffa515,#ff7e3d); color:#fff;}
</style>
