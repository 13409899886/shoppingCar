<template>
  <div style="background:#fff;height: 100%;padding: 15px; padding-top: 50px;">
  	<p style=" text-align: center; font-size: 30px;">输入短信验证码</p>
  	<p style="text-align: center;color: #999;">验证码已发送到1340******</p>
			
		<div class="weui-cells flex flex-pack-center">
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <input class="weui-input" type="text" placeholder="" v-model="code1" @change="verify(code1)"  v-focus="'空'">
            </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <input class="weui-input" type="text" placeholder="" v-model="code2" v-focus2="code1" @change="verify(code2)">
            </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <input class="weui-input" type="text" placeholder="" v-model="code3" v-focus3="code2" @change="verify(code3)">
            </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <input class="weui-input" type="text" placeholder="" v-model="code4" v-focus4="code3" @change="verify(code4)">
            </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <input max="1" class="weui-input" type="text" placeholder="" v-model="code5" v-focus5="code4" @change="verify(code5)">
            </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__bd">
                <input class="weui-input" max="5" type="number"  placeholder="" v-model="code6" v-focus6="code5" @change="verify(code6)">
            </div>
        </div>
    </div>
		<p style="color: #999; line-height: 2;">59秒后可重新发送</p>
		
  </div>
</template>

<script>

export default {
  data(){
		return{
			code1:"",
			code2:"",
			code3:"",
			code4:"",
			code5:"",
			code6:""
		}
  },
  components:{
	},
	watch:{
		code1(){ 
			if(this.code1<0||this.code1>10){
				this.code1=""
			}
		},
			code2(){
				if(this.code2<0||this.code2>10){
					this.code2=""
				}
			},
			code3(){
				if(this.code3<0||this.code3>10){
				this.code3=""
				}
			},
			code4(){
				if(this.code4<0||this.code4>10){
				this.code4=""
			}
			},
			code5(){
				if(this.code5<0||this.code5>10){
				this.code5=""
				}
			},
			code6(){
				if(this.code6<0||this.code6>10){
				this.code6=""
				}
			}
	},
	methods:{
		
		verify(num){
		
			if(this.code1&&this.code2&&this.code3&&this.code4&&this.code5&&this.code6){
				alert("输入完成")
			}else{
				return 0
			}
		}
	},
	mounted(){
		
	},
	directives: {
    focus: {
      inserted: function (el, {value}) {
          setTimeout(function(){el.focus()},1000)
      }
    },
    focus2: {
      update: function (el, {value}) {
        if (value!="") {
          el.focus()
        }
      }
    },
    focus3: {
      update: function (el, {value}) {
        if (value!="") {
          el.focus()
        }
      }
    },
    focus4: {
    	
      update: function (el, {value}) {
        if (value!="") {
          el.focus()
        }
      }
    },
    focus5: {
    	
      update: function (el, {value}) {
        if (value!="") {
          el.focus()
        }
      }
    },
    focus6: {
    	
      update: function (el, {value}) {
        if (value!="") {
          el.focus()
        }
      }
    }
  }
}
</script>

<style scoped>
	.loginTop{padding: 50px 0;}
	.loginTop img{margin: 0 auto; width: 100px;display: block;}
	.weui-cells:before{display: none;}
	.weui-label img{height: 17px;}
	.weui-label{width: 30px;}
	.weui-cell:before{left: 0;}
	.i,.weui-cells:after{display: none;}
	.weui-vcode-btn{border-left:none;color: #f9a11c;}
	.weui-btn{background: -webkit-linear-gradient(top,#ffa515,#ff7e3d)}
	.agreement {text-align: center; font-size: 12px; margin-top: 15px;}
	.agreement span{color: #f9a11c;}
	.otherLogin{padding: 15px; padding-top: 50px;text-align: center; position: relative;}
	hr{border-color: #fff; background: #fff;}
	.otherLogin span{background: #fff;position:absolute; left:50%;transform: translate(-50% , -50%);  display: block; width: 100px;}
	.checkLogin img{width: 30px;margin-right:15px}
	.checkLogin{margin-top:50px}
	.checkLogin img:last-child{margin-right:0}
	.weui-cells .weui-cell:not(:last-child){margin-right: 15px;}
	.weui-cell:before{top: initial;bottom: 0;}
	.weui-cell:before{display: block;}
		/*.weui-cells{padding: 15px;}*/
		.weui-cell input{text-align: center;}
</style>
