<template>
  <div class="c-p-form" style="min-height: 100%;">
  			<div class="weui-cells weui-cells_form">
            <router-link :to="{path:'/fabuClassify'}" class="weui-cell weui-cell_access" href="javascript:;">
                <div class="weui-cell__bd weui-cell_primary">
                    <p>文字标题</p>
                </div>
                <span class="weui-cell__ft"></span>
            </router-link>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">技能酬劳：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text"  placeholder="请输入酬劳"/>
                </div>
            </div>
            
	        <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">技能名称：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" pattern="[0-9]*" placeholder="请输入技能名称"/>
                </div>
            </div>
        </div>
			    
        <div class="weui-cells weui-cells_form">
            <div class="weui-cells__title" style="font-size: 17px; color: #333;">技能详情：</div>
            <div class="weui-cell">
                <div class="weui-cell__bd">
                    <textarea class="weui-textarea" placeholder="请输入技能详情" rows="3"></textarea>
                    <div class="weui-textarea-counter"><span>0</span>/200</div>
                </div>
            </div>
            <div class="weui-cells weui-cells_form" style="padding: .3rem; ">
			       <div class="weui-uploader">
			            <div class="weui-uploader__hd" style="font-size: 18px;">
			                <p class="weui-uploader__title" >图像：</p>
			            </div>
			            <div class="weui-uploader__bd">
			                <ul class="weui-uploader__files" id="uploaderFiles">
			                    <li class="weui-uploader__file weui-uploader__file_status" style="background-image:url(./images/pic_160.png)">
			                    </li>
			                </ul>
			                <div class="weui-uploader__input-box">
			                    <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" multiple />
			                </div>
			            </div>
			        </div>
			    </div>
        </div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">联系人：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text"  placeholder="请输入联系人"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd"><label class="weui-label">联系电话：</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text"  placeholder="请输入联系电话"/>
                </div>
            </div>
            <div class="weui-cell weui-cell_switch">
                <div class="weui-cell__bd">是否匿名</div>
                <div class="weui-cell__ft">
                    <label for="switchCP" class="weui-switch-cp">
                        <input id="switchCP" class="weui-switch-cp__input" type="checkbox" >
                        <div class="weui-switch-cp__box"></div>
                    </label>
                </div>
            </div>
        </div>
        <div class="weui-btn-area">
			 <a href="javascript:;" class="weui-btn weui-btn_primary" >确认发布</a>
			</div>
	</div>
</template>

<script>
export default {
  data(){
		return{
			nowIndex:0,
			
		}
  },
  mounted(){
  },
  components:{
  },
  methods:{
  	
  }
}
</script>

<style scoped>
		.weui-btn,.weui-switch-cp__input:checked~.weui-switch-cp__box{background: -webkit-linear-gradient(top,#ffa515,#ff7e3d);
		border-color: transparent;}
</style>
