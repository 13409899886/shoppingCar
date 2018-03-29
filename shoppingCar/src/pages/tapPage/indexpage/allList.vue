<template>
  <div id="box" >
  	<div class="comeBack" @click="$router.go(-1)">返回</div>
	  <div style="position: relative;">
	      <div class="filtrateBox">
		  		<div class="filtrate" :class="{on:isshow}" @click="isshow=!isshow">分类</div>
		  		<div @click="toggle('add_time')">时间</div>
		  		<div @click="toggle('paynum')">销量</div>
		  		<div @click="toggle('salary')">价格</div>
		  	</div>
		  	<div v-show="isshow" class="weui-cells page__category-content" style="position: absolute;top:40px; margin:0;	left: 0; right: 0;z-index: 100000;">
	        <a class="weui-cell weui-cell_access js_item" v-for="item in menu" data-id="button" href="javascript:;" @click="filtrate(item)">
	            <div class="weui-cell__bd">
	                <p>{{item.name}}</p>
	            </div>
	            <!--<div class="weui-cell__ft"><i class="weui-icon-success-no-circle"></i></div>-->
	        </a>
	    	</div>
	    </div>
      <div v-if="indexData">
        <div class="weui-panel weui-panel_access">
            <div class="weui-panel__bd">
            	<template v-for="item in indexData">
                <router-link :to="{path:'/detail/'+item.id+'/'+filType}" tag="a" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd" :style="'background-image: url('+item.image+');'"></div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">#{{text}}#{{item.name}}</h4>
                        <p class="weui-media-box__desc">{{item.uname}}</p>
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
	
export default {
  data(){
		return{
			lodding:false,
			indexData:[],
			isshow:false,
			url:"",//获取列表地址
			typeUrl:"",//获取筛选类型地址
			text:"",
			filType:"",
			menu:null,
			count:"",
			addType:"click",
			data:{
				page:1,
				type_id:null,
				add_time:false,
				salary:false,
				paynum:false
			}
		}
  },
  components:{
  },
  methods:{
  	toggle(obj){
				this.data[obj]=!this.data[obj]
			if(this.data[obj]){
				this.indexData.sort(function(a,b){ return b[obj]-a[obj]})
			}else{
				this.indexData.sort(function(a,b){ return a[obj]-b[obj]})
			}
  	},
  	filtrate(item){
  		if(item){
  			this.data.type_id=item.id
  			this.isshow=!this.isshow
  			this.addType="click"
  			this.data.page=1
  		}
  		console.log(this.addType)
  		//	  获取首页内容
		  this.$http.post(this.Api+this.url,this.data).then(response => {//获取数据
	      	if(response.body.error==0){
	      		if(this.addType=="scoll"){
	      			for(var k in response.body.data){
	      				this.indexData.push(response.body.data[k])
	      			}
	      		}else if(this.addType=="click"){
	      			this.indexData=response.body.data
	      		}
	      		console.log(response.body)
	      		this.count=response.body.count
	      		this.lodding=false
	      	}
		  });
  	}
  },
	mounted(){
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
        console.log(that.data.page<that.count)
        if(scrollTop+clientHeight==htmlHeight&&that.data.page<that.count){  
       		that.data.page++
       		that.addType="scoll"
       		that.filtrate()
        }
	    });
		},500) 
		//确定技能或者是任务
		if(this.$route.params.type=="task"){
			this.url="Mission/more_mission"
				this.filType="1"
			this.text="我要学"
		}else if(this.$route.params.type=="skill"){
			this.url="Skill/more_skill"
			this.filType="2"
			this.text="我要教"
		}
		//获取分类
  	this.$http.post(this.Api+"Mission/type",{type:this.filType}).then(response => {//获取用户数据
      	if(response.body.error==0){
      		this.menu=response.body.data
//    		console.log(this.menu)
      	}
	  });
		//调用默认参数
		this.filtrate()
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
	.weui-media-box__hd{border-radius: 50%; overflow: hidden;background: url(../../../../static/images/newsLogo.png) no-repeat center center; background-size: cover;}
	.weui-cell__hd{width: 90px; height: 20px; background: url(../../../../static/images/newsLogo.png) no-repeat center center; background-size: cover; margin-right: 10px;}
	.weui-panel:after, .weui-panel:before{display: none;}
	.weui-panel:first-child{margin-top:1px}
	.filtrateBox{overflow: hidden;}
	.filtrateBox >div{width: 25%; text-align: center; line-height: 40px; height: 40px; font-size: 15px; float: left; background: #fff;}
	.weui-panel{margin-top: 1px;}
	.filtrate{position: relative;}
	.filtrate:before{content:""; display: block;width: 0;height: 0; border: 5px solid transparent; border-bottom-color: #ffa515; position: absolute;right: 5px;top:50%; transform: translateY(-50%);}
	.filtrate.on:before{ border-bottom-color: transparent;border-top-color: #ffa515; position: absolute;right: 5px;top:50%; transform: translateY(0);}
	.weui-cell_access .weui-cell__ft:after{display: none;}
	 .weui-icon-success-no-circle{color: #ffa515;}
	 .comeBack{background:-webkit-linear-gradient(top,#ffa515,#ff7e3d);color: #fff;padding: 0px 15px; line-height: 3; font-size: 13px;}
	
</style>
