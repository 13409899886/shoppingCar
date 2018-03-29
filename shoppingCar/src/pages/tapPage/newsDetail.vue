<template>
  <div  id="box">
  	<div class="comeBack" @click="$router.go(-1)" >返回</div>
  	<article class="weui-article"  v-if="messageList">
        <h1 >{{messageList.title}}</h1>
        <section>
            <h2 class="title" >{{messageList.add_time| formatDate}}</h2>
            <section>
               <!--<img :src="item" v-if="messageList.image" v-for="item in messageList.image"/>-->
                <div v-html="messageList.contents"></div>
                
            </section>
        </section>
    </article>
  </div>
</template>

<script>
import {formatDate} from '../../../static/js/date.js';

export default {
 filters: {
        formatDate(time) {
		        var date = new Date(time*1000);
		        return formatDate(date, 'yyyy-MM-dd ');
        }
   },
 data(){
		return{
			messageList:null,
			Id:"",
			Url:""
		}
  },
  components:{
	
  },
	updated(){

	},
	mounted(){
		lodding:true
		this.Id=this.$route.params.id
		var Type=this.$route.params.type
		if(Type=="kuaibao"){
			this.Url='News/message_xq'
		}else if(Type=="huodong"){
			this.Url='Message/hd_xq'
		}
		//根据消息id获取详情
		this.$http.post(this.Api+this.Url,{id:this.Id}).then(response => {
      	this.lodding=false
      	if(response.body.error==0){
      		this.messageList=response.body.data
      		console.log(this.messageList)
      	}
	  });
	},
	methods:{
	
	}
}
</script>

<style scoped>
	.title{color: #999; font-size: 14px;}
	.weui-article{background: #fff;}
	.banner img{display: block;max-width: 100%;}
	.weui-navbar{position: initial;}
	.weui-navbar__item{background: #fff;border-bottom: 1px solid transparent; }
	.weui-navbar__item.weui-bar__item_on{background: #fff; border-bottom-color: #dc3133;}
	.weui-media-box__thumb{height: 100%;}
	.weui-media-box__title{white-space: initial;}
	.bottom{padding: .3rem;font-size: .28rem;border-top: 1px dashed #e9e9e9;}
	
	.title{ border-bottom: 1px dashed #ddd;padding-bottom: 15px;}
	.weui-media-box__info{margin-top: 0;}
	.page__bd_spacing{text-align: center;}
	.slider-nav__item--current {width: .2rem;}
	.glide{position: relative;overflow: hidden;width: 100%;}
	.weui-media-box__info + .content{ color: #666;}
	.weui-media-box__info.show + .content{display: block; color: #666;}
	.weui-media-box__title{white-space:initial}
	.slides img{width: 100%;}
	.color5eb9b9{color:#5eb9b9;}
	.weui-media-box_appmsg .weui-media-box__thumb{height: 100%;}
	.respond {padding: 0 .1rem; background: #1e92c5; color: #fff;font-size: .26rem;}
	.weui-media-box_appmsg .weui-media-box__hd{width: 40px; height: 40px;}
	.replay .weui-panel:after,.replay .weui-panel:before{display: none;}
	.commentContent{padding-left: .3rem;}
	.weui-media-box{padding-bottom: 0;}
	.septalLine{text-align: center;position: relative;width: 100%;}
	.septalLine span{background: #fff; color: #1296db;z-index: 1000;position: relative;padding: 0 10px;font-size: 15px;}
	.septalLine:before{content: "" ;width: 100%; border-bottom: 1px dashed #e9e9e9; background: #ddd; position: absolute;left: 0 ;top:50%;z-index: 100;}
	.weui-article{padding-bottom: 0;}
	.content{padding-bottom: .3rem;}
	.weui-panel:before{display: none;}
	.lg{display: inline-block;background: #1296DB;border-radius: 5px; padding: 2px 5px; color: #fff; margin-left: 10px;line-height: 1;}
	#span span{ display: inline-block;background: #1296DB;border-radius: 5px; padding: 2px 5px; color: #fff; margin-left: 10px; }
	#span span.active{background: #fff; color: #1296db;}
	section{text-align: justify;}
	#box{background: #fff;}
</style>
