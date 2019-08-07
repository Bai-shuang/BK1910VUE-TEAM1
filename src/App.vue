<template>
    <div id="app">
   <keep-alive>
      
<router-view></router-view>
 
</keep-alive>
 
        <Loading/>
    </div>
</template>

<script>
import http from 'utils/http.js';
export default {
    name: "App",
    created() {
        http("get", "/api/lvyou/market/temaiList?project=dj&cityId=53").then((data) => {
            console.log(data)
        })
    },
}
</script>

<style lang="scss">
#app{height: 100%;}


</style>
