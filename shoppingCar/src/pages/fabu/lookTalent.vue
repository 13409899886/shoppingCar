<template>
  <div style="padding-bottom: 80px;">
		<div class="comeBack" @click="$router.go(-1)">返回</div>    
    <div class="weui-panel weui-panel_access comment">
        <div class="weui-panel__hd">达人推荐</div>
        <div class="nodata" v-if="talentList&&talentList.length<=0">没有数据</div>
        <div class="weui-panel__bd" >
            <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg" v-for="item in talentList" @click="toDetail(item)">
                <div class="weui-media-box__hd" style="background-image:url(../../../static/images/newsLogo.png)"></div> 
                <div class="weui-media-box__bd">
                    <h4 class="weui-media-box__title">{{item.connect}} <span>￥{{item.salary}}</span></h4>
                    <p class="weui-media-box__desc">
                    	<img src="../../../static/images/star-all.png"/><img src="../../../static/images/star-line.png"/>
                    </p>
                    <h4 class="weui-media-box__title">{{item.contents}}</h4>
                </div>
            </a>
            
        </div>
    </div>
		
  </div>
  
</template>

<script>

export default {
  data(){
		return{
			Url:"",
			page:"0",
			type:null,
			talentList:null
		}
  },
  components:{
	},
	mounted(){
		this.type=this.$route.params.type
		if(this.$route.params.Type=="task"){
			this.Url="Mission/find_jndr"
		}else{
			this.Url="Skill/find_rwdr"
		}
		this.$http.post(this.Api+this.Url,{"type":this.type,page:1}).then(response => {//获取用户数据
//	      	this.lodding=false
						console.log(response.body)
	      	if(response.body.error==0){
	      		this.talentList=response.body.data
	      	}
		  });
		 
	},
	methods:{
		toDetail(item){
			if(this.$route.params.Type=="task"){
				this.$router.push("/detail/"+item.id+"/2")
			}else{
				this.$router.push("/detail/"+item.id+"/1")
			}
		}
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
		.weui-media-box__title span{color: #fca120;}
</style>
