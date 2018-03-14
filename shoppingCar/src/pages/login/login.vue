<template>
  <div style="background:#fff;height: 100%;">
  	<i class="weui-loading" v-show="lodding" style=""></i>
  	<div class="loginTop"><img src="../../../static/images/logo.png" /></div>
		<form action="">
			<div style="padding: 0 15px;">
				<div class="weui-cells weui-cells_form">
		            <div class="weui-cell weui-cell_vcode">
	                <div class="weui-cell__hd"><label class="weui-label"><img src="../../../static/images/login-phone.png"></label></div>
	                <div class="weui-cell__bd">
	                    <input class="weui-input" type="tel" placeholder="请输入手机号" v-model.number="telNumber">
	                </div>
	                <i class="weui-icon-cancel" v-show="isError"></i>
	                <div class="weui-cell__ft">
	                    <button class="weui-vcode-btn" type="button" @click="getCode" v-show="!isDisabled" >获取验证码</button>
	                    <button class="weui-vcode-btn"  type="button"  v-show="isDisabled" disabled="true">{{minus}}秒后可继续获取</button>
	                </div>
	            </div>
		            <div class="weui-cell" >
		                <div class="weui-cell__hd"><label class="weui-label"><img src="../../../static/images/login-password.png"></label></div>
		                <div class="weui-cell__bd">
		                    <input class="weui-input" type="password" name="numbel" placeholder="请输入验证码" v-model.number="yzm">
		                </div>
		            </div>
		       </div>
			</div>
		</form>
		
		<div class="weui-btn-area">
			<div class="weui-btn weui-btn_primary" @click="loginReg()">登录</div>
		</div>
		<p class="agreement">登录/注册即表示同意<span>&laquo;蜂花校园用户协议&raquo;</span></p>
		<div class="otherLogin">
			<hr />
			<span>第三方登录</span>
			<div class="checkLogin felx flex-pack-center">
				<img src="../../../static/images/qq.png"/>
				<img src="../../../static/images/weixin.png"/>
			</div>
		</div>
  </div>
</template>

<script>

export default {
  data(){
		return{
			telNumber:"",
			yzm:"",
			isDisabled:false,
			isError:false,
			minus:60,
			timer:null,
			lodding:false
		}
  },
  computed:{
  	
  },
  components:{
		
  },
	mounted(){
		
	},
	watch:{
		telNumber(){  
			if(/^\d{11}$/.test(this.telNumber)){
				this.isError=false
			}else{
				this.isError=true
			}
		}
	},
	methods:{
		
		getCode(){//获取验证码
			var that=this;
			if(/^\d{11}$/.test(that.telNumber)){
				that.lodding=true
			  this.$http.post(that.Api+'Login/yzcode',{tel:that.telNumber}).then(response => {
		      	that.lodding=false//隐藏lodding
		      	if(response.body.error==0){
		      		
		      		that.isDisabel=true
		      		that.timer=setInterval(function(){
		      			that.minus--,
		      			that.isDisabled=true
		      			console.log(that.minus);//成功回调
		      			if(that.minus<=0){
		      				clearInterval(that.timer)
		      				that.minus=60
		      				that.isDisabled=false
		      			}
		      		},1000)
		      	}
			  }, response => {
			      console.log("response失败"); //失败回调
			  });
			}
		},
		
		loginReg(){//登陆验证
			
			this.lodding=true
		  this.$http.post(this.Api+'Login/Login',{tel:this.telNumber,yzm:this.yzm}).then(response => {
	      	this.lodding=false
	      	if(response.body.error==0){
	      		localStorage.setItem("userId",response.body.data)//登陆成功存储用户id
	      		this.$router.go(-1)
	      		
	      	}
		  });
		}
		
	}
}
</script>

<style scoped>
	.loginTop{padding: 50px 0;}
	.loginTop img{margin: 0 auto; width: 100px;display: block;}
	.weui-cells:before{display: none;}
	.weui-label img{height: 17px;}
	.weui-label{width: 30px;}
	.weui-cell:before{left: 0;}
	.i{display: none;}
	.weui-vcode-btn{border-left:none;color: #f9a11c;}
	.weui-btn{background: -webkit-linear-gradient(top,#ffa515,#ff7e3d)}
	.agreement {text-align: center; font-size: 12px; margin-top: 15px;}
	.agreement span{color: #f9a11c;}
	.otherLogin{padding: 15px; padding-top: 50px;text-align: center; position: relative;}
	hr{border-color: #fff; background: #fff;}
	.otherLogin span{background: #fff;position:absolute; left:50%;transform: translate(-50% , -50%);  display: block; width: 100px;}
	.checkLogin img{width: 30px;margin-right:15px}
	.checkLogin{margin-top:50px}
	.checkLogin img:last-child{margin-right:0}
	.weui-cell__ft :last-child{color: #999; font-size: 14px;}
</style>
