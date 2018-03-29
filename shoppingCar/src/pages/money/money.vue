<template>
	<div style="height: 100%; overflow: auto;"  id="d1">
		<div class="comeBack" @click="$router.go(-1)" >返回</div>
	  <div style="background:#fff;height: 100%; padding: 15px; padding-top: 50px;">
	  		
	  		<div class="flex flex-pack-center" style="margin-bottom: 30px;">
					<div class="icon-box" style="text-align: center;">
		            <img src="../../../static/images/wallet-gold.png" height="80px"/>
		            <div class="icon-box__ctn">
		            	<h3 class="icon-box__title" style="text-align: center; margin-top: 15px; font-size: 15px;">账户余额</h3>
		                <h3 class="icon-box__title" style="text-align: center; margin-top: 15px; font-size: 35px;"><span style="font-size: 25px;">￥</span>77.00</h3>
		            </div>
		       </div>
				</div>
	   		<div class="">
	   			<a href="javascript:;" class="weui-btn weui-btn_primary" style="background:-webkit-linear-gradient(top,#ffa515,#ff7e3d);" @click="scotop">充值</a>
	   			<a href="javascript:;" class="weui-btn weui-btn_primary" style="background: #fff; color:#666">提现</a>
	   		</div>
	  </div>
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
	mounted(){
		
	},
	methods:{
		scotop(){
			document.getElementById('d1').scrollTop=1000000;//通过scrollTop设置滚动到100位置
		}
	}
}
</script>

<style scoped>
	
</style>
