<template>
  <div style="padding-bottom: 80px;height: 100%; overflow: auto;" id="top">
  		<my-slider :sliders="slideList"></my-slider>
  		<div class="title flex flex-align-center">
  			<div class="text"><span>发 </span><span>布</span><span>任</span><span>务</span></div>
	  		<div class="weui-grids flex-1">
	        <router-link :to="{path:'/fabuTast/task/no'}" tag="a" class="weui-grid">
	            <div class="weui-grid__icon">我</div>
	            <p class="weui-grid__label">学习辅导</p>
	        </router-link>
	        <router-link :to="{path:'/fabuTast/task/no'}" tag="a" class="weui-grid">
	            <div class="weui-grid__icon">要</div>
	            <p class="weui-grid__label">高人答疑</p>
	        </router-link>
	        <router-link :to="{path:'/fabuTast/task/no'}" tag="a" class="weui-grid">
	            <div class="weui-grid__icon">发</div>
	            <p class="weui-grid__label">生活服务</p>
	        </router-link>
	        <router-link :to="{path:'/fabuTast/task/no'}" tag="a" class="weui-grid">
	            <div class="weui-grid__icon">任</div>
	            <p class="weui-grid__label">休闲娱乐</p>
	        </router-link>
	        <router-link :to="{path:'/fabuTast/task/no'}" tag="a" class="weui-grid">
	            <div class="weui-grid__icon">务</div>
	            <p class="weui-grid__label">跑腿</p>
	        </router-link>
	   		</div>
			</div>
			<div class="title flex flex-align-center">
  			<div class="text"><span>技</span><span>能</span><span>市</span><span>场</span></div>
	  		<div class="weui-grids flex-1">
	        <router-link :to="{path:'/fabuTast/skill/no'}" tag="a" class="weui-grid">
	            <div class="weui-grid__icon">我</div>
	            <p class="weui-grid__label">学习辅导</p>
	        </router-link>
	        <router-link :to="{path:'/fabuTast/skill/no'}" tag="a" class="weui-grid">
	            <div class="weui-grid__icon">要</div>
	            <p class="weui-grid__label">运动娱乐</p>
	        </router-link>
	        <router-link :to="{path:'/fabuTast/skill/no'}" tag="a" class="weui-grid">
	            <div class="weui-grid__icon">找</div>
	            <p class="weui-grid__label">生活技能</p>
	        </router-link>
	        <router-link :to="{path:'/fabuTast/skill/no'}" tag="a" class="weui-grid">
	            <div class="weui-grid__icon">达</div>
	            <p class="weui-grid__label">私人订制</p>
	        </router-link>
	        <router-link :to="{path:'/fabuTast/skill/no'}" tag="a" class="weui-grid">
	            <div class="weui-grid__icon">人</div>
	            <p class="weui-grid__label">兴趣特长</p>
	        </router-link>
	    	</div>
	    </div>
    	<div class="weui-panel news" v-if="indexData" >
            <div class="weui-panel__bd">
                <div class="weui-media-box weui-media-box_small-appmsg">
                    <div class="weui-cells">
                        <a class="weui-cell weui-cell_access" href="javascript:;" @click="$router.push('/NewsList')">
                            <div class="weui-cell__hd"></div>
                            <div class="weui-cell__bd weui-cell_primary">
                                <p>{{indexData.news.title}}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      <div v-if="indexData">
        <div class="weui-panel weui-panel_access" v-if="indexData.mission_list.length>0">
        	<div class="weui-panel__hd">推荐任务<span class="more" @click="$router.push('/all/task')">更多</span></div>
            <div class="weui-panel__bd">
            	<template v-for="item in indexData.mission_list">
                <router-link :to="{path:'/detail/'+item.id+'/1'}" tag="a" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd" :style="'background-image: url('+item.smeta+');'"></div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">#我要学#{{item.name}}</h4>
                        <p class="weui-media-box__desc">{{item.connect}}</p>
                    </div>
                    <div class="price">
                    		<!--<span class="weui-btn weui-btn_mini weui-btn_primary">一口价</span>-->{{item.salary}}元
                    </div>
                </router-link>
              </template>  
            </div>
        </div>
        <div class="weui-panel weui-panel_access" v-if="indexData.skill_list.length>0">
        	<div class="weui-panel__hd">推荐技能 <span class="more" @click="$router.push('/all/skill')">更多</span></div>
            <div class="weui-panel__bd">
                <template v-for="item in indexData.skill_list">
                <router-link :to="{path:'/detail/'+item.id+'/2'}" tag="a" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd" :style="'background-image: url('+item.smeta+');'">
                    </div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">#我来教#{{item.name}}</h4>
                        <p class="weui-media-box__desc">{{item.connect}}</p>
                    </div>
                    <div class="price">
                    		<!--<span class="weui-btn weui-btn_mini weui-btn_primary">一口价</span>-->{{item.salary}}元
                    </div>
                </router-link>
              </template>  
            </div>
        </div>
      </div>
      <i class="weui-loading" v-show="lodding" style=""></i>
  </div>
</template>

<script>
import mySlider from "../../components/slider.vue"
export default {
  data(){
		return{
			lodding:false,
			slideList:[],
			indexData:null
		}
  },
  components:{
		mySlider
	},
	mounted(){
		document.getElementById('top').scrollTop=-1000000;//通过scrollTop设置滚动到100位置
	
		this.lodding=true
		//获取轮播参数
	  this.$http.get(this.Api+'Banner/index').then(response => {
      	if(response.body.error==0){
      		this.slideList=response.body.data
						console.log(response.body)
      	}
      
	  });
		//	  获取首页内容
	  this.$http.get(this.Api+"Shouye/index").then(response => {//获取用户数据

      	if(response.body.error==0){
      		this.indexData=response.body
      		console.log(this.indexData)
      		this.lodding=false
      	}
	  });
	}
}
</script>

<style scoped>
	li{float: left;}
	ul{overflow: hidden;}
	.weui-grid{width: 20%;}
	.weui-grid:after,.weui-grid:after, .weui-grid:before,.weui-grids:after, .weui-grids:before{display: none;}
	.weui-grid{padding: 0}
	.weui-grid__icon{width: 40px; height: 40px; text-align: center;line-height: 40px; border-radius: 50%;background:-webkit-linear-gradient(top,#ffa515,#ff7e3d); color:#fff; }
	/*.weui-panel_access{padding-bottom: 80px;}*/
	.price{color: #fbb33f; margin-left: 10px;}
	.price .weui-btn{vertical-align: middle; background-color:#fbb33f; margin-right: 10px;}
	.weui-media-box__hd{border-radius: 50%; overflow: hidden;background: url(../../../static/images/newsLogo.png) no-repeat center center; background-size: cover;}
	.weui-cell__hd{width: 90px; height: 20px; background: url(../../../static/images/newsLogo.png) no-repeat center center; background-size: cover; margin-right: 10px;}
	.weui-panel:after, .weui-panel:before{display: none;}
	.weui-panel:first-child{margin-top:10px}
	.more {float: right; color: #ffa515;}
	.text{width: 40px; text-align: center;line-height: 1.5;background:-webkit-linear-gradient(top,#ffa515,#ff7e3d);color: #fff;}
	.title{background: #fff; margin-bottom: 10px;}
	.news p{color: #999;}
	.text span{display: block;}
</style>
