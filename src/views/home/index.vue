<template>
    <div>
          <keep-alive>
      <router-view></router-view>
        </keep-alive>
        <TabBer/>
    </div>
</template>
<script>
import TabBer from "common/tabBar";
export default {
  components:{
    TabBer,
  },
  

}
</script>