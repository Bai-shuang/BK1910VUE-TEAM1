<template>
     <div class="headr">
      <v-touch tag="div" @tap="to()">返回</v-touch>
      <div>海外游玩</div>
      <div>更多</div>
    </div>
</template>

<script>
export default {
  name:"Header",
  methods: {
    to() {
      this.$router.back();
    }
  }
}
</script>

<style>

/* 头部 可用于公共组件 */
.headr {
  z-index: 999;
  display: flex;
  height: 0.43rem;
  width: 3.75rem;
     position: fixed;
        left: 0;
        top:0;
  background: white;
  border-bottom: 1px solid #ccc;
}
.headr > div {
  flex: 1;
  text-align: center;
  line-height: 0.43rem;
}

</style>
