<template>
<div>
	<div class="comeBack" @click="$router.go(-1)">返回</div>
	<div  v-if="shoucangList&&(!shoucangList.length>0)" class="empty">没有了</div>
  <div style="min-height: 100%; padding-bottom: 80px;" v-if="shoucangList.length>0">
  		<div class="weui-panel weui-panel_access">
	        <div class="weui-panel__bd">
	        	<!---->
	        	<label class="weui-cells_checkbox" v-for="item in shoucangList"  @touchstart="ontouchstart($event)" @touchend="ontouchend"  >
	            <div class="weui-media-box weui-media-box_appmsg" >
				          <div class="weui-cell__hd" v-if="isconfig" >
				            	<input type="checkbox" class="weui-check"   v-model="item.checked">
				            	<i class="weui-icon-checked"></i>
				       		</div>													
				       		<!--:style="'background-image:url(+'item.smeta'+)'"-->
	                <div class="weui-media-box__hd" >
	                </div>
	                <div class="weui-media-box__bd" @click="toDetail(item)">
	                   <h4 class="weui-media-box__title">{{item.name}}</h4>
		                    <p class="weui-media-box__desc">￥{{item.salary}}</p>
		                    <ul class="weui-media-box__info">
		                        <li class="weui-media-box__info__meta">浏览：{{item.paynum}}</li>
		                        <li class="weui-media-box__info__meta">售出：{{item.readnum}}</li>
		                    </ul>
	                </div>
	            </div>
            </label>
        	</div>
		  </div>
		  <div style="position: fixed;left: 0;bottom: 0;right: 0; z-index: 10000;box-shadow: 0 -1px 3px #d8d8d8; transition: all 1s;" v-show="isconfig">
	    	<div class="total flex flex-align-center flex-pack-justify">
	    			<label class="weui-cells_checkbox" >
		            <div class="weui-cell__hd">
		                <input type="checkbox" class="weui-check" @click="isallBtn($event)">
		                <i class="weui-icon-checked"></i> 全选
		       		 </div>
		       	</label>
		       	<div>
		       		<button type="button" class="weui-btn weui-btn_mini weui-btn_default" @click="isconfig=false">取消</button>
		       		<button type="button" class="weui-btn weui-btn_mini weui-btn_default" @click="del">删除</button>
		       	</div>
	    	</div>
	    </div>
  </div>
</div>
</template>

<script>

export default {
  data(){
		return{
			userid:"",
			startDate:null,
			endDate:null,
			timer:null,
			isconfig:false,
			shoucangList:[]
		}
  },
  components:{
	},
//	computed:{
// 		shoucangComputed(){
// 			return this.shoucangList
// 		}
// 	},
	mounted(){
		this.userid=localStorage.getItem("userId")
		//获取收藏列表
		this.$http.post(this.Api+"UserCenter/my_collect",{userid:this.userid}).then(response => {//获取用户数据
      	
      	if(response.body.error==0){
				this.shoucangList=response.body.data
				
				console.log(this.shoucangList)
      	}
	  	});
	},
	methods:{
		toDetail(item){
			console.log(item)
			this.$router.push('/detail/'+item.collect_id+'/'+item.collect_type)
		},
		onChange(el,item){
			
				item.ischeck=el.target.checked;//获取点击单选按钮的状态更新到模型数据
			console.log(this.shoucangComputed)
		},
		isallBtn(el){
			if(el.target.checked){
					this.shoucangList.forEach((item,index)=>{
						item.checked=true
					})
				}else{
					this.shoucangList.forEach((item,index)=>{
						item.checked=false
					})
				}
				console.log(this.shoucangList)
		},
		del(){
			var len=this.shoucangList.length
			var ids=[]
			for(var i=len-1;i>-1;i--){
				if(this.shoucangList[i].checked==true){
					
					ids.push(this.shoucangList[i].id)//获取到选中的id
						this.shoucangList.splice(this.shoucangList.indexOf(this.shoucangList[i]),1)//删除data里的数据更新视图
					}
			}
			console.log(ids)
			this.$http.post(this.Api+"UserCenter/delete",{ids:ids}).then(response => {//获取用户数据
      	
      	if(response.body.error==0){
					console.log(response.body)
      	}
	  	});
		},
		ontouchstart(el){
			this.startDate=new Date();
			this.timer=setTimeout(()=>{this.isconfig=true},600)
		},
		ontouchend(){
			this.endDate=new Date()
			if(this.endDate-this.startDate<600){
				clearInterval(this.timer)
			}
		}
	}
}
</script>

<style scoped>
	.weui-media-box__hd{background: url(../../../static/images/banner.png) no-repeat center center; background-size: cover;}
	.weui-cells_checkbox .weui-check:checked+.weui-icon-checked:before{color: #ff9e19;}
		.operation{text-align: right; border-top:1px solid #e5e5e5;padding: 10px 15px;}
		.weui-btn_default{background-color:#fff;overflow: hidden; }
		.weui-btn:after{width: 190%;}
		.weui-btn{margin: 0;}
		.weui-media-box__info{margin-top:5px;}
		.weui-media-box__desc{color: #ff9e19;}
		.total+.weui-navbar{position: relative;}
			.total .weui-btn{margin: 0;}
			.total span{flex: 1; text-align: right; padding-right: 5px; font-weight: bold; height: 50px; line-height: 50px;}
			.total{background: #fff; height: 50px;}
			.total div{margin-bottom:0;}
			.total .weui-btn{overflow: initial; border-radius: 0;background:#ff9e19 ; color: #fff; height: 100%; line-height: 50px;}
			label{position: relative;display: block;}
			.weui-panel label:before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #E5E5E5;
    color: #E5E5E5;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    left: 15px;
}
.weui-btn:after{display: none;}
.weui-cell__hd{transition: all 1s;}
*{

-webkit-touch-callout:none;

-webkit-user-select:none;

-khtml-user-select:none;

-moz-user-select:none;

-ms-user-select:none;

user-select:none;

-o-user-select:none;

}
</style>
