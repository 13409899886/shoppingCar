<template>
  <div style="padding-bottom: 80px;" id="box">
  	<div class="comeBack" @click="$router.go(-1)" >返回</div>
  	<div v-if="data" >
  		<div class="banner" :style="'background-image:url('+data.goods_info[0].goods_smeta+')'"></div>
	    <div class="weui-panel weui-panel_access " style="margin-top: 0;">
        <div class="weui-media-box weui-media-box_text goodsInfo" v-for="item in data.goods_info">
	        <h4 class="weui-media-box__title">{{item.goods_name}}  <span>
	        	<img v-if="!isShoucang" src="../../../../static/images/attention-no.png" alt="" class="weui-tabbar__icon" @click="shoucang(item)">
	        	<img v-if="isShoucang" src="../../../../static/images/attention-sel.png" alt="" class="weui-tabbar__icon" @click="shoucang(item)"></span>
	        	<span>￥{{item.goods_salary}}</span>
	        </h4>
		        <ul class="weui-media-box__info">
		            <li class="weui-media-box__info__meta">
		            	<template v-for="n in score"><img src="../../../../static/images/star-all.png"/></template><template v-for="n in 5-score"><img src="../../../../static/images/star-line.png"/></template>
		            	{{item.pingfen}}
		            </li>
		            <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">{{item.rolename}}</li>
		            <li class="weui-media-box__info__meta">{{item.paynum}}人已购买</li>
		        </ul>
	        <p class="weui-media-box__desc">{{item.contents}}</p>
	    	</div>
        <div class="weui-panel weui-panel_access" >
	        <div class="weui-panel__bd">
	            <div class="weui-media-box weui-media-box_appmsg kecheng" v-for="item in data.goods_list" @click="toDetail(item)">
	                <div class="weui-media-box__hd" :style="'background-image:url('+item.smeta+')'"></div> 
	                <div class="weui-media-box__bd">
	                    <h4 class="weui-media-box__title">{{item.name}}<span>{{item.paynum}}人购买</span></h4>
	                    <p class="weui-media-box__desc">￥{{item.salary}}</p>
	                </div>
	            </div>
	        </div>
        </div>
    </div>
   
   <div class="weui-panel weui-panel_access comment" v-if="data.conment_list&&data.conment_list.length>0">
            <div class="weui-panel__hd">全部评价</div>
            <div class="weui-panel__bd">
                <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" v-for="item in data.conment_list">
                   	<div class="weui-media-box__hd" :style="'background-image:url('+item.headimg+')'"></div> 
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">{{item.username}} <span>{{Number(item.add_time)| formatDate}}</span></h4>
                        <p class="weui-media-box__desc"v-if="item.grade">
                        	<template  v-for="n in parseInt(item.grade)"><img src="../../../../static/images/star-all.png"/></template><template v-for="n in 5-parseInt(item.grade)"><img src="../../../../static/images/star-line.png"/></template>
                        </p>
                       
                         <div class="weui-media-box__desc">{{item.contents}}
                        	<div class="flex">
                        		<div class="weui-media-box__hd" :style="'background-image:url('+imgs+')'" v-for="imgs in item.image"></div> 
                        	</div>
                        </div>
                    </div>
                </a>
            </div>
            
        </div>
    		<div class="weui-panel weui-panel_access kecheng" v-if="data&&data.conmecommercial_list.length>0" >
            <div class="weui-panel__hd">更多商家</div>
            <div class="weui-panel__bd">
                <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" v-for="item in data.conmecommercial_list" @click="toDetail(item)">
                    <div class="weui-media-box__hd" :style="'background-image:url('+item.smeta+')'"></div> 
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">{{item.name}} <span>{{item.paynum}}人购买</span></h4>
                        <p class="weui-media-box__desc">￥{{item.salary}}</p>
                    </div>
                </a>
                
            </div>
        </div>
    		<div class="pay flex flex-pack-justify flex-align-center">
    				<div class="weui-tabbar">
                <a href="javascript:;" class="weui-tabbar__item">
                    <img v-if="!isFocu" src="../../../../static/images/guanzhu-no.png" alt="" class="weui-tabbar__icon" @click="focu">
                    <img v-if="isFocu" src="../../../../static/images/guanzhu-sel.png" alt="" class="weui-tabbar__icon" @click="focu">
                    <p class="weui-tabbar__label">关注</p>
                </a>
                <a href="javascript:;" class="weui-tabbar__item">
                		<img v-if="!isShare" src="../../../../static/images/share-no.png" alt="" class="weui-tabbar__icon">
                		<img v-if="isShare" src="../../../../static/images/share-sel.png" alt="" class="weui-tabbar__icon">
                    <p class="weui-tabbar__label">分享</p>
                </a>
            </div>
    				<a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">立即购买</a>
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
            return formatDate(date, 'yyyy-MM-dd hh:mm');
        }
   },
 data(){
		return{
			type:"",
			id:"",//商品id
			userid:null,
			lodding:false,
			data:null,
			score:null,
			isFocu:null,//是否关注
			isShare:null,//是否分享
			isShoucang:null//是否收藏
		}
  },
  components:{
	},
	updated(){
		document.getElementById('box').scrollTop=-1000000; //通过scrollTop设置滚动到100位置
	},
	mounted(){
		
		
		this.lodding=true
		this.userid=localStorage.getItem("userId")
		this.type=this.$route.params.type //判断任务技能
		this.id=this.$route.params.id //获取列表id
		//获取数据
	  this.$http.post(this.Api+"Goodsxq/index",{id:this.id,type:this.type}).then(response => {
      	if(response.body.error==0){
      		this.data=response.body
      		
      		this.score=JSON.parse(this.data.goods_info[0].pingfen)
      		console.log(this.data)
      		//
      		if(this.userid){
						//判断是否已关注
						this.$http.post(this.Api+"UserCenter/attention_status",{userid:this.userid,attention_userid:this.id}).then(response => {
			      	if(response.body.error==0){
			      		console.log(response.body)
			      		if(response.body.attention_status==0){
			      			this.isFocu=false
			      		}else if(response.body.attention_status==1){
			      			this.isFocu=true
			      		}
			      	}
				  	});
				  	//判断是否已收藏
					this.$http.post(this.Api+"UserCenter/collect_status",{user_id:this.userid,collect_type:this.type,collect_id:this.id}).then(response => {//切换关注状态
			      	this.lodding=false
			      	if(response.body.error==0){
			      		if(response.body.collect_status==0){
			      			this.isShoucang=false
			      		}else if(response.body.collect_status==1){
			      			this.isShoucang=true
			      		}
			      	}
				  	});
					}
      	}
	  });
	},
	methods:{
	
		shoucang(item){//添加收藏
			
			if(this.userid){
				this.lodding=true
				this.$http.post(this.Api+"UserCenter/add_collect",{user_id:this.userid,collect_type:this.type,collect_id:this.id}).then(response => {//切换关注状态
	      	
	      	if(response.body.error==0){
	      		this.lodding=false;
	      		if(response.body.data.status==0){
	      			this.isShoucang=true
	      		}else if(response.body.data.status==-1){
	      			this.isShoucang=false
	      		}
	      		alert(response.body.msg)
	      	}
		  	});
		 	}else{
		 		alert("请登陆！")
		 		this.$router.push("/login")
		 	}
		},
		toDetail(item){//查看详情
			this.lodding=true
			//获取数据
	  this.$http.post(this.Api+"Goodsxq/index",{id:item.id,type:this.type}).then(response => {
      	if(response.body.error==0){
      		this.data=response.body
      		this.lodding=false
      		this.score=JSON.parse(this.data.goods_info[0].pingfen)
      		
      	}
	  	});
		},
		focu(){
			if(this.userid){
				if(this.userid==this.data.goods_info[0].userid){
					return;
				}
				this.lodding=true
				this.$http.post(this.Api+"UserCenter/attention_user",{userid:this.userid,attention_userid:this.data.goods_info[0].userid}).then(response => {//切换关注状态
	      	if(response.body.error==0){
	      		alert(response.body.msg)
	      		this.lodding=false;
	      		this.isshow=false;
	      		if(response.body.data.status==0){
	      			this.isFocu=false
	      		}else if(response.body.data.status==1){
	      			this.isFocu=true
	      		}
	      	}
		  	});
		 	}else{
		 		alert("请登陆！")
		 		this.$router.push("/login")
		 	}
		}
	}
}
</script>

<style scoped>
	.banner{display: block;width: 100%;height: 200px; background-position: center center; background-repeat: no-repeat;background-size: cover;}
	.pay{position: fixed;left: 0; right: 0; bottom: 0; text-align: right;padding: 10px; background: #fff; color: #fca120; box-shadow: 0 0 5px #f0f0f0;}
	.pay .weui-btn {vertical-align:middle; margin-left: 15px; background-color: #fca120;}
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
		}
		.weui-media-box__info__meta img,.weui-media-box__desc img{height: 12px;}
		.weui-media-box__title >span{font-size: 14px; color: #999; float:right}
		.kecheng .weui-media-box__desc {color: #fca120;}
		.weui-media-box__bd >:nth-child(2) {margin-bottom: 15px;}
		.weui-media-box__desc .weui-media-box__hd{margin-top: 15px; height: 80px; width: 80px;}
		.comment .weui-media-box >.weui-media-box__hd{border-radius: 50%;}
		.weui-tabbar{width: 150px; position: relative;background: #fff;}
		.weui-tabbar:before{display: none;}
		.weui-btn{margin: 0; font-size: 17px; background:-webkit-linear-gradient(top,#ffa515,#ff7e3d);}
		.weui-tabbar__icon{width: 23px; height: 23px;}
		.goodsInfo .weui-media-box__title span{margin-left: 15px; font-size: 15px; color: #ffa515;}
		.goodsInfo .weui-media-box__desc{display: block;}
</style>
