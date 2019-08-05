<template>
    <div>
         <div class="planeTicket-header">
        <a href="#">
            </a> <h2>机票预订</h2>
                <a href="#">...</a>
    </div>
    <div class="planeTicket-container">
        <div class="planeTicket-home">
            <div class="planeTicket-home-1">
                <ul class="planeTicket-home-1-ul">
                    <li>
                        <span class="active">国内</span>
                    </li>
                    <li>
                        <span>国际.港澳台</span>
                    </li>
                    <li>
                        <span> 往返</span>
                    </li>
                </ul>
                <div class="planeTicket-home-2">
                    <p>上海</p>
                    <p>北京</p>
                </div>
                <div class="planeTicket-home-3">
                    <div>
                        <p>08月05日</p>
                        <span>明日出发</span>
                    </div>
                    <p class="backDate">返程日期</p>
                </div>
                <div class="planeTicket-home-4">
                    <p class="planeTicket-home-4_1">经济舱</p>
                    <div class="planeTicket-home-4_2">
                        <p>携带儿童</p>
                        <span>2-12岁</span>
                    </div>
                    <div class="planeTicket-home-4_2">
                        <p>携带婴儿</p>
                        <span>14天-2岁</span>
                    </div>
                </div>
                <div class="planeTicket-home-5">
                    <p>飞机票查询</p>
                </div>
            </div>
            <ul class="planeTicket-button">
                <li>
                    <img src="//pic4.40017.cn/cruises/2016/05/25/13/thbWGJ.png" alt="#">
                    <span>机票订单</span>
                </li>
                <li>
                    <img src="//pic4.40017.cn/cruises/2016/05/25/13/thbWGJ.png" alt="#">
                    <span>机票订单</span>
                </li>
                <li>
                    <img src="//pic4.40017.cn/cruises/2016/05/25/13/thbWGJ.png" alt="#">
                    <span>机票订单</span>
                </li>
                <li>
                    <img src="//pic4.40017.cn/cruises/2016/05/25/13/thbWGJ.png" alt="#">
                    <span>机票订单</span>
                </li>
                <li>
                    <img src="//pic4.40017.cn/cruises/2016/05/25/13/thbWGJ.png" alt="#">
                    <span>机票订单</span>
                </li>
            </ul>
        </div>
        <div class="planeTicket-hotContent">
            <div class="planeTicket-hotContent-title">
                <p>当季热门</p>
            </div>
            <a href="#" id="tejia">全部特价>></a>
            <div class="planeTicket-hotWrap">
                <div class="planeTicket-hostSeason">
                    <img src="//pic5.40017.cn/03/000/bf/65/rBANB1zQ96KAOw9VAACXPcM0Prs123.jpg" alt="">
                    <span>抖音热门</span>
                    <span>￥420起</span>
                </div>
                <div class="planeTicket-hostSeason">
                    <img src="//pic5.40017.cn/03/000/bf/65/rBANB1zQ96KAOw9VAACXPcM0Prs123.jpg" alt="">
                    <span>抖音热门</span>
                    <span>￥420起</span>
                </div>
                <div class="planeTicket-hostSeason">
                    <img src="//pic5.40017.cn/03/000/bf/65/rBANB1zQ96KAOw9VAACXPcM0Prs123.jpg" alt="">
                    <span>抖音热门</span>
                    <span>￥420起</span>
                </div>
                <div class="planeTicket-hostSeason">
                    <img src="//pic5.40017.cn/03/000/bf/65/rBANB1zQ96KAOw9VAACXPcM0Prs123.jpg" alt="">
                    <span>抖音热门</span>
                    <span>￥420起</span>
                </div>
                <div class="planeTicket-hostSeason">
                    <img src="//pic5.40017.cn/03/000/bf/65/rBANB1zQ96KAOw9VAACXPcM0Prs123.jpg" alt="">
                    <span>抖音热门</span>
                    <span>￥420起</span>
                </div>
                <div class="planeTicket-hostSeason">
                    <img src="//pic5.40017.cn/03/000/bf/65/rBANB1zQ96KAOw9VAACXPcM0Prs123.jpg" alt="">
                    <span>抖音热门</span>
                    <span>￥420起</span>
                </div>
                <div class="planeTicket-hostSeason">
                    <img src="//pic5.40017.cn/03/000/bf/65/rBANB1zQ96KAOw9VAACXPcM0Prs123.jpg" alt="">
                    <span>抖音热门</span>
                    <span>￥420起</span>
                </div>
                <div class="planeTicket-hostSeason">
                    <img src="//pic5.40017.cn/03/000/bf/65/rBANB1zQ96KAOw9VAACXPcM0Prs123.jpg" alt="">
                    <span>抖音热门</span>
                    <span>￥420起</span>
                </div>
                <div class="planeTicket-hostSeason">
                    <img src="//pic5.40017.cn/03/000/bf/65/rBANB1zQ96KAOw9VAACXPcM0Prs123.jpg" alt="">
                    <span>抖音热门</span>
                    <span>￥420起</span>
                </div>

            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:"PlaneTicket"
}
</script>
<style>
    /* ***************.planeTicket-header****************** */
.planeTicket-header{
    width: 100%;
    height: .45rem;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center
}
.planeTicket-header a{
    flex: 1;
    text-align: center
}
.planeTicket-header h2{
    flex: 3;
    text-align: center
}
/* ************planeTicket-container**************** */
.planeTicket-container{
    position: absolute;
    top: .45rem;
    bottom: 0;
    overflow-y: auto;
    padding: 0 .06rem;
    background: #fff;
}
.planeTicket-home{
    width: 100%;
    height: 4.61rem;
    padding: .06rem .06rem .072rem;
}
.planeTicket-home-1{
    width: 100%;
    height: 3.67rem;
    padding: .12rem .18rem 0;
    background: #fff;
}
.planeTicket-home-1-ul{
    width: 3.27rem;
    height: .39rem;
    display: flex;
    justify-content: space-around;
    align-items: center
}
.planeTicket-home-1-ul li{
    font-size: .16rem;
    text-align: center;
    color: #7e858c;
}
.planeTicket-home-1-ul li:nth-of-type(1){
    color: #23beae;
}
.active{
    border-bottom: 1px solid #23beae;
}
.planeTicket-home-2{
    width: 3.27rem;
    height: .73rem;
    padding: .12rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
}
.planeTicket-home-2 p{
    height: .27rem;
    color: #333;
    font-size: .21rem;
    font-weight: 900;
}
.planeTicket-home-3{
    height: .6rem;
    padding: 0 .12rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
}
.planeTicket-home-3>div:nth-of-type(1){
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.planeTicket-home-3 p:nth-of-type(1){
    height: .24rem;
    color: #333;
    font-size: .18rem;
    margin: 0 .06rem 0 0;
    text-align: left;
    font-weight: 900;
}
.planeTicket-home-3 span{
    height: .16rem;
    color: #333;
    font-size: 12px
}
.planeTicket-home-3 p:nth-of-type(2){
    height: .24rem;
    color: #999;
    font-size: .18rem;
    padding: 0 0 0 .36rem
}
.planeTicket-home-4{
    width: 3.27rem;
    height: .6rem;
    padding: 0 .12rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
}
.planeTicket-home-4_1{
    width: 1.08rem;
    height: .6rem;
    color: #333;
    font-size: 15px;
    text-align: left;
    line-height: .6rem;
}
.planeTicket-home-4_2{
    color: #999;
}
.planeTicket-home-5{
    width: 3.27rem;
    height: 1.05rem;
    padding: .24rem 0;
    border-bottom: 1px solid #ccc;
}
.planeTicket-home-5 p{
    width: 3.27rem;
    height:.57rem;
    line-height: .57rem;
    text-align: center;
    color: #fff;
    font-size: 18px;
    background: #23beae;
    border-radius:.2rem;
    font-weight: 900;
}
/* *******************planeTicket-button******************* */
.planeTicket-button{
    width: 3.63rem;
    height: 1rem;
    padding: .24rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    border-radius: .1rem;
}
.planeTicket-button img{
    width: .3rem;
    height: .3rem
}
.planeTicket-button li{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
/* *******************planeTicket-hotContent********************* */
.planeTicket-hotContent{
    position: relative;
    background: #fff;
    padding: .1rem;
    height: 100%
}
.planeTicket-hotContent-title{
    width: 3.63rem;
    height: .62rem;
    padding: .24rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.planeTicket-hotContent-title p{
    font-size: 14px;
    color: #999;
}
#tejia{
    position: absolute;
    right: .1rem;
    top: .26rem;
    color: #333;
}
/* **********planeTicket-hostSeason**************** */
.planeTicket-hotWrap{
    background: #fff;
}
.planeTicket-hostSeason{
    width: 170px;
    height: 1.34rem;
    margin: 0 0 .18rem;
    float: left;
}
.planeTicket-hostSeason img{
    width: 1.32rem;
    height: .96rem;
}
.planeTicket-hostSeason span:nth-of-type(1){
    color: #333;
    font-size: 14px;
    padding: .06rem 0;
    display: block
}
.planeTicket-hostSeason span:nth-of-type(2){
    display: block;
    color: #ff574a;
    font-size: 12px
}

</style>