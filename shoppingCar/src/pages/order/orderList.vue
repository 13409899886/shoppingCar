<template>
  <div style="min-height: 100%;">
  	<div class="weui-navbar">
        <div class="weui-navbar__item " @click="tabChange(0)" :class="{'weui-bar__item_on':nowIndex==0}">
            选项一
        </div>
        <div class="weui-navbar__item" @click="tabChange(1)" :class="{'weui-bar__item_on':nowIndex==1}">
            选项二
        </div>
        <div class="weui-navbar__item" @click="tabChange(2)" :class="{'weui-bar__item_on':nowIndex==2}">
            选项三
        </div>
    </div>
    <div>
	  	<div class="weui-panel weui-panel_access">
	        <div class="weui-panel__bd">
	            
	            <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
	                <div class="weui-media-box__hd"></div>
	                <div class="weui-media-box__bd">
	                    <h4 class="weui-media-box__title">标题一 <span>$50</span></h4>
	                    <p class="weui-media-box__desc">作者姓名</p>
	                    <ul class="weui-media-box__info flex flex-align-center flex-pack-justify">
	                        <li class="weui-media-box__info__meta">浏览：100</li>
	                        <li class="weui-media-box__info__meta">
	                        	 <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_default">取消</a>
	                        	 <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_default">付款</a>
	                        </li>
	                       
	                    </ul>
	                </div>
	            </a>
	            
	        </div>
	    </div>
	    <div class="weui-panel weui-panel_access">
	        <div class="weui-panel__bd">
	            
	            <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
	                <div class="weui-media-box__hd"></div>
	                <div class="weui-media-box__bd">
	                    <h4 class="weui-media-box__title">标题一 <span>$50</span></h4>
	                    <p class="weui-media-box__desc">作者姓名</p>
	                    <ul class="weui-media-box__info flex flex-align-center flex-pack-justify">
	                        <li class="weui-media-box__info__meta">浏览：100</li>
	                        <li class="weui-media-box__info__meta">
	                        	 <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_default">已支付</a>
	                        </li>
	                       
	                    </ul>
	                </div>
	            </a>
	            
	        </div>
	    </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
		return{
			nowIndex:0
		}
  },
  methods:{
  	 tabChange(index){
  	 	this.nowIndex=index
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
		.weui-btn:after{width: 190%; }
		.weui-btn{margin: 0; color: #ffa515;}
		.weui-media-box__info{margin-top:5px;}
		.weui-media-box__title span{color: #ff9e19; float: right;}
		.weui-media-box__info .weui-media-box__info__meta:last-child {float:right}
		.weui-media-box__info__meta{padding-right: 0;}
		.weui-btn:after{border-color:#ffa515}
		.weui-navbar{position: relative;}
		.weui-navbar{background: #fff; }
		.weui-bar__item_on{color: #ffa515;background: #fff; }
		.weui-bar__item_on:before{content:"" ; position: absolute;left: 0;right: 0; bottom:0; height: 1px; background: #ffa515;}
		.weui-navbar__item:after,.weui-navbar:after{display: none;}
</style>
