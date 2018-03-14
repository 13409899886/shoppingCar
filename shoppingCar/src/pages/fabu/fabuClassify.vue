<template>
  <div style="min-height: 100%;">
  	<i class="weui-loading" v-show="lodding" style=""></i>
  	<div v-if="">
	  	<div class="weui-cells page__category-content left">
	        <a class="weui-cell weui-cell_access js_item on" data-id="button" href="javascript:;" v-for="item in topMenu" @click="getSecondMenu(item)">
	            <div class="weui-cell__bd">
	                <p>{{item.name}}</p>
	            </div>
	        </a>
	    </div>
	  	<div class="weui-cells page__category-content right">
	        <a class="weui-cell weui-cell_access js_item on" data-id="button" href="javascript:;" v-for="item in secondMenu" @click="comeback(item)">
	            <div class="weui-cell__bd">
	                <p>{{item.name}}</p>
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
			lodding:false,
			Url:"",
			topMenu:null,
			secondMenu:null,
			backMenu:[],
			backMenuName:""
		}
  },
  
  methods:{
  	comeback(item){
  		this.backMenu[1]={};
  		this.backMenu[1].id=item.id
  		this.backMenu[1].name=item.name
  		this.$emit("onclose",this.backMenu)
  	},
  	getSecondMenu(item){//获取二级类型
  		this.backMenu[0]={};
  		this.backMenu[0].id=item.id
  		this.backMenu[0].name=item.name
  		this.lodding=true;
  		this.$http.post(this.Api+this.Url,{id:item.id}).then(response => {//获取用户数据
	      	this.lodding=false
	      	if(response.body.error==0){
	      		this.secondMenu=response.body.data
	      		console.log(this.secondMenu)
	      	}
		  });
  	}
  },
  mounted(){
  	//根据类型确定接口地址
  	if(this.$route.params.type=="task"){
  		this.Url="Mission/mission_type"
  		this.backMenuName="taskbackMenu"
  	}else if(this.$route.params.type=="skill"){
  		this.Url="Skill/skill_type"
  		this.backMenuName="skillbackMenu"
  	}
  	//获取父级id
  	this.lodding=true
  	this.$http.post(this.Api+this.Url,{}).then(response => {//获取用户数据
      	this.lodding=false
      	if(response.body.error==0){
      		this.topMenu=response.body.data
      		console.log(this.topMenu)
      	}
	  });
  }
}
</script>

<style scoped>
	.left{float: left;width: 150px;min-height: 800px;}
	.right{margin-left:150px;background: #f0f0f0;}
	.weui-cells{margin-top: 0;}
	.weui-cell{ border-right: 1px solid #d8d8d8;}
	.weui-cell.on{background: #f0f0f0; border-right:none}
	.weui-cell:last-child:after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #d9d9d9;
    color: #d9d9d9;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    left: 15px;
}
</style>
