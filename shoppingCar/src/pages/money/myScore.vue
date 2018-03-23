<template>
  <div style="background:#fff;height: 100%; padding: 15px; padding-top: 50px;">
  		<h1>{{score}}<span>分</span></h1>
  		<div class="starList">
  			<template v-for="n in score"><img src="../../../static/images/star-all.png"/></template>
  			<template v-for="n in 5-score"><img src="../../../static/images/star-line.png"/></template>
  			
  		</div>
  		<p v-if="score==0">超级不满意</p>
  		<p v-if="score==1">非常不满意，各方面都很差</p>
  		<p v-if="score==2">不满意，个别方面很差</p>
  		<p v-if="score==3">一般</p>
  		<p v-if="score==4">比较满意，还需完善</p>
  		<p v-if="score==5">超级满意，无可挑剔</p>
  </div>
</template>

<script>

export default {
  data(){
		return{
			score:1	
		}
  },
  components:{
	},
	mounted(){
		this.score=parseInt(this.$route.params.score)
	}
}
</script>

<style scoped>
	body *{color:#fda220;text-align: center;}
	h1{text-align: center;line-height: 2; font-size: 70px;}
	h1 span{font-size: 14px;}
	p{font-size: 14px;}
</style>
