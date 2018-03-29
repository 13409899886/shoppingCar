<template>
  <div id="app" >
  	<transition name="fade">
  		
     <router-view></router-view>
     </transition>
  </div>
</template>

<script>

export default {
  
}
</script>

<style scoped>
	#app{position: relative;}
	.fade-leave-active{
		transition: all .2s;
	}
	.fade-enter-active{
		transition: all .7s;
	}
	.fade-enter{
		transform: translateX(300px);
		opacity: 0;
	}
	.fade-leave-active{
		opacity: 0;
		transform: translateX(-300px);
	}
</style>
