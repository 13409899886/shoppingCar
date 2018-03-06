<template>
  <div style="padding-bottom: 80px;">
	    <div class="weui-panel weui-panel_access" style="margin-top: 0;">
        <div class="weui-media-box weui-media-box_text">
	        <h4 class="weui-media-box__title">吉他入门指导 <span>2015.0.0</span></h4>
		        <a href="javascript:;" class="pay weui-btn weui-btn_mini weui-btn_primary">关注</a>
		        <ul class="weui-media-box__info">
		            <li class="weui-media-box__info__meta">关注 205</li>
		            <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">评论 3</li>
		        </ul>
	    	</div>
    </div>
    
    <div class="weui-panel weui-panel_access comment">
        <div class="weui-panel__bd">
            <div class="weui-media-box weui-media-box_appmsg">
                <div class="weui-media-box__hd"></div>
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">张三 </h4>
                   
                    <div class="weui-media-box__desc">老师很好，很好学。</div>
                    <ul class="weui-media-box__info">
                    	<li class="weui-media-box__info__meta">关注 205</li>
					            <li class="weui-media-box__info__meta">关注 205</li>
					            <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">评论 3</li>
					        	</ul>
                </div>
            </div>
        </div>
    </div>
    <div class="weui-search-bar" id="searchBar" :class="{'weui-search-bar_focusing':on==true}" >
        <form class="weui-search-bar__form">
            <div class="weui-search-bar__box">
                <input type="text" class="weui-search-bar__input" id="searchInput" v-focus="on" @blur="onblur" placeholder="评论" required="">
            </div>
            <label class="weui-search-bar__label" id="searchText" @click="search" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                <span>评论</span>
            </label>
        </form>
        <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel" @click="onblur">确定</a>
    </div>		
  </div>
</template>

<script>

export default {
  data(){
		return{
			on:false
		}
  },
  components:{
	},
	mounted(){
		
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
		search(){
			this.on=true
		},
		onblur(){
			this.on=false
		}
	}
}
</script>

<style scoped>
	#searchBar{position: fixed;left: 0; right: 0; bottom: 0;}
	.banner{display: block;}
	.pay{vertical-align:middle; margin-left: 15px; background-color: #fca120; float:right}
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
		.pay:active{background-color: #fff ;color:#f0f0f0}
		.weui-search-bar_focusing{bottom:initial !important;top: 0;}
</style>
