<template>
  <div style="padding-bottom: 80px;" >
  	<div class="comeBack" @click="$router.go(-1)">返回</div>
  <div v-if="squareDetail">
	  <div class="weui-panel weui-panel_access squareInfo" style="margin-top: 0;" >
        <div class="weui-media-box weui-media-box_text">
	        <h4 class="weui-media-box__title">{{squareDetail.title}} <span>{{squareDetail.add_time| formatDate}}</span></h4>
		        
		        <p class="weui-media-box__desc">
		        	{{squareDetail.contents}}
		        	<div class="flex">
            		<div class="weui-media-box__hd" :style="'background-image:url('+imgs+')'" v-for="imgs in squareDetail.image"></div> 
            	</div>
		        </p>
		         
		        <ul class="weui-media-box__info">
		            <li class="weui-media-box__info__meta">关注 {{squareDetail.zansum}}</li>
		            <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">评论 {{squareDetail.countsum}}</li>
		            <li class="weui-media-box__info__meta">
		            	<a href="javascript:;" class="pay weui-btn weui-btn_mini weui-btn_primary" v-if="squareDetail.atten_status==1" @click="focu">已关注</a>
		        			<a href="javascript:;" class="pay weui-btn weui-btn_mini weui-btn_primary" v-if="squareDetail.atten_status==0" @click="focu">未关注</a>
		            </li>
		        </ul>
		        
	    	</div>
    </div>
    
    <div class="weui-panel weui-panel_access comment">
        <div class="weui-panel__bd">
            <div class="weui-media-box weui-media-box_appmsg" v-for="(item, index) in squareDetail.list">
                <div class="weui-media-box__hd" :style="'background-image: url('+item.userimg+');'"></div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">{{item.name}} <span @click="zan(item)"><img src="../../../../static/images/tobegood.png" v-if="item.is_zan==0" /><img src="../../../../static/images/good.png" v-if="item.is_zan==1" />{{item.zansum}}</span></h4>
                    <div class="weui-media-box__desc" @click="reply(item,index)">{{item.comment}}</div>
                    <div class="weui-media-box__desc flex" v-for="comeback in item.answer" @click="reply(comeback,index)">
                    	<div style="white-space: nowrap;"><span>{{comeback.name}} </span>回复<span> {{comeback.pname}}：</span></div>
                    	<div>{{comeback.comment}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="weui-search-bar" id="searchBar" :class="{'weui-search-bar_focusing':on==true}" >
        <form class="weui-search-bar__form">
            <div class="weui-search-bar__box">
                <input type="text" class="weui-search-bar__input" id="searchInput"  v-focus="on" v-model="contents" :placeholder="type" >
            </div>
            <label class="weui-search-bar__label" id="searchText" @click="search" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                <span>{{type}}</span>
            </label>
        </form>
        <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel" @click="onblur">确定</a>
    </div>
    </div>
    <i class="weui-loading" v-show="lodding" style=""></i>
  </div>
</template>

<script>
import {formatDate} from '../../../../static/js/date.js';
export default {
  data(){
		return{
			lodding:false,
			on:false,//判断是否聚焦
			squareId:null,
			squareDetail:null,
			userid:"",
			contents:"",
			type:"评论",
			userInfo:"",
			byreply_userid:"",//评论者id
			comment_id:"",//评论id
			index:null,
			pname:""
		}
  },
  filters: {
    formatDate(time) {
        var date = new Date(time*1000);
        return formatDate(date, 'yyyy-MM-dd ');
    }
   },
  components:{
	},
	mounted(){
		this.lodding=true
		this.userid=localStorage.getItem("userId")
		this.squareId=this.$route.params.id
		if(!this.userid){
			alert("请登陆！")
		 	this.$router.push("/login")
		}
		this.userInfo=JSON.parse(localStorage.getItem("userInfo"))
		//获取广场详情
	  this.$http.post(this.Api+'Mysquare/sqdetail',{id:this.squareId,userid:6}).then(response => {
      	console.log(response.body)
      	if(response.body.error==0){
      		console.log(response.body)
      		this.squareDetail=response.body
      		this.lodding=false
      	}
	  });
	},
	directives: {
    focus: {
      update: function (el, {value}) {
        if (value) {
          el.focus()
          
        }
      }
    }
  },
	methods:{
		zan(item){
			this.lodding=true
			this.$http.post(this.Api+"Mysquare/reply",{userid:this.userid,comment_id:item.id,type:2,byreply_userid:item.userid,comment:""}).then(response => {//发表评论
		      	if(response.body.error==0){
		      	console.log(response.body)
		      	item.is_zan=1
		      	item.zansum+=1
	      		}
		      	this.lodding=false
		  		});
		},
		reply(comeback,index){//点击评论数据回复功能
			this.type="回复"
			this.on=true
			this.byreply_userid=comeback.userid
			this.comment_id=comeback.comment_id
			this.index=index
			this.pname=comeback.name
			console.log(this.pname)
		},
		search(){
			this.on=true
		},
		onblur(){
			this.on=false;
			console.log(this.contents=="")
			if(this.userid){
				if(this.contents==""||this.byreply_userid==this.userid){
					alert("大哥 回复自己干啥？？")
					return;
				}
				this.lodding=true
				if(this.type=='回复'){//回复给评论者
					this.$http.post(this.Api+"Mysquare/reply",{userid:this.userid,comment_id:this.comment_id,type:3,byreply_userid:this.byreply_userid,comment:this.contents}).then(response => {//发表评论
		      	if(response.body.error==0){
		      	console.log(response.body)
		      	
		      		this.squareDetail.list[this.index].answer.push({'comment':this.contents,name:this.userInfo.name,pname:this.pname})
		      	
		      	this.type="评论"
	      		}
		      	this.lodding=false
		      	this.contents=""
		  		});
				}else if(this.type=='评论'){//回复给发布者
					this.$http.post(this.Api+"Mysquare/add_comment",{userid:this.userid,article_id:this.squareId,"comment":this.contents}).then(response => {//发表评论
		      	if(response.body.error==0){
			      	console.log(response.body)
			      	this.lodding=false
			      	this.squareDetail.list.push({'comment':this.contents,userimg:this.userInfo.image,name:this.userInfo.name,is_zan:0})
			      	this.contents=""
	      		}
		  		});
				}
				
		 	}else{
		 		alert("请登陆！即将跳转到登陆页面")
		 		this.$router.push("/login")
		 	}
		 	
		},
		focu(){//关注
			if(this.userid){
				this.lodding=true
				this.$http.post(this.Api+"UserCenter/attention_user",{userid:this.userid,attention_userid:this.squareDetail.userid}).then(response => {//切换关注状态
	      	if(response.body.error==0){
	      		alert(response.body.msg)
	      		this.lodding=false;
	      		this.isshow=false;
	      		if(response.body.data.status==0){
	      			this.squareDetail.atten_status=0
	      		}else if(response.body.data.status==1){
	      			this.squareDetail.atten_status=1
	      		}
	      	}
		  	});
		 	}else{
		 		alert("请登陆！即将跳转到登陆页面")
		 		this.$router.push("/login")
		 	}
		}
	}
}
</script>

<style scoped>
	#searchBar{position: fixed;left: 0; right: 0; bottom: 0;}
	.banner{display: block;}
	.pay{vertical-align:middle; margin-left: 15px; background-color: #fca120; }
	.weui-media-box__hd{
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-color: #f0f0f0;
    width: 80px; height: 80px;background-color: #fff;margin-right: 10px;
		}
		.comment .weui-media-box_appmsg{
			-webkit-box-align: start; 
    -webkit-align-items: start; 
     align-items: start; 
		}
		.weui-media-box__info__meta img,.weui-media-box__desc img{height: 12px;}
		.weui-media-box__title >span{font-size: 14px; color: #999; float:right}
		.weui-media-box__desc {color: #fca120;margin-bottom: 5px;}
		.weui-media-box__bd >:nth-child(2) {margin-bottom: 15px;}
		.weui-media-box__desc .weui-media-box__hd{margin-top: 15px; height: 80px; width: 80px;}
		.comment .weui-media-box >.weui-media-box__hd{border-radius: 50%;}
		.pay:active{background-color: #fff ;color:#f0f0f0}
		.weui-search-bar_focusing{bottom:initial !important;top: 0;}
		.weui-media-box__desc{color: #666;}
		
		.squareInfo .weui-media-box__info :last-child{float: right;}
		.weui-media-box__title img{height: 17px;}
		.weui-media-box__desc span{color: #000;}
		.weui-media-box__desc{display: block;text-align: justify;}
</style>
