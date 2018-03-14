<template>
 <div class="mydialog" >
 	
 	<div class="mask" v-show="isshow" @click="onclose"></div>
 	<transition name="fade">
		<div class="content" v-show="isshow">
			<!--<span @click="onclose">&times;</span>-->
			<div class="clearBoth">
				<slot >什么都没有</slot>
			</div>
		</div>
 	</transition>		
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
	.content{position: fixed;bottom:10%; padding: 15px;z-index: 1000000;width: 100%;}
	.content >span{float: right; line-height: 1; cursor:pointer}
	.clearBoth{clear: both;}
	.fade-leave-active{
		transition: all .5s;
	}
	.fade-enter-active{
		transition: all 1s;
	}
	.fade-enter{
		transform: translateY(-800px);
		opacity: 0;
	}
	.fade-leave-active{
		opacity: 0;
		transform: translateY(500px);
	}
</style>
