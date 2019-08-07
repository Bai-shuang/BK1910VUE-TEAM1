import Loading from "./index.vue";
import Vue from "vue";
export default ()=>{
 // Load=Loading继承vue 动态的创建了挂载点
//  相对于重新new了一个vue
    let Load=Vue.extend(Loading)
     // 脱离el：app挂载点以外使用  
    let vm=new Load({
        el:document.createElement("div"),
        // 在loading.vue中最外层设置v-if="flag"
        data:{
            flag:false
        },
        methods:{
            com(){
                this.flag=true;
            },
            go(){
                this.flag=false;
            }
        }
    })
    //  body中添加 （vm中挂载el 刚才动态创建的div）
    document.body.appendChild(vm.$mount().$el)
    return vm
}



