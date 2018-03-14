<template>
  <div class="slideBox" @mousemove="clearInterval" @mouseout="auto">
  	
    	<div class="slidePic" v-if="sliders!=0" :style="'background-image:url('+sliders[nowIndex].smeta+')'"></div>
    
    <h3 v-if="sliders!=0" v-html="sliders[nowIndex].contents"></h3>
    <ul class="slidePages" >
    	<li @click="goto(pre)">&lt;</li>
    	<li v-for="(item , index) in sliders" @click="goto(index)" :class="{on:index==nowIndex}">{{index+1}}</li>
    	<li @click="goto(next)">&gt;</li>
    </ul>
    <div style="position: absolute;top: 50px;">
    	
    </div>
  </div>
</template>

<script>

export default {
	data(){
		return{
			nowIndex:0,
			timer:"",
			show:true
		}
	},
	props:{
		sliders:{
			type:Array,
			default:[]
		},
		speed:{
			type:Number,
			default:1000
		}
	},
	mounted(){
		this.auto()
	},
	watch:{
		sliders(){
//			console.log(this.sliders[this.nowIndex].Url)
		}
	},
	computed:{
		pre(){
			if(this.nowIndex>0){
				return this.nowIndex-1
			}else{
				return this.sliders.length-1
			}
		},
		next(){
			if(this.nowIndex<(this.sliders.length-1)){
				return this.nowIndex+1
			}else{
				return 0
			}
		}
	},
	methods:{
		fade(){
			this.show=!this.show
		},
		goto(index){
				this.show=true
				this.nowIndex=index
		},
		auto(){
			 this.timer=setInterval(()=>{
				this.goto(this.next)
			},this.speed)
		},
		clearInterval(){
			clearInterval(this.timer)
		}
	}
}
</script>

<style scoped>
	.fadein-enter-active,.fadein-leave-active{
		transition: all 1s;
	}
	.fadein-enter{
		transform: translateY(-500px);
	}
	.fadein-leave-active{
		transform: translateY(500px);
	}
	
	
	ul{overflow: hidden; list-style: none;}
	li{float: left; margin-left: 5px; cursor:pointer;}
	.slideBox{position: relative;width: 100%; height: 180px;overflow: hidden; margin-bottom: 15px;}
	.slidePic{width: 100%; height: 100%; background-repeat: no-repeat; background-position: center center; background-size:cover;}
	h3{position: absolute;left: 0; right: 0; bottom: 0; background: rgba(0,0,0,.3); color: #fff;padding: 10px;}
	.slidePages{position: absolute;right: 15px; bottom: 0; color: #fff;}
	li.on{text-decoration: underline;}
</style>
