<template>
 <div class="mydialog" v-if="isshow">
 		<div class="mask" @click="onclose"></div>
 		<div class="content">
 			<!--<span @click="onclose">&times;</span>-->
 			<div class="clearBoth">
 				<slot>什么都没有</slot>
 			</div>
 		</div>
 		
 </div>
</template>

<script>

export default {
	data(){
		return{
			
		}
	},
	props:{
		isshow:{
			type:Boolean,
			default:false
		}
	},
	mounted(){
		
	},
	watch:{
		
	},
	computed:{
		
	},
	methods:{
		onclose(){
			this.$emit("close")
		}
	}
}
</script>

<style scoped>
	.mask{position: fixed;top: 0;left: 0; right:0; bottom:0; background: #000; opacity: .3;z-index: 100000;}
	.content{position: fixed;bottom:10%; left:50%; transform: translate(-50%,-50%);padding: 15px;z-index: 1000000;}
	.content >span{float: right; line-height: 1; cursor:pointer}
	.clearBoth{clear: both;}
</style>
