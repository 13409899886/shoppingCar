<template>
  <div style="background:#fff;height: 100%;">
  	<p style="line-height: 5; text-align: center; font-size: 30px;">输入新手机号码</p>
		<form action="">
			<div style="padding: 0 15px;">
				<div class="weui-cells weui-cells_form">
            <div class="weui-cell" >
                <div class="weui-cell__bd">
                    <input class="weui-input" type="tel" v-focus="'空'"  placeholder="请输入手机号" value="">
                </div>
            </div>
       	</div>
			</div>
			<div class="weui-btn-area">
				<router-link :to="{path:'/telcode'}" class="weui-btn weui-btn_primary" >获取短信验证码</router-link >
			</div>
		</form>
		
		
  </div>
</template>

<script>

export default {
  data(){
		return{
		}
  },
  components:{
	},
	directives:{
	 	focus:{
	 		inserted(el,bind){
	 			setTimeout(function(){el.focus()},1000)
	 		}
	 	}
 },
	mounted(){
		
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
</style>
