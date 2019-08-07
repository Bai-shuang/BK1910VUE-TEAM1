<template>
  <div class="tou1">
    <div class="top">
      <div class="a1">
        <v-touch tag="div" @tap="to()">返回</v-touch>
        <input type="text" class="a2" />
        <a>更多</a>
      </div>
    </div>
    <!-- 身 -->
    <div class="center">
      <bigbox>
        <div class="a10">
          <img
            class="a7"
            src="https://pic5.40017.cn/01/000/5f/ab/rBLkBlqo0GKARZ0jAAACzlV1vD0332.png"
            id="bb"
          />

          <ul class="a8">
            <li>热门推荐</li>
            <li>东南亚</li>
            <li>海岛精选</li>
            <li>欧美澳非</li>
          </ul>
          <ul class="a9">
            <li>新加坡</li>
            <li>新加坡</li>
            <li>新加坡</li>
            <li>新加坡</li>
            <li>新加坡</li>
            <li>新加坡</li>
            <li>新加坡</li>
            <li>新加坡</li>
            <li>新加坡</li>
            <li>新加坡</li>
            <li>新加坡</li>
            <li>新加坡</li>
          </ul>
          <div class="a3">
            <h3 class="a4">出境热推</h3>

            <div class="a5">
              <ul>
                <li v-for="(item,index) in List2" :key="index">
                  <img class="a6" :src="item.ImagePath" />
                </li>
              </ul>
            </div>
          </div>

          <div class="q">
            <ul class="q1">
              <li>热门推荐</li>
              <li>免签</li>
            </ul>
            <ul class="q2">
              <li>热推</li>
              <li>泰国</li>
              <li>巴厘岛</li>
              <li>缅甸</li>
            </ul>

            <div v-for="(item,index) in List" :key="index">
              <img :src="item.ImagePath" class="z1" />

              <div class="z3">
                <a class="z4">{{item.MainTitle}}</a>
                <br />
                <span class="z2">{{item.SubTitle}}</span>
              </div>
            </div>
          </div>
        </div>
      </bigbox>
    </div>
       <a class="s1" href="#bb">^</a>
  </div>
</template>


<script>
import { move_api, move_api2 } from "api/move";
export default {
  name: "yh1",
  async created() {
    let data = await move_api();
    this.List = data;
    let data2 = await move_api2();
    this.List2 = data2;

    console.log(data2);
  },
  data() {
    return {
      List: [],
      List2: []
    };
  },
  methods: {
    to() {
      this.$router.push("/home");
    }
  }
};
</script>

<style  scoped>
.a10 {
  height: 22rem;
}
/* 头 */
.tou1 {
  height: 100%;
}
.top {
  background:white;
  z-index: 10;
  width: 100%;
  height: 0.44rem;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
}
.a1 {
  width: 3.47rem;
  height: 0.44rem;
  padding: 0.07rem 0;
  display: flex;
  justify-content: space-around;
}
.a2 {
  border-radius: 0.53333rem;
  height: 0.3rem;
  width: 2.52rem;
  background: #ccc;
  outline: medium;
  border: none;
}

/* 底部 */
.center {
  padding-top: 0.43rem;
  height: 100%;
  overflow: auto;
}
.a3 {
  height: 1.63rem;
  width: 100%;
  padding-top: 0.15rem;
}
.a4 {
  margin-left: 0.14rem;
}
.a5 {
  z-index: 1;
  overflow: hidden;
  height: 1.2rem;
  width: 100%;
}
.a5 > ul {
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  font-size: 0;
  white-space: nowrap;
  background-color: #fff;
}
.a5 > ul > li {
  overflow: hidden;
  width: 1.07rem;
  display: inline-block;
  margin: 0.1rem 0.05rem;
}
.a6 {
  height: 0.9rem;
  width: 1.07rem;
  margin: 0.1rem 0.05rem;
  background: black;
  float: left;
}
.a7 {
  width: 3.75rem;
  height: 1.58rem;
}
.a8 {
  display: flex;
  height: 0.4rem;
}
.a8 > li {
  flex: 1;
  text-align: center;
  line-height: 0.4rem;
  color: #666;
  font-size: 0.14rem;
}
.a8 li:hover {
  color: #23beae;
  border-bottom: 1px solid #23beae;
}
.a9 {
  width: 3.75rem;
  height: 1.42rem;
}
.a9 > li {
  width: 0.81rem;
  height: 0.3rem;
  float: left;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 0.3rem;
  margin: 0.06rem 0.05rem;
}

.q {
  width: 3.75rem;
  height: 9.9rem;
  border-top: 0.1rem solid #ccc;
}
.q1 {
  padding: 0 0.51rem;
  width: 3.75rem;
  height: 0.4rem;
}
.q1 > li {
  width: 1.31rem;
  height: 0.4rem;
  text-align: center;
  line-height: 0.4rem;
  float: left;
}
.q1 li:hover {
  color: #23beae;
  border-bottom: 1px solid #23beae;
}
.q2 > li {
  flex: 1;
  margin: 0.05rem;
  width: 0.78rem;
  height: 0.29rem;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 0.29rem;
}
.q2 {
  display: flex;
}

.z1 {
  width: 3.75rem;
  height: 1.83rem;
}
.z2 {
  width: 3.53rem;
  height: 0.12rem;
  font-size: 12px;
  line-height: 12px;
  color: #999;
}
.z3 {
  width: 3.75rem;
  height: 0.87rem;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 0.13rem 0.11rem;
  white-space: nowrap;
}
.z4 {
  font-size: 16px;
  line-height: 16px;
  color: #333;
}

.s1 {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  position: fixed;
  background:white;
  bottom: 0.95rem;
  right: 0.15rem;
  font-size: .5rem;
  text-align: center;
  line-height: 0.6rem;
}
</style>
