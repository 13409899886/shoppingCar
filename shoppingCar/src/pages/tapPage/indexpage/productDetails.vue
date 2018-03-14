<template>
  <div style="padding-bottom: 80px;">
  		<img src="../../../../static/images/banner.png" alt="" class="banner"/>
  		
	    <div class="weui-panel weui-panel_access" style="margin-top: 0;">
        <div class="weui-media-box weui-media-box_text">
	        <h4 class="weui-media-box__title">吉他入门指导</h4>
		        <ul class="weui-media-box__info">
		            <li class="weui-media-box__info__meta">
		            	<img src="../../../../static/images/star-all.png"/><img src="../../../../static/images/star-line.png"/>
		            	5.0分
		            </li>
		            <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">认证</li>
		            <li class="weui-media-box__info__meta">102人已购买</li>
		        </ul>
	        <p class="weui-media-box__desc">本人受过专业老师培训，已经玩吉他有三年了，平时没事及几个朋友在一起玩，有自己的乐队，包教会初级的吉他弹唱和乐理知识。</p>
	    	</div>
        <div class="weui-panel weui-panel_access">
	        <div class="weui-panel__bd">
	            <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg kecheng">
	                <div class="weui-media-box__hd" style="background-image:url(../../../static/images/newsLogo.png)"></div> 
	                <div class="weui-media-box__bd">
	                    <h4 class="weui-media-box__title">吉他课程<span>35人购买</span></h4>
	                    <p class="weui-media-box__desc">￥300</p>
	                </div>
	            </a>
	            
	        </div>
        </div>
    </div>
    
    <div class="weui-panel weui-panel_access comment">
            <div class="weui-panel__hd">全部评价</div>
            <div class="weui-panel__bd">
                <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd" style="background-image:url(../../../static/images/newsLogo.png)"></div> 
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">张三 <span>2013.0.1</span></h4>
                        <p class="weui-media-box__desc">
                        	<img src="../../../../static/images/star-all.png"/><img src="../../../../static/images/star-line.png"/>
                        </p>
                        <div class="weui-media-box__desc">老师很好，很好学。
                        	<div class="weui-media-box__hd" style="background-image:url(../../../static/images/newsLogo.png)"></div> 
                        </div>
                    </div>
                </a>
                <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd" style="background-image:url(../../../static/images/newsLogo.png)"></div> 
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">张三 <span>2013.0.1</span></h4>
                        <p class="weui-media-box__desc">
                        	<img src="../../../../static/images/star-all.png"/><img src="../../../../static/images/star-line.png"/>
                        </p>
                        <div class="weui-media-box__desc">老师很好，很好学。
                        	<div class="weui-media-box__hd" style="background-image:url(../../../static/images/newsLogo.png)"></div> 
                        </div>
                    </div>
                </a>
                <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd" style="background-image:url(../../../static/images/newsLogo.png)"></div> 
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">张三 <span>2013.0.1</span></h4>
                        <p class="weui-media-box__desc">
                        	<img src="../../../../static/images/star-all.png"/><img src="../../../../static/images/star-line.png"/>
                        </p>
                        <div class="weui-media-box__desc">老师很好，很好学。
                        	<div class="weui-media-box__hd" style="background-image:url(../../../static/images/newsLogo.png)"></div> 
                        </div>
                    </div>
                </a>
            </div>
            <div class="weui-panel__ft">
                <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
                    <div class="weui-cell__bd">查看更多</div>
                    <span class="weui-cell__ft"></span>
                </a>    
            </div>
        </div>
    		<div class="weui-panel weui-panel_access kecheng">
            <div class="weui-panel__hd">更多商家</div>
            <div class="weui-panel__bd">
                <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
                    <div class="weui-media-box__hd" style="background-image:url(../../../static/images/newsLogo.png)"></div> 
                    <div class="weui-media-box__bd">
                        <h4 class="weui-media-box__title">滚石影月 <span>35人购买</span></h4>
                        <p class="weui-media-box__desc">￥500</p>
                    </div>
                </a>
            </div>
        </div>
    		<div class="pay">
    			50元<a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">立即购买</a>
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
		
	}
}
</script>

<style scoped>
	.banner{display: block;}
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
</style>
