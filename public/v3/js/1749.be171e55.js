"use strict";(self["webpackChunkfirefly_iii"]=self["webpackChunkfirefly_iii"]||[]).push([[1749],{1749:(s,e,t)=>{t.r(e),t.d(e,{default:()=>M});var r=t(3673),i=t(2323);const o={class:"row q-mx-md"},l={class:"col-12"},a={class:"row q-mx-md q-mt-md"},n={class:"col-12"},u=(0,r._)("div",{class:"text-h6"},"Edit group",-1),d={class:"row"},c={class:"col-12 q-mb-xs"},h={class:"row q-mx-md"},m={class:"col-12"},p={class:"row"},b={class:"col-12 text-right"},f={class:"row"},g={class:"col-12 text-right"};function w(s,e,t,w,_,v){const q=(0,r.up)("q-btn"),E=(0,r.up)("q-banner"),k=(0,r.up)("q-card-section"),x=(0,r.up)("q-input"),C=(0,r.up)("q-card"),G=(0,r.up)("q-checkbox"),y=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(y,null,{default:(0,r.w5)((()=>[(0,r._)("div",o,[(0,r._)("div",l,[""!==_.errorMessage?((0,r.wg)(),(0,r.j4)(E,{key:0,"inline-actions":"",rounded:"",class:"bg-orange text-white"},{action:(0,r.w5)((()=>[(0,r.Wm)(q,{flat:"",onClick:v.dismissBanner,label:"Dismiss"},null,8,["onClick"])])),default:(0,r.w5)((()=>[(0,r.Uk)((0,i.zw)(_.errorMessage)+" ",1)])),_:1})):(0,r.kq)("",!0)])]),(0,r._)("div",a,[(0,r._)("div",n,[(0,r.Wm)(C,{bordered:""},{default:(0,r.w5)((()=>[(0,r.Wm)(k,null,{default:(0,r.w5)((()=>[u])),_:1}),(0,r.Wm)(k,null,{default:(0,r.w5)((()=>[(0,r._)("div",d,[(0,r._)("div",c,[(0,r.Wm)(x,{"error-message":_.submissionErrors.title,error:_.hasSubmissionErrors.title,"bottom-slots":"",disable:v.disabledInput,type:"text",clearable:"",modelValue:_.title,"onUpdate:modelValue":e[0]||(e[0]=s=>_.title=s),label:s.$t("form.title"),outlined:""},null,8,["error-message","error","disable","modelValue","label"])])])])),_:1})])),_:1})])]),(0,r._)("div",h,[(0,r._)("div",m,[(0,r.Wm)(C,{class:"q-mt-xs"},{default:(0,r.w5)((()=>[(0,r.Wm)(k,null,{default:(0,r.w5)((()=>[(0,r._)("div",p,[(0,r._)("div",b,[(0,r.Wm)(q,{disable:v.disabledInput,color:"primary",label:"Update",onClick:v.submitGroup},null,8,["disable","onClick"])])]),(0,r._)("div",f,[(0,r._)("div",g,[(0,r.Wm)(G,{disable:v.disabledInput,modelValue:_.doReturnHere,"onUpdate:modelValue":e[1]||(e[1]=s=>_.doReturnHere=s),"left-label":"",label:"Return here"},null,8,["disable","modelValue"])])])])),_:1})])),_:1})])])])),_:1})}var _=t(1403),v=t(5474);class q{post(s,e){let t="/api/v1/object_groups/"+s;return v.api.put(t,e)}}const E={name:"Edit",data(){return{submissionErrors:{},hasSubmissionErrors:{},submitting:!1,doReturnHere:!1,doResetForm:!1,errorMessage:"",type:"",id:0,title:""}},computed:{disabledInput:function(){return this.submitting}},created(){this.id=parseInt(this.$route.params.id),this.collectGroup()},methods:{collectGroup:function(){let s=new _.Z;s.get(this.id).then((s=>this.parseGroup(s)))},parseGroup:function(s){this.title=s.data.data.attributes.title},resetErrors:function(){this.submissionErrors={title:""},this.hasSubmissionErrors={title:!1}},submitGroup:function(){this.submitting=!0,this.errorMessage="",this.resetErrors();const s=this.buildGroup();let e=new q;e.post(this.id,s).catch(this.processErrors).then(this.processSuccess)},buildGroup:function(){return{title:this.title}},dismissBanner:function(){this.errorMessage=""},processSuccess:function(s){if(this.$store.dispatch("fireflyiii/refreshCacheKey"),!s)return;this.submitting=!1;let e={level:"success",text:"Group is updated",show:!0,action:{show:!0,text:"Go to group",link:{name:"groups.show",params:{id:parseInt(s.data.data.id)}}}};this.$q.localStorage.set("flash",e),this.doReturnHere&&window.dispatchEvent(new CustomEvent("flash",{detail:{flash:this.$q.localStorage.getItem("flash")}})),this.doReturnHere||this.$router.go(-1)},processErrors:function(s){if(s.response){let e=s.response.data;this.errorMessage=e.message,console.log(e);for(let s in e.errors)e.errors.hasOwnProperty(s)&&(this.submissionErrors[s]=e.errors[s][0],this.hasSubmissionErrors[s]=!0)}this.submitting=!1}}};var k=t(4260),x=t(4379),C=t(5607),G=t(2165),y=t(151),S=t(5589),W=t(4842),Z=t(5735),I=t(7518),Q=t.n(I);const R=(0,k.Z)(E,[["render",w]]),M=R;Q()(E,"components",{QPage:x.Z,QBanner:C.Z,QBtn:G.Z,QCard:y.Z,QCardSection:S.Z,QInput:W.Z,QCheckbox:Z.Z})}}]);