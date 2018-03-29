<template>
  <div style="padding-bottom: 80px;">
  	<div class="comeBack" @click="$router.go(-1)">返回</div>
      <div v-if="indexData">
        <div class="weui-panel weui-panel_access">
            <div class="weui-panel__bd">
            	<template v-for="item in indexData">
                <router-link :to="{path:''}" tag="div" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd" :style="'background-image: url('+item.image+');'"></div>
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">{{item.name}}</h4>
                    </div>
                    <div class="price">
                    		<span class="weui-btn weui-btn_mini weui-btn_primary" v-if="type=='focu'" @click="isFocus(item)">已关注</span>
                    		<span class="weui-btn weui-btn_mini weui-btn_primary" v-if="type=='friend'" @click="isFocus(item)">互相关注</span>
                    </div>
                </router-link>
              </template>  
            </div>
        </div>
        <transition name="fade">
	        <div class="weui-actionsheet weui-actionsheet_toggle" id="iosActionsheet" v-show="isshow">
	            <div class="weui-actionsheet__title">
	                <p class="weui-actionsheet__title-text">确定不再关注此人？</p>
	            </div>
	            <div class="weui-actionsheet__menu">
	                <div class="weui-actionsheet__cell" @click="submitBtn()">确定</div>
	            </div>
	            <div class="weui-actionsheet__action">
	                <div class="weui-actionsheet__cell" id="iosActionsheetCancel" @click="isshow=false">取消</div>
	            </div>
	        </div>
	       </transition>
      </div>
      <i class="weui-loading" v-show="lodding" style=""></i>
  </div>
</template>

<script>
export default {
  data(){
		return{
			lodding:false,
			slideList:[],
			indexData:null,
			userid:"",
			type:null,
			Url:"",
			isshow:false,
			attention_userid:null
		}
  },
  components:{
	},
	mounted(){
		this.lodding=true
		this.userid=localStorage.getItem("userId")
		if(this.$route.params.type=="focu"){
			this.Url="UserCenter/my_attention"
			this.type="focu"
		}else{
			this.Url="UserCenter/friend"
			this.type="friend"
		}
		//获取数据
	  this.$http.post(this.Api+this.Url,{userid:this.userid}).then(response => {
      	if(response.body.error==0){
      		this.indexData=response.body.data
      		console.log(this.indexData)
      		this.lodding=false
      	}
	  });
	},
	methods:{
		isFocus(item){
			this.isshow=true;
			this.attention_userid=item.uid;//获取对方id
			this.obj=item
		},
		submitBtn(){//更改关注状态
			this.lodding=true
			this.$http.post(this.Api+"UserCenter/attention_user",{userid:this.userid,attention_userid:this.attention_userid}).then(response => {//获取用户数据
      	if(response.body.error==0){
      		alert(response.body.msg)
      		this.lodding=false;
      		this.isshow=false;
      		this.indexData.splice(this.indexData.indexOf(this.obj),1)
      	}
	  	});
		}
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
	.weui-btn:after{display: none; }
	.price .weui-btn{vertical-align: middle;  margin-right: 10px; background: #fff; color: #999; border: 1px solid #d8d8d8;}
	.weui-media-box__hd{border-radius: 50%; overflow: hidden;background: url(../../../static/images/newsLogo.png) no-repeat center center; background-size: cover;}
	.weui-cell__hd{width: 90px; height: 20px; background: url(../../../static/images/newsLogo.png) no-repeat center center; background-size: cover; margin-right: 10px;}
	.weui-panel:after, .weui-panel:before{display: none;}
	.weui-panel:first-child{margin-top:10px}
	.more {float: right; color: #ffa515;}
	.weui-actionsheet__title-text{text-align: center;line-height: 3; background: #fff;}
	.fade-enter{opacity: 0;}
	.fade-enter-active{transition: .5s all}
</style>
