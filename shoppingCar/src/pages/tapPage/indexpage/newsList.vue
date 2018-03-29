<template>
  <div id="box">
  	<div class="comeBack" @click="$router.go(-1)" >返回</div>
  	<i class="weui-loading" v-show="lodding" style=""></i>
  	<div v-if="topMenu">
	    <div class="weui-cells">
            <div class="weui-cell weui-cell_access" v-for="item in topMenu" @click="toDetail(item)">
                <div class="weui-cell__bd">
                    <span style="vertical-align: middle">{{item.title}}</span>
                </div>
                <div class="weui-cell__ft">{{item.add_time| formatDate}}</div>
            </div>
        </div>
	  </div>
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
			lodding:false,
			topMenu:[],
			page:1,
			count:""
		}
  },
  
  methods:{
  	newsList(page){
  		//获取分类
	  	this.$http.post(this.Api+"News/index",{page:page}).then(response => {//获取用户数据
	      	if(response.body.error==0){
	      		for(var k in response.body.data){
	      			this.topMenu.push(response.body.data[k])
	      		}
	      		this.count=response.body.count
	      		console.log(this.page+":"+this.count)
	      		this.lodding=false
	      	}
		  });
  	},
  	toDetail(item){
  		
  		this.$router.push("/newsDetail/"+item.id+"/kuaibao")
  	}
  	
  },
  computed:{
  	
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
        if(scrollTop+clientHeight==htmlHeight&&that.page<that.count){  
       		that.page++
       		that.newsList(that.page)
        }
	    });
		},500) 
  	
  	this.newsList(this.page)
  }
}
</script>

<style scoped>
	.right{margin-left:150px;background: #f0f0f0;}
	.weui-cells{margin-top: 0;}
	.weui-cell{ border-right: 1px solid #d8d8d8;}
	.weui-cell.on{background: #f0f0f0; border-right:none}
	.weui-cell:last-child:after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #d9d9d9;
    color: #d9d9d9;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    left: 15px;
}
.weui-cell__ft{font-size: 14px;}
</style>
