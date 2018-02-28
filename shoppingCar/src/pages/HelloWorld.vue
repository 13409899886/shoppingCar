<template>
 <div>2132</div>
</template>

<script>
export default {
	data(){
		return{
			productList:"",
			product:"",
			sliderList:[],
			show:true
		}
	},
	components:{
	},
	methods:{
//		callback(val){
//			console.log(val)
//		}
	},
  
}
</script>

<style scoped>
	.fadein-enter-active,.fadein-leave-active{transition: all 1s;}
	/*.fadein-enter,.fadein-leave-active{opacity: 0;}*/
	.fadein-enter{
		transform: translateY(-500px);
	}
	.fadein-leave-active{
		transform: translateX(500px);
	}
	#Index{overflow: hidden;}
	.side{padding: 10px;}
	.side-left{float: left; width: 300px; background: #fff;}
	.side-right{margin-left: 310px; padding: 0;}
	.title{background: #09BB07;color: #fff;padding: 5px;}
	ul{padding-left: 15px; }
	h3{margin: 5px; }
	li{color: #666; cursor:pointer;}
	li:hover{background:#09BB07;color:#fff;}
	.weui-media-box__hd{background: url(../../static/images/xuezi.jpg) no-repeat center center; background-size:cover;}
	.obj{width: 290px; margin-right: 10px; float: left; margin-bottom:10px;background: #fff;}
	.obj.last{margin-right: 0;}
	.productBox{overflow: hidden;}
	.weui-btn{margin-top: 10px;}
</style>
