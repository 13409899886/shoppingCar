<template>
  <div id="box">
  	<div class="comeBack" @click="$router.go(-1)">返回</div>
  	<span v-if="fabuList&&fabuList.length=='0'" class="empty">没有数据</span>
  	<div class="weui-panel weui-panel_access" v-if="fabuList" v-for="item in fabuList">
        <div class="weui-panel__bd">
            <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" @click="toDetail(item)">
                <div class="weui-media-box__hd" :style="'background-image:url('+item.smeta+')'" v-if="item.smeta"></div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">{{item.name}}123</h4>
                    <p class="weui-media-box__desc">￥{{item.salary}}</p>
                    <ul class="weui-media-box__info">
                        <li class="weui-media-box__info__meta">浏览：{{item.readnum}}</li>
                        <li class="weui-media-box__info__meta">售出：{{item.paynum}}</li>
                    </ul>
                </div>
            </a>
            <div class="operation">
            	<router-link :to="{path:'/fabuTast/task/'+item.id}" v-if="type=='task'" class="weui-btn weui-btn_mini weui-btn_default">编辑</router-link>
            	<router-link :to="{path:'/fabuTast/skill/'+item.id}" v-if="type=='skill'" class="weui-btn weui-btn_mini weui-btn_default">编辑</router-link>
            	<a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_default" @click="delet(item)">删除</a>
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
			fabuList:[],
			type:"",
			Url:"",//编辑地址
			userid:"",
			delUrl:"",//删除地址
			lodding:false,
			typeId:null,//区分技能和任务
			page:1,
			count:""
		}
  },
  mounted(){
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
  	
  	this.userid=this.$route.params.userid
  	this.type=this.$route.params.type
  	if(this.type=="task"){
  		this.Url="Mission/index"
  		this.delUrl="Mission/delete"
  		this.typeId=1
  	}else if(this.type="skill"){
  		this.Url="Skill/index"
  		this.delUrl="skill/delete"
  		this.typeId=2
  	}
		this.getData()
  },
  methods:{
  	getData(){
  		this.$http.post(this.Api+this.Url,{userid:this.userid,page:this.page}).then(response => {//获取用户数据
      	console.log(response)
      	this.lodding=false
      	if(response.body.error==0){
      		this.count=response.body.count
      		for(var k in response.body.data){
	      			this.fabuList.push(response.body.data[k])
	      		}
      	}
	  	});
  	},
  	toDetail(item){//查看详情
			console.log(item)
			this.$router.push('/detail/'+item.id+'/'+this.typeId)
		},
  	delet(item){
  		this.lodding=true
  		this.$http.post(this.Api+this.delUrl,{id:item.id}).then(response => {//获取用户数据
      	console.log(response)
      	this.lodding=false
      	if(response.body.error==0){
					this.fabuList.splice(this.fabuList.indexOf(item),1)
      	}
	  	});
  	}
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
		.weui-btn:after{width: 190%;}
		.weui-btn{margin: 0;}
		.weui-media-box__info{margin-top:5px;}
		.weui-media-box__desc{color: #ff9e19;}
</style>
