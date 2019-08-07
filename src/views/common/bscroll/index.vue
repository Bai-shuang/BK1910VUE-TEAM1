<template>
<!-- 让这盒子去包裹需要滑动的盒子 -->
    <div class="box" ref="box">
        <!-- 组件 -->
        <slot></slot>
    </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
    name:"bigbox",
    mounted(){
        new BScroll(this.$refs.box)
    }
}
</script>

<style>
/* 去继承父元素的高度 从而达到内层大于外层的作用 */
.box{height:100%;}
</style>
