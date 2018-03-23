<template>
  <div style="background:#f0f0f0;height: 100%; padding: 15px;">
  	<div class="box">
  		<div class="weui-panel weui-panel_access">
	  		<div class="weui-media-box weui-media-box_appmsg">
	        <div class="weui-media-box__hd" :style="'background-image: url('+smeta+');'"></div>
	        <div class="weui-media-box__bd">
	            <h4 class="weui-media-box__title">{{connect}}</h4>
	        </div>
	    	</div>
    	</div>
  		<div class="starList">
  			
  			<span class="star" :class="{on:'1'<=data.grade}" @click="data.grade=1"></span>
  			<span class="star" :class="{on:'2'<=data.grade}" @click="data.grade=2"></span>
  			<span class="star" :class="{on:'3'<=data.grade}" @click="data.grade=3"></span>
  			<span class="star" :class="{on:'4'<=data.grade}" @click="data.grade=4"></span>
  			<span class="star" :class="{on:'5'<=data.grade}" @click="data.grade=5"></span>
  		</div>
  		<div class="starDetail">
	  		<p v-if="data.grade==1">非常不满意，各方面都很差</p>
	  		<p v-if="data.grade==2">不满意，个别方面很差</p>
	  		<p v-if="data.grade==3">一般</p>
	  		<p v-if="data.grade==4">比较满意，还需完善</p>
	  		<p v-if="data.grade==5">超级满意，无可挑剔</p>
  		</div>
  		<div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <textarea class="weui-textarea" v-model="data.content" placeholder="请输入评价内容" rows="3"></textarea>
                </div>
            </div>
        </div>
        <div class="weui-cells weui-cells_form" style="padding: 15px; margin: 0;">
		       <div class="weui-uploader">
		            <div class="weui-uploader__hd" style="font-size: 18px;">
		                <p class="weui-uploader__title" >上传照片：<span style="font-size: 14px; color: #999;">内容丰富的评价才有机会成为优质评价</span></p>
		            </div>
		            <div class="weui-uploader__bd">
			                <ul class="weui-uploader__files" id="uploaderFiles">
			                    <li class="weui-uploader__file " v-if="data.smeta" @click="data.smeta=null" :style="'background-image:url('+data.smeta+')'">
			                    </li>
			                </ul>
			                <div class="weui-uploader__input-box">
			                    <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*"  @change="uplod($event)" />
			                </div>
			          </div>
		        </div>
		    </div>
		  </div>
		  
		  <div class="weui-btn-area">
            <a class="weui-btn weui-btn_primary" href="javascript:" id="showTooltips" @click="submitBtn">确定</a>
        </div>
  </div>
</template>

<script>

export default {
  data(){
		return{
			smeta:null,
			connect:null,
			data:{
				smeta:"",
				grade:1,
				content:"",
				userid:null,
				touserid:null,
				goods_id:null,
				goods_type:null
			}
			
		}
  },
  components:{
	},
	mounted(){
		this.smeta=JSON.parse(localStorage.getItem("tobecomment")).smeta
		this.connect=JSON.parse(localStorage.getItem("tobecomment")).connect
		this.data.userid=localStorage.getItem("userId")
		this.data.touserid=this.$route.params.touserid
		this.data.goods_id=this.$route.params.goods_id
		this.data.goods_type=this.$route.params.goods_type
	},
	methods:{
		uplod(event){//上传照片转换为base64
  		if(event.target.files.length>0){  
        var that=this
        console.log("点击了")
				var reader=new FileReader();
						reader.readAsDataURL(event.target.files[0]);
						reader.onload=function(){
							  that.data.smeta=this.result
						}
	    }  
 	 },
  	submitBtn(){
  		var k=null
  		for(k in this.data){
  			if(!this.data[k]){
  				alert("有必填数据未填写")
  				console.log(this.data)
  				return;
  			}
  		}
  		
  		this.$http.post(this.Api+"Mission/add_pingjia",this.data).then(response => {//获取数据
      	console.log(response)
      	this.lodding=false
      	if(response.body.error==0){
      		alert("评价成功！点击返回")
      		this.$router.go(-1)
      	}
	 	 	});
  	}
	}
}
</script>

<style scoped>
	.weui-panel{margin-bottom: 30px;}
	.starList{text-align: center;}
	.box{background: #fff; border-radius:5px; overflow: hidden;}
	.weui-cells:before{display: none;}
	.weui-btn_primary{background:-webkit-linear-gradient(top,#ffa515,#ff7e3d);}
	.star {background: url(../../../static/images/star-line.png) no-repeat center center; background-size: cover; padding: 15px;display: inline-block;}
	.star.on{background-image: url(../../../static/images/star-all.png)}
	.starDetail p{font-size: 14px; color: #ffa515;text-align: center;}
	.weui-media-box__hd{ background: url(../../../static/images/newsLogo.png) no-repeat center center; background-size: cover; margin-right: 10px;}
</style>
