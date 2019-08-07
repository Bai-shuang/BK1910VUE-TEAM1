<template>
  <div class="x1">
    <!-- 头 公共组件 -->
    <div class="headr">
      <v-touch tag="div" @tap="to()">返回</v-touch>
      <div>全部服务</div>
      <div>更多</div>
    </div>

    <div class="bot1">
      <!-- 搜索框 -->
        <div class="search">
          <input type="text" value="搜索想要的内容" />
        </div>

        <!-- 交通 -->

        <div class="traffic jt">
          <div>交通</div>
          <ul>
            <li>客服咨询</li>
            <li>客服咨询</li>
            <li>客服咨询</li>
            <li>客服咨询</li>
            <li>客服咨询</li>
            <li>客服咨询</li>
            <li>客服咨询</li>
            <li>客服咨询</li>
          </ul>
        </div>

        <div class="traffic">
          <div>酒店</div>
          <ul>
            <li>客服咨询</li>
            <li>客服咨询</li>
            <li>客服咨询</li>
            <li>客服咨询</li>
            <li>客服咨询</li>
            <li>客服咨询</li>
            <li>客服咨询</li>
            <li>客服咨询</li>
          </ul>
        </div>

        <div class="traffic">
          <div>旅游</div>
          <ul>
            <li>客服咨询</li>
            <li>客服咨询</li>
            <li>客服咨询</li>
            <li>客服咨询</li>
            <li>客服咨询</li>
            <li>客服咨询</li>
            <li>客服咨询</li>
            <li>客服咨询</li>
          </ul>
        </div>
      </div>
 
  </div>
</template>

<script>
export default {
  name: "two",
  methods: {
    to() {
      this.$router.back();
    }
  }
};
</script>

<style  scoped>
/* 头部 可用于公共组件 */
.headr {
  display: flex;
  width: 3.75rem;
  top: 0;
  position: absolute;
  background: white;
  border-bottom: 1px solid #ccc;
}
.headr > div {
  flex: 1;
  text-align: center;
  line-height: 0.43rem;
}
.x1{height: 100%;}
/* 搜索框 */

.bot1 { 
  padding-top: .43rem;
  position: fixed;
   height: 100%; 
  overflow: auto;

}
.search {
  width: 100%;
  height: 0.52rem;
  padding: 0.1rem 0.15rem;
}
.search > input {
  width: 100%;
  height: 0.32rem;
  background: #f4f4f4;
  color: #999;
  border-radius: 0.53333rem;
  border: none;
  outline: medium;
}

/* 交通 */
.jt {
  border-top: 0.01333rem solid #e9ecf1;
}
.traffic {
  height: 1.43rem;
  border-bottom: 0.1rem solid rgb(231, 231, 231);
}
.traffic > div {
  margin-top: 0.15rem;
  color: #444;
  line-height: 0.19rem;
  font-size: 0.16rem;
  font-weight: 700;
  padding-left: 0.12rem;
  border-left: 0.03rem solid #02c6cd;
}
.traffic > ul {
  height: 0.6rem;
  padding: 0.15rem 0.05rem 0.05rem 0.15rem;
}
.traffic > ul > li {
  margin: 0 0.1rem 0.1rem 0;
  width: 0.78rem;
  height: 0.3rem;
  float: left;
  line-height: 0.3rem;
  text-align: center;
  color: #333;
  font-size: 0.12rem;
  background: #f5f5f5;
}
</style>
