<template>
    <div>
        <!-- header -->
        <div class="header_1">
        <router-link
        tag="div"
        to="/cityBox"
         class="header_11">北京
            <span></span>
        </router-link>
        <h2>
            <input type="text" value="目的地/酒店/景点/关键字">
        </h2>
        <span></span>
    </div>
     <div class="contationer">       
        <div class="banner">
            <img src="//pic4.40017.cn/index/slide/2017/03/21/11/86PQJh.jpg.webp" alt="">
        </div>
        <div class="nav">
            <ul class="nav_ul">
                <router-link
                tag="li"
                to="/trainTicket">
                    <div class="imgCon">
                        <img src="//pic5.40017.cn/01/000/5f/30/rBANC1qozNqAb3vRAAAD_Qg-dt4234.png" alt="">
                    </div>
                    <p>
                        火车票
                    </p>
                </router-link>
                <router-link
                tag="li"
                to="/planeTicket">
                    <div class="imgCon">
                        <img src="//pic5.40017.cn/01/000/5f/30/rBANC1qozNqAb3vRAAAD_Qg-dt4234.png" alt="">
                    </div>
                    <p>机票</p>
                </router-link>
                <li>
                    <div class="imgCon">
                        <img src="//pic5.40017.cn/01/000/5f/30/rBANC1qozNqAb3vRAAAD_Qg-dt4234.png" alt="">
                    </div>
                    <p>酒店住宿</p>
                </li>
                <li>
                    <div class="imgCon">
                        <img src="//pic5.40017.cn/01/000/5f/30/rBANC1qozNqAb3vRAAAD_Qg-dt4234.png" alt="">
                    </div>
                    <p>景点门票</p>
                </li>
            </ul>
            <ul class="nav_bottom">
                <li>
                    <div class="imgCon_q">
                        <img src="//pic5.40017.cn/01/000/5f/a6/rBLkBVqozbiAB7whAAABMV8dFnU373.png" alt="">
                    </div>
                    <p>汽车票-船票</p>
                </li>
                <li>
                    <div class="imgCon_q">
                        <img src="//pic5.40017.cn/01/000/5f/a6/rBLkBVqozbiAB7whAAABMV8dFnU373.png" alt="">
                    </div>
                    <p>周边自由行</p>
                </li>
                <li>
                    <div class="imgCon_q">
                        <img src="//pic5.40017.cn/01/000/5f/a6/rBLkBVqozbiAB7whAAABMV8dFnU373.png" alt="">
                    </div>
                    <p>周边跟团游</p>
                </li>
                <li>
                    <div class="imgCon_q">
                        <img src="//pic5.40017.cn/01/000/5f/a6/rBLkBVqozbiAB7whAAABMV8dFnU373.png" alt="">
                    </div>
                    <p>国内游</p>
                </li>
                <li>
                    <div class="imgCon_q">
                        <img src="//pic5.40017.cn/01/000/5f/a6/rBLkBVqozbiAB7whAAABMV8dFnU373.png" alt="">
                    </div>
                    <p>游轮</p>
                </li>

            </ul>
            <ul class="nav_bottom">
                <li>
                    <div class="imgCon_q">
                        <img src="//pic5.40017.cn/01/000/5f/a6/rBLkBVqozbiAB7whAAABMV8dFnU373.png" alt="">
                    </div>
                    <p>出境游</p>
                </li>
                <li>
                    <div class="imgCon_q">
                        <img src="//pic5.40017.cn/01/000/5f/a6/rBLkBVqozbiAB7whAAABMV8dFnU373.png" alt="">
                    </div>
                    <p>海外玩乐</p>
                </li>
                <li>
                    <div class="imgCon_q">
                        <img src="//pic5.40017.cn/01/000/5f/a6/rBLkBVqozbiAB7whAAABMV8dFnU373.png" alt="">
                    </div>
                    <p>签证</p>
                </li>
                <li>
                    <div class="imgCon_q">
                        <img src="//pic5.40017.cn/01/000/5f/a6/rBLkBVqozbiAB7whAAABMV8dFnU373.png" alt="">
                    </div>
                    <p>全球WiFi</p>
                </li>
                <li>
                    <div class="imgCon_q">
                        <img src="//pic5.40017.cn/01/000/5f/a6/rBLkBVqozbiAB7whAAABMV8dFnU373.png" alt="">
                    </div>
                    <p>全部服务</p>
                </li>
            </ul>
        </div>

        <div class="onSale">
            <a href="#">
                <h3>门票9.9元起</h3>
                <p>1亿补贴</p>
                <img src="//pic5.40017.cn/04/000/11/1d/rBTJU11D8mWAP51uAAAP3iA6jmo471.png" alt="">
            </a>
            <a href="#">
                <h3>门票9.9元起</h3>
                <p>1亿补贴</p>
                <img src="//pic5.40017.cn/04/000/11/1d/rBTJU11D8mWAP51uAAAP3iA6jmo471.png" alt="">
            </a>
        </div>
        <div class="homeToApp">
            <a href="#"><img src="//file.40017.cn/appresource/image/touch/index/touch_index_middle.jpg" alt=""></a>
        </div>
        <div class="hotModule">
            <h2>热门推荐</h2>
            <div class="col-1">
                <a href="#">曼谷</a>
                <a href="#">巴厘岛</a>
                <a href="#">大阪</a>
                <a href="#">冲绳</a>
                <a href="#">...</a>
            </div>
            <div class="col-2">
                <ul>
                    <li>
                        <a href="#">
                            <img src="//pic4.40017.cn/poi/2017/03/16/16/wony5c_300x200_00.jpg" alt="">
                        </a>
                        <p>今年最火的10大古镇</p>
                    </li>
                    <li>
                        <a href="#">
                            <img src="//pic4.40017.cn/poi/2017/03/16/16/wony5c_300x200_00.jpg" alt="">
                        </a>
                        <p>适合秋冬出游的海岛</p>
                    </li>
                    <li>
                        <a href="#">
                            <img src="http://pic5.40017.cn/01/001/04/14/rBLkBVnnEiaADQysAAD4v4j0QKY062_300x200_00.jpg" alt="">
                        </a>
                        <p>中国8大经典自驾线路</p>
                    </li>
                    <li>
                        <a href="#">
                            <img src="http://pic5.40017.cn/01/001/04/14/rBLkBVnnEiaADQysAAD4v4j0QKY062_300x200_00.jpg" alt="">
                        </a>
                        <p>10月旅行目的地推荐</p>
                    </li>
                </ul>
                <a class="playF" href="#">查看更多玩法</a>
            </div>
        </div>
        <div class="advantage">
            <ul>
                <li>
                    <p>价格公正</p>
                    <span>价格公开透明,请安心购买</span>
                </li>
                <li>
                    <p>产品丰富</p>
                    <span>出行产品,全品类覆盖,一站式服务</span>
                </li>
                <li>
                    <p>品质保证</p>
                    <span>精挑细选,产品优选,放心出行</span>
                </li>
                <li>
                    <p>专业顾问</p>
                    <span>24小时专业客服,一对一服务</span>
                </li>
            </ul>
        </div>
        <div class="bottom">
            <div class="bottom_1">
                <a href="#">
                    <span></span>
                    <p>客服电话</p>
                </a>
                <a href="#">
                    <span></span>
                    <p>下载客户端</p>
                </a>
                <a href="#">
                    <span></span>
                    <p>我的同城</p>
                </a>
            </div>
            <div class="bottom_2">
                <a href="#">电脑版</a>
                <a href="#">简体中文</a>
                <a href="#">意见反馈</a>
            </div>
        </div>
        <div class="footer">&copy;2019同程旅游</div>
        <div class="app"></div>
        
    </div>
    </div>
</template>
<script>
import {home_api} from 'api/home.js'
export default {
    name:"home",
    async created () {
       let data=await home_api()
       console.log(data)
    }
}

</script>

<style >
html{
    font-size: 26.67vw
}
    .header_1{
    width: 3.75rem;
    height: .52rem;
    color: #333;
    padding: .09rem 0 .09rem .11rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    display: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
}
.header_11{
    width: .54rem;
    height: .32rem;
    color: #23beae;
    font-size: .16rem;
    margin: 0 .07rem 0 0;
    padding: 0 .22rem 0 0;
    text-align: center;
    line-height: .32rem;
    position: relative;
    flex: 1;
    text-align: left
}
.header_11 span{
    width: 0;
    border-top: .06rem solid #23beae;
    border-right: .06rem solid transparent;
    border-left: .06rem solid transparent;
    position: absolute;
    top: 0.15rem;
    right: .1rem
}
.header_1 h2{
    display: inline-block;
    flex: 4;
    text-align: center
}
.header_1 h2 input{
    width: 2.6rem;
    height: .33rem;
    border: 1px solid #ccc;
    outline: none;
    background-color:   #f2f4f7;
    border-radius: .1rem;
    font-size: .14rem;
    color: #93989f;
    padding: 0 .4rem 0;
}
.header_1>span{
    display: inline-block;
    width: .29rem;
    height: .21rem;
    flex: 1;
    text-align: right
}
/* **************contationer************** */

.contationer{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    position: absolute;
    top:0.52rem;
    bottom: 0px;

}
.contationer .banner{
    width: 3.75rem;
    height:.95rem;
}
.contationer .banner>img{
   width: 100%;
   height: 100%;
}

.contationer .nav{
    width: 100%;
    height: 2.84rem;
    color: #333;
    font-size: 12px;
    background-color: #fff;
    padding: .2rem .15rem   0;
    
}
.contationer .nav_ul{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 0 .18rem;
    border-bottom:1px solid #ccc;
}
.contationer nav ul li{
    display: flex;
    justify-content: center;
    align-items: centr
}
.nav_ul p{
    text-align: center;;
    margin: .05rem 0 0
}
.contationer>nav .imgCon{
    width: 100%;
}
.imgCon img{
    width: .5rem;
    height: .5rem
}

.nav_bottom{
    width: 3.45rem;
    height: 0.83rem;
    color: #333;
    padding: .15rem 0 .05rem;
    display: flex;
    justify-content: center;
    align-content: center
}
.nav_bottom li{
    width: 20%;
  /* display: flex; */
  justify-content: center;
  align-items: center
}
.nav_bottom  p{
    text-align: center;;
    margin: .05rem 0 0;
    font-size: .12rem;
}
.imgCon_q {
    width: 100%;
    display: flex;
    justify-content: center;
}
.imgCon_q img{
    width: .3rem;
    height: .3rem
}
/* ************onSale************** */
.onSale{
    width: 100%;
    height: .75rem;
    margin: 10px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: #fff;
}
.onSale a{
    padding: .1rem .15rem;
    flex: 1;
    position: relative;
    border-right: 1px solid #ccc;
}
.onSale a:nth-of-type(2){
    border-right:none
}
.onSale a h3{
    height: .19rem;
    font-size: .14rem;
    margin: .075rem 0 0;
    color: #333;
    display: inline-block;
}
.onSale a p{
    color: #ebb73f;
    font-size: .12rem;
    margin: .04rem 0 0;
    padding: 0 .1rem;
    display: inline-block;
    position: absolute;
    left: .15rem;
    bottom: .17rem
}
.onSale a  img{
    width: .55rem;
    height: .55rem;
    float: right;
}
/* **************hot**************** */
.homeToApp{
    width: 100%;
    height: .9rem;
    margin-top: .1rem
}
.homeToApp img{
    width: 100%;
    height: 100%
}
/* ****************hotModule******************** */
.hotModule{
    width: 100%;
    height: 4.5rem;
    color: #333;
    background-color: #fff;
    margin: .1rem 0 0;
    padding: .14rem 0 0;
    font-size: 12px;
}
.hotModule h2{
    color: #fb5300;
    font-size: 16px;
    text-align: center
}
.hotModule .col-1{
    width: 100%;
    height: 1.1rem;
    color: #333;
    font-size: 12px;
    padding: .2rem .05rem  .1rem .22rem;
    /* display: flex; */
    justify-content: space-around;
    align-items: center;
}
.hotModule .col-1 a{
    display: inline-block;
    width:0.7rem;
    height: .3rem;
    background-color: #f4f4f4;
    margin: 0 .1rem .1rem 0;
    border-radius: .15rem;
    text-align: center;
    line-height: .3rem;
    color: #333;
}
.col-2{
    width: 100%;
    height: 3rem;
    padding: .2rem .05rem .2rem .15rem;
}
.col-2 ul{
    display: flex;
    flex-wrap: wrap;
}
.col-2 ul li{
    width: 1.78rem;
    height: 1.05rem;
    margin: 0 0 .1rem;
    float: left;
    flex: 1;
    position: relative;
}   
.col-2 ul li p{
    position: absolute;
    bottom: 0rem;
    left: .1rem;
    color: #fff;
    font-size: 14px;
    padding: .05rem .1rem;
}
.col-2 img{
    width: 1.68rem;
    height: 1.05rem
}
.playF{
    display: inline-block;
    width: 100%;
    height: .2rem;
    color: #00A0ff;
    font-size: .14rem;
    margin: .1rem 0 0;
    text-align: center
}

/* ***********advantage****************** */
.advantage{
    width: 100%;
    height: 2.85rem;
    margin-top: .1rem;
    background-color: #fff;
}
.advantage ul{
    width: 100%;
    height: 100%;
    color: #333;
    font-size:12px;
    padding: .25rem 0 .25rem  .3rem;
}
.advantage ul li {
    width: 3.45rem;
    height: .38rem;
    color: #9f8a70;
    font-size: 12px;
    padding: 0 0 0 .5rem;
    margin: .275rem 0 0;
}
.advantage ul li:nth-of-type(1){
    margin: 0
}
.advantage p{
    width: 2.95rem;
    height: .2rem;
    font-size: .14rem;
}
.advantage span{
    width: 1.44rem;
    height: .14rem;
    font-size: 12px
}
/* ********bottoom************ */
.bottom{
    width: 100%;
    height:1.05rem;
    color: #333;
    font-size: 12px;
    background-color: #f0f4f5;
    padding: .17rem 0 0;
}
.bottom_1{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
}
.bottom_1 a{
    flex: 1;
    height: .55rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.bottom_1 span{
    display: inline-block;
    width: 0.23rem;
    height: .23rem;
    background: url(//pic5.40017.cn/02/000/64/7b/rBLkCVqp3pSAND1WAAACDBVkQaU993.png) no-repeat;
    background-size: 100% 100%;
    margin-bottom: .05rem
} 
.bottom_2{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: .1rem;
}
.bottom_2 a{
    margin: 0 .3rem;
    color: #999
}
.app{
    height: .48rem;

}
.footer{
    width: 100%;
    height: .48rem;
    color: #999;
    font-size: 12px;
    background-color: #f0f4f5;
    padding: .15rem 0;
    text-align: center
}
</style>