<template>
  <div class="c-p-form" style="min-height: 100%;">
  	<test v-show="isshow" @onclose="close"></test>
  	<div v-show="!isshow">
  			<div class="weui-cells weui-cells_form">
           <a class="weui-cell weui-cell_access" href="javascript:;" @click="isshow=!isshow">
                <div class="weui-cell__bd weui-cell_primary">
                    <p>类型</p>
                </div>
                <span class="weui-cell__ft">{{secondMenu}}</span>
            </a>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">任务酬劳：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text"  placeholder="请输入酬劳" v-model="data.salary"/>
                </div>
            </div>
            
	        <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">任务名称：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" pattern="[0-9]*" placeholder="请输入任务名称"  v-model="data.name"/>
                </div>
            </div>
        </div>
			    
        <div class="weui-cells weui-cells_form">
            <div class="weui-cells__title" style="font-size: 17px; color: #333;">任务详情：</div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <textarea class="weui-textarea" placeholder="请输入任务详情" rows="3"  v-model="data.contents"></textarea>
                    <div class="weui-textarea-counter"><span>0</span>/200</div>
                </div>
            </div>
            <div class="weui-cells weui-cells_form" style="padding: .3rem; ">
			       <div class="weui-uploader">
			            <div class="weui-uploader__hd" style="font-size: 18px;">
			                <p class="weui-uploader__title" >任务图像：</p>
			            </div>
			            <div class="weui-uploader__bd">
			                <ul class="weui-uploader__files" id="uploaderFiles">
			                    <li class="weui-uploader__file " v-if="data.smeta" :style="'background-image:url('+data.smeta+')'">
			                    </li>
			                </ul>
			                <div class="weui-uploader__input-box">
			                    <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*"  @change="uplod($event)" />
			                </div>
			            </div>
			        </div>
			    </div>
        </div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">联系人：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text"  placeholder="请输入联系人" v-model="data.connect"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">联系电话：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text"  placeholder="请输入联系电话" v-model="data.tel"/>
                </div>
            </div>
            <div class="weui-cell weui-cell_switch">
                <div class="weui-cell__bd">是否匿名</div>
                <div class="weui-cell__ft">
                    <label for="switchCP" class="weui-switch-cp">
                        <input id="switchCP" class="weui-switch-cp__input" type="checkbox" v-model="data.is_hidename">
                        <div class="weui-switch-cp__box"></div>
                    </label>
                </div>
            </div>
           
        </div>
        <div class="weui-btn-area">
			 <a href="javascript:;" class="weui-btn weui-btn_primary" @click="submitBtn()">确认发布</a>
			</div>
			<i class="weui-loading" v-show="lodding" style=""></i>
			</div>
	</div>
</template>

<script>
	import test from "./fabuClassify.vue"
export default {
  data(){
		return{
			isshow:false,
			lodding:false,
			Type:null,//区分任务或技能
			Id:null,//用户id
			topMenu:"",
			secondMenu:"",
			Url:"",
			data:{
				type:null,
				userid:null,
				salary:null,
				type_id:null,
				contents:null,
				smeta:null,
				connect:null,
				tel:null,
				name:null,
				is_hidename:false,
			}
		}
  },
  
  components:{
		test
	},
  mounted(){
  	//获取类型 
  	this.Type=this.$route.params.type
  	//区别是否是编辑
  	this.Id=this.$route.params.id
  	//获取用户id 如果没有就提示登陆
  	
  	//如果是task类型就是任务 skill就是技能  如果id不等于no就是编辑 否则发布
  	if(this.Type=="task"){
  		this.Url="Mission/add_mission" //确定提交接口地址
  		//获取选中类型
  		if(this.Id!="no"){//编辑任务
  			this.lodding=true
  			this.$http.post(this.Api+'Mission/mission_xq',{id:this.Id}).then(response => {//获取用户数据
		      	console.log(response)
		      	this.lodding=false
		      	if(response.body.error==0){
		      		this.secondMenu=response.body.data[0].type_name
		      		
		      		this.data.salary=response.body.data[0].salary
		      		this.data.type_id=response.body.data[0].type_id
		      		this.data.type=response.body.data[0].type
		      		this.data.contents=response.body.data[0].contents
		      		this.data.smeta=response.body.data[0].smeta
		      		this.data.connect=response.body.data[0].connect
		      		this.data.tel=response.body.data[0].tel
		      		if(response.body.data[0].is_hidename=="true"){this.data.is_hidename=true}else{this.data.is_hidename=false}
		      		console.log(response.body.data[0].is_hidename+"/"+this.data.is_hidename)
		      		this.data.name=response.body.data[0].name
		      		this.data.id=this.$route.params.id
		      	}
			  });
  		}else{//发布任务
  			
  		}
  	}else if(this.Type=="skill"){
  		this.Url="Skill/add_skill" //确定提交接口地址
  		if(this.Id!="no"){//编辑技能
  			this.lodding=true
  			this.$http.post(this.Api+'Skill/skill_xq',{id:this.Id}).then(response => {//获取用户数据
		      	console.log(response)
		      	this.lodding=false
		      	if(response.body.error==0){
		      		this.secondMenu=response.body.data[0].type_name
		      		
		      		this.data.salary=response.body.data[0].salary
		      		this.data.type_id=response.body.data[0].type_id
		      		this.data.type=response.body.data[0].type
		      		this.data.contents=response.body.data[0].contents
		      		this.data.smeta=response.body.data[0].smeta
		      		this.data.connect=response.body.data[0].connect
		      		this.data.tel=response.body.data[0].tel
		      		this.data.is_hidename=response.body.data[0].is_hidename
		      		this.data.name=response.body.data[0].name
		      		this.data.id=this.$route.params.id
		      	}
			  });
  		}else{//发布技能
  			
  		}
  	}
  },
  methods:{
  	close(val){
  		this.isshow=!this.isshow
  		console.log(val)
		this.topMenu=val[0].name
				this.secondMenu=val[1].name
				this.data.type=val[0].id
				this.data.type_id=val[1].id
  	},
  	uplod(event){//上传照片转换为base64
  		if(event.target.files.length>0){  
        var that=this
        console.log("点击了")
				var reader=new FileReader();
						reader.readAsDataURL(event.target.files[0]);
						reader.onload=function(){
							  that.data.smeta=this.result
							  console.log(that.data.smeta)
						}
	    }  
  	},
  	submitBtn(){
  		this.data.userid=localStorage.getItem("userId")
  		var k=null
  		for(k in this.data){
				if(!this.data[k]&&k!="is_hidename"){
					alert("您有必填项未填写！")
					return
				}
  		}
  		console.log(this.data)
  		
  		//提交数据
  		this.$http.post(this.Api+this.Url,this.data).then(response => {//获取用户数据
//	      	this.lodding=false
						console.log(response.body)
	      	if(response.body.error==0){
	      		this.$router.push("/lookTalent/"+this.Type+"/"+response.body.type)
	      	}
		  });
  	}
  }
}
</script>

<style scoped>
		.weui-btn,.weui-switch-cp__input:checked~.weui-switch-cp__box{background: -webkit-linear-gradient(top,#ffa515,#ff7e3d);border: 1px solid transparent;}
		.weui-cells_form .weui-cell__ft{font-size: 17px;}
</style>
