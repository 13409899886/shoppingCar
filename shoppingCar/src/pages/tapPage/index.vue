<template>
  <div style="padding-bottom: 80px;">
  		<my-slider :sliders="slideList"></my-slider>
  		<div class="weui-cells__title">发布任务</div>
  		<div class="weui-grids">
        <router-link :to="{path:'/'}" tag="a" class="weui-grid">
            <div class="weui-grid__icon">我</div>
            <p class="weui-grid__label">学习辅导</p>
        </router-link>
        <router-link :to="{path:'/'}" tag="a" class="weui-grid">
            <div class="weui-grid__icon">要</div>
            <p class="weui-grid__label">高人答疑</p>
        </router-link>
        <router-link :to="{path:'/'}" tag="a" class="weui-grid">
            <div class="weui-grid__icon">发</div>
            <p class="weui-grid__label">生活服务</p>
        </router-link>
        <router-link :to="{path:'/'}" tag="a" class="weui-grid">
            <div class="weui-grid__icon">任</div>
            <p class="weui-grid__label">休闲娱乐</p>
        </router-link>
        <router-link :to="{path:'/'}" tag="a" class="weui-grid">
            <div class="weui-grid__icon">务</div>
            <p class="weui-grid__label">跑腿</p>
        </router-link>
    	</div>
  		<div class="weui-cells__title">技能市场</div>
  		<div class="weui-grids">
        <router-link :to="{path:'/'}" tag="a" class="weui-grid">
            <div class="weui-grid__icon">我</div>
            <p class="weui-grid__label">学习辅导</p>
        </router-link>
        <router-link :to="{path:'/'}" tag="a" class="weui-grid">
            <div class="weui-grid__icon">要</div>
            <p class="weui-grid__label">运动娱乐</p>
        </router-link>
        <router-link :to="{path:'/'}" tag="a" class="weui-grid">
            <div class="weui-grid__icon">找</div>
            <p class="weui-grid__label">生活技能</p>
        </router-link>
        <router-link :to="{path:'/'}" tag="a" class="weui-grid">
            <div class="weui-grid__icon">达</div>
            <p class="weui-grid__label">私人订制</p>
        </router-link>
        <router-link :to="{path:'/'}" tag="a" class="weui-grid">
            <div class="weui-grid__icon">人</div>
            <p class="weui-grid__label">兴趣特长</p>
        </router-link>
    	</div>
    	<div class="weui-panel">
            <div class="weui-panel__bd">
                <div class="weui-media-box weui-media-box_small-appmsg">
                    <div class="weui-cells">
                        <a class="weui-cell weui-cell_access" href="javascript:;">
                            <div class="weui-cell__hd"></div>
                            <div class="weui-cell__bd weui-cell_primary">
                                <p>文字标题</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="weui-panel weui-panel_access">
        	<div class="weui-panel__hd">推荐技能</div>
            <div class="weui-panel__bd">
                <router-link :to="{path:'/detail/1'}" tag="a" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd">
                    </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">标题一</h4>
                        <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                    </div>
                    <div class="price">
                    		<span class="weui-btn weui-btn_mini weui-btn_primary">一口价</span>50元
                    </div>
                </router-link>
                <router-link :to="{path:'/detail/2'}" tag="a" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd">
                    </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">标题一</h4>
                        <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                    </div>
                    <div class="price">
                    		<span class="weui-btn weui-btn_mini weui-btn_primary">一口价</span>500元
                    </div>
                </router-link>
            </div>
        </div>
        
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
	li{float: left;}
	ul{overflow: hidden;}
	.weui-grid{width: 20%;}
	.weui-grid:after,.weui-grid:after, .weui-grid:before,.weui-grids:after, .weui-grids:before{display: none;}
	.weui-grid{padding:  0 0 20px 0;}
	.weui-grid__icon{width: 40px; height: 40px; text-align: center;line-height: 40px; border-radius: 50%;background:-webkit-linear-gradient(top,#ffa515,#ff7e3d); color:#fff;}
	/*.weui-panel_access{padding-bottom: 80px;}*/
	.price{color: #fbb33f; margin-left: 10px;}
	.price .weui-btn{vertical-align: middle; background-color:#fbb33f; margin-right: 10px;}
	.weui-media-box__hd{border-radius: 50%; overflow: hidden;background: url(../../../static/images/banner.png) no-repeat center center; background-size: cover;}
	.weui-cell__hd{width: 90px; height: 20px; background: url(../../../static/images/newsLogo.png) no-repeat center center; background-size: cover; margin-right: 10px;}
</style>
