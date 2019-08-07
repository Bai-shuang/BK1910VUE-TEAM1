<template>
  <div class="t3">
    <Header/>
    <bigbox>
      <!-- 轮播图 -->
      <div class="bot">
          <div class="nr">
        <div class="phone">
          <img src="https://pic5.40017.cn/04/002/90/05/rBTJU105Ih2AflcyAAEnboSkgls040.jpg" alt />
        </div>

        <!-- 搜索框 -->
        <div class="search">
          <input type="text" value="搜索想要的内容" />
        </div>

        <!-- 选项卡 -->
        <div class="select">
          <ul>
            <li>热门</li>
            <li>日本</li>
            <li>港澳台</li>
            <li>东南亚</li>
            <li>欧美澳</li>
          </ul>
          <ul id="tu">
            <li>
              <img src="https://pic5.40017.cn/04/002/90/05/rBTJU105Ih2AflcyAAEnboSkgls040.jpg" alt />
            </li>
            <li>
              <img src="https://pic5.40017.cn/04/002/90/05/rBTJU105Ih2AflcyAAEnboSkgls040.jpg" alt />
            </li>
            <li>
              <img src="https://pic5.40017.cn/04/002/90/05/rBTJU105Ih2AflcyAAEnboSkgls040.jpg" alt />
            </li>
            <li>
              <img src="https://pic5.40017.cn/04/002/90/05/rBTJU105Ih2AflcyAAEnboSkgls040.jpg" alt />
            </li>
            <li>
              <img src="https://pic5.40017.cn/04/002/90/05/rBTJU105Ih2AflcyAAEnboSkgls040.jpg" alt />
            </li>
            <li>
              <img src="https://pic5.40017.cn/04/002/90/05/rBTJU105Ih2AflcyAAEnboSkgls040.jpg" alt />
            </li>
          </ul>
        </div>

        <div class="all">查看全部</div>

        <div class="cate">
          <ul>
            <li>
              <img src="https://pic5.40017.cn/04/002/90/05/rBTJU105Ih2AflcyAAEnboSkgls040.jpg" alt />
              <p>景点门票</p>
            </li>
            <li>
              <img src="https://pic5.40017.cn/04/002/90/05/rBTJU105Ih2AflcyAAEnboSkgls040.jpg" alt />
            </li>
            <li>
              <img src="https://pic5.40017.cn/04/002/90/05/rBTJU105Ih2AflcyAAEnboSkgls040.jpg" alt />
            </li>
            <li>
              <img src="https://pic5.40017.cn/04/002/90/05/rBTJU105Ih2AflcyAAEnboSkgls040.jpg" alt />
            </li>
            <li>
              <img src="https://pic5.40017.cn/04/002/90/05/rBTJU105Ih2AflcyAAEnboSkgls040.jpg" alt />
            </li>
            <li>
              <img src="https://pic5.40017.cn/04/002/90/05/rBTJU105Ih2AflcyAAEnboSkgls040.jpg" alt />
            </li>
          </ul>
        </div>

        <div>
          <div class="a1">热卖产品</div>
          <!-- 渲染 -->
          <div class="list" v-for="(item,index) in List" :key="index">
            <img :src="item.ImagePath" />
            <dl>
              <dt>香港迪士尼</dt>
              <dd class="l1">门票</dd>
              <dd class="l2">￥{{item.WebPrice}}起</dd>
            </dl>
          </div>
        </div>
        </div>
      </div>
    </bigbox>
  </div>
</template>

<script>
import { move_api } from "api/move";
export default {
  name: "three",
  async created() {
    let data = await move_api();
    this.List = data;
    console.log(data);
  },
  data() {
    return {
      List: []
    }
  }
}
</script>

<style  scoped>
/* scoped */

/* 录播 */
.t3 {
  height: 100%;
}
.nr{height:12rem;}
.bot {
     position: fixed;;
     width: 100%;
    /* height: 100%; */
    padding-top: .43rem;
  overflow-y: auto;
    top: .43rem;
 
}
.phone {
  height: 0.93rem;
}
.phone img {
  height: 100%;
}
/* 搜索框 */
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

/* 选项 */
.select > ul {
  height: 0.44rem;
}
.select > ul > li {
  float: left;
  text-align: center;
  line-height: 0.44rem;
  width: 0.75rem;
}
.select > ul > li > img {
  height: 0.96rem;
  width: 1.03rem;
}
.select > #tu {
  height: 2.26rem;
  width: 100%;
}
#tu > li {
  margin: 0.12rem 0 0 0.12rem;
  height: 0.96rem;
  width: 1.03rem;
}

.all {
  height: 0.56rem;
  text-align: center;
  font-size: 0.14rem;
  color: #999;
  line-height: 0.56rem;
}
.cate {
  width: 100%;
  overflow: hidden;
  background: #fff;
  height: 1.33rem;
  border-top: 0.1rem solid rgb(238, 238, 238);
  border-bottom: 0.1rem solid rgb(238, 238, 238);
}
.cate > ul {
  position: relative;
  z-index: 1;
  height: 1.03rem;
  padding: 0.15rem 0;
  margin: 0 0.1rem;
  overflow: hidden;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
}
.cate > ul > li {
  display: inline-block;
  width: 22.5%;
  height: 0.73rem;
}
.cate > ul > li > img {
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  margin-left: 0.18rem;
}
.cate > ul > li > p {
  margin-top: 0.1rem;
  overflow: hidden;
  font-size: 0.12rem;
  color: #333;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.a1 {
  height: 0.36rem;
  margin: 0 0.18rem;
  font-size: 0.16rem;
  font-weight: 700;
  line-height: 0.44rem;
  color: #333;
}

.list {
  height: 1.07rem;
  padding: 0.1rem 0.18rem;
}
.list > img {
  width: 0.9rem;
  height: 0.9rem;
  float: left;
}
.list > dl {
  height: 0.8rem;
  float: left;
  width: 2.45rem;
  padding-right: 0.04rem;
  padding-left: 0.1rem;
}
.list > dl > dt {
  font-size: 0.14rem;
  font-weight: 700;
  color: #333;
}
.l1 {
  padding-top: 0.06rem;
  height: 0.29rem;
  color: #23beae;
}
.l2 {
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.2rem;
  color: #ff5346;
}
</style>
