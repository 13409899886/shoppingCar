<template>
  <div style="min-height: 100%;">
  	<div class="weui-panel weui-panel_access">
        <div class="weui-panel__bd">
            <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                <div class="weui-media-box__hd">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">标题一</h4>
                    <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                </div>
                <div class="date">2019.02.1</div>
            </a>
            <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                <div class="weui-media-box__hd">
                </div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">标题一<span class="weui-badge weui-badge_dot" style="margin-left: 5px;margin-right: 5px;"></span></h4>
                    <p class="weui-media-box__desc">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</p>
                </div>
                <div class="date">2019.02.1</div>
            </a>
        </div>
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
	.date{font-size: 12px; color: #999;}
	.weui-media-box__hd{background: url(../../../static/images/newsLogo.png) no-repeat center center; background-size: cover;}
</style>
