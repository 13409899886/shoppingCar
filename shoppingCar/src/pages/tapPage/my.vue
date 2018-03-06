<template>
  <div style="padding-bottom: 80px;">
  	<div class="userInfo flex flex-v flex-align-center flex-pack-center">
  		<div class="config">
  				<img src="../../../static/images/site.png"/>
  		</div>
  		<div class="userPic"></div>
  		<div class="userName">莫小玲<img src="../../../static/images/icon-man.png" alt="" /><img src="../../../static/images/icon-woman.png" alt="" /></div>
  		<a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_default">学生认证</a>
			<ul class="amount1 amount">
				<li>粉丝：10</li>
				<li><img src="../../../static/images/icon-wallet.png"/>2010.00</li>
			</ul>
  		<ul class="amount2 amount">
				<li>10 <br />关注</li>
				<li>30 <br />朋友</li>
				<li>30 <br />评价</li>
			</ul>
  	</div>
  	<div class="weui-cells weui-panel">
        <a class="weui-cell weui-cell_access js_item" data-id="button" href="javascript:;">
            <div class="weui-cell__bd">
                <p>积分商城</p>
            </div>
            <div class="weui-cell__ft"></div>
        </a>
        <div class="weui-grids">
	        <a href="javascript:;" class="weui-grid">
	            <div class="weui-grid__icon">
	                <img src="../../../static/images/fabu.png" alt="">
	            </div>
	            <p class="weui-grid__label">Grid</p>
	        </a>
	        <a href="javascript:;" class="weui-grid">
	            <div class="weui-grid__icon">
	                <img src="../../../static/images/fabu.png" alt="">
	            </div>
	            <p class="weui-grid__label">Grid</p>
	        </a>
	        <a href="javascript:;" class="weui-grid">
	            <div class="weui-grid__icon">
	                <img src="../../../static/images/fabu.png" alt="">
	            </div>
	            <p class="weui-grid__label">Grid</p>
	        </a>
	    </div>
    </div>
  	<div class="weui-cells weui-panel">
  		
        <a class="weui-cell weui-cell_access js_item" data-id="button" href="javascript:;">
            <div class="weui-cell__bd">
                <p>我的发布</p>
            </div>
            <div class="weui-cell__ft">进行中 : 4</div>
        </a>
        <a class="weui-cell weui-cell_access js_item" data-id="input" href="javascript:;">
            <div class="weui-cell__bd">
                <p>我的钱包</p>
            </div>
            <div class="weui-cell__ft">余额 : 3240.00</div>
        </a>
        <a class="weui-cell weui-cell_access js_item" data-id="list" href="javascript:;">
            <div class="weui-cell__bd">
                <p>我的积分</p>
            </div>
            <div class="weui-cell__ft">积分 : 124</div>
        </a>
        <a class="weui-cell weui-cell_access js_item" data-id="slider" href="javascript:;">
            <div class="weui-cell__bd">
                <p>我的技能</p>
            </div>
            <div class="weui-cell__ft">已上架 : 4</div>
        </a>
        <a class="weui-cell weui-cell_access js_item" data-id="uploader" href="javascript:;">
            <div class="weui-cell__bd">
                <p>我的订单</p>
            </div>
            <div class="weui-cell__ft"></div>
        </a>
        <a class="weui-cell weui-cell_access js_item" data-id="uploader" href="javascript:;">
            <div class="weui-cell__bd">
                <p>我的收藏</p>
            </div>
            <div class="weui-cell__ft"></div>
        </a>
    </div>
    
  </div>
</template>

<script>

export default {
  data(){
		return{
			
		}
  }
}
</script>

<style scoped>
	.userInfo{background:-webkit-linear-gradient(top,#ffa515,#ff7e3d); color: #fff;}
	li{float: left;}
	ul{overflow: hidden;}
	.weui-cell__ft{color: #ffa515;}
	.config{overflow: hidden;width: 100%; padding: 10px;}
	.config img{float: right; height: 20px;}
	.userPic{width: 70px; height: 70px; border-radius: 50%; overflow: hidden; background: url(../../../static/images/me.png) no-repeat center center; background-size:cover; background-color:#2e5b78 ;border: 2px solid rgba(255,255,255,.3);}
	.userInfo>*:not(.config){margin-bottom: 10px;}
	.userName img{height: 25px; vertical-align: middle;}
	.amount img{height: 17px; margin-right: 10px;}
	.amount li{padding: 0 15px ;}
	.amount li:not(:first-child){border-left: 1px solid #fff;}
	.amount2{width: 100%; background: rgba(255,255,255,.3); margin-bottom: 0 !important; padding: 10px; margin-top: 15px;}
	.amount2 li{width: 33%; text-align: center;}
	.amount1{font-size: 12px;}
</style>
