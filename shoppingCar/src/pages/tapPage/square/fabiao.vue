<template>
  <div style="min-height: 100%;">
  	<div class="flex flex-pack-justify" style="padding: 10px 15px; background: #fff;">
  		<span @click="$router.go(-1)">取消</span>
  		<span @click="submitBtn">发表</span>
  	</div>
	  <div class="weui-cells weui-cells_form">
		  	<div class="weui-cell">
            <div class="weui-cell__bd">
                <input class="weui-input" type="tetx" placeholder="请输入标题" v-model="data.title">
            </div>
        </div>
    
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <textarea class="weui-textarea" placeholder="你想说什么" rows="3" v-model="data.contents"></textarea>
                <!--<div class="weui-textarea-counter"><span>0</span>/200</div>-->
            </div>
        </div>
    </div>
    <div class="weui-cells weui-cells_form" style="padding: 10px; ">
       <div class="weui-uploader">
            <div class="weui-uploader__hd" style="font-size: 18px;">
                <p class="weui-uploader__title" >任务图像：</p>
            </div>
            <div class="weui-uploader__bd">
                <ul class="weui-uploader__files" id="uploaderFiles">
                    <li class="weui-uploader__file "  :style="'background-image:url('+item+')'" v-for="(item,index) in data.image" @click="delImg(index)">
                    	<i class="weui-icon-cancel"></i>
                    </li>
                </ul>
                <div class="weui-uploader__input-box">
                    <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*"  @change="uplod($event)" />
                </div>
            </div>
        </div>
    </div>
    <i class="weui-loading" v-show="lodding" style=""></i>
  </div>
</template>

<script>

export default {
  data(){
		return{
			lodding:false,
			data:{
				userid:null,
				contents:"",
				title:"",
				image:[]
			}
		}
  },
  components:{
	},
	mounted(){
		this.data.userid=localStorage.getItem("userId")
	},
	directives: {
    
  },
	methods:{
		delImg(index){
			this.data.image.splice(index,1)
		},
		submitBtn(){
			this.lodding=true
			if(!this.data.contents||!this.data.title||this.data.image.length<=0){
				alert("您的输入有误")
				this.lodding=false
				return;
			}else if(!this.data.userid){
				this.$router.push("/login")
			}
			console.log(this.data)
			//发表广场
		  this.$http.post(this.Api+'Mysquare/addsquare',this.data).then(response => {
	      	if(response.body.error==0){
	      		this.lodding=false
	      		this.$router.push("/square/1")
	      	}
		  });
		},
		uplod(event){//上传照片转换为base64
  		if(event.target.files.length>0){  
        var that=this
        console.log("点击了")
				var reader=new FileReader();
						reader.readAsDataURL(event.target.files[0]);
						reader.onload=function(){
							  that.data.image.push(this.result)
							  console.log(that.data.image)
						}
	    }  
  	}
	}
}
</script>

<style scoped>
	
	.weui-uploader__file{position: relative;border: 1px solid #ddd;overflow: auto;}
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
		.weui-icon-cancel{position: absolute;top: 50%;left: 50%; transform: translate(-50%,-50%); }
		.weui-media-box__desc{display: block;}
</style>
