<template>
    <div class="tb">    
        <ul >
            <router-link v-for="(item,index) in nava" :key="index"
            tag="li" :to="item.path">
            <span>{{item.text}}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"TabBar",
    data(){
        return{
            nava:[
                {
                  text:"出境游",
                  path:"/one"
                },
                  {
                  text:"海外游玩",
                    path:"/two"
                },
                  {
                  text:"签字",
                    path:"/three"  
                },
                  {
                  text:"全球WIFI",
                    path:"/citylist" 
                },
                  {
                  text:"全部服务",
                    path:"/"
                },
            ]
        }
    }
}
</script>

<style>
.tb>ul{background:white;position: absolute;bottom: 0;width: 100%;display: flex}
.tb>ul>li{flex:1;height: .5rem;text-align: center;line-height: .5rem;border-top: 1px solid #ccc }
</style>
