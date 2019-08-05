<template>
    <div>
         <div class="train-top">
        <div class="train-top_1">
            <span>&lt;</span>
            <p></p>
            <span>首页</span>
        </div>
    </div>
    <div class="train-content">
        <div class="train-main">
            <div class="train-city">
                <section class="city-wrap">
                    <div class="from-city">
                        <p class="choose">上海</p>
                    </div>
                    <div class="arr-city">
                        <p class="choose_1">请选择</p>
                    </div>
                    <em class="changecity">
                        <i class="i_1"></i>
                    </em>
                </section>
            </div>
            <div class="train-wrap">
                <div class="flex-box data-selected">
                    <p class="leavedate">
                        <span class="select-date">
                            <b>08月04日</b>
                            <i>周日 明天</i>
                        </span>
                    </p>
                </div>
            </div>
            <div class="search-inner">
                <span>学生票</span>
                <span>高铁动车</span>
            </div>
        </div>
        <div class="search-ticket">
            <div class="search-ticket-1">
                火车票查询
            </div>
        </div>
    </div>
    <div class="train-server">
        <div class="train-server-1">
            <img src="https://file.40017.cn/huochepiao/others/grab.png" alt="">
            <p>抢票</p>
        </div>
        <div class="train-server-1">
            <img src="https://file.40017.cn/huochepiao/others/expreee.png" alt="">
            <p>配送票</p>
        </div>
        <div class="train-server-1">
            <img src="https://file.40017.cn/huochepiao/others/guide.png" alt="">
            <p>出行向导</p>
        </div>
    </div>
    <div class="train-bottom">
        <div class="train-bottom-1">
            <img src="https://file.40017.cn/huochepiao/others/service.png" alt="">
            <p>在线客服</p>
        </div>
        <div class="train-bottom-1">
            <img src="https://file.40017.cn/huochepiao/others/suspend.png" alt="">
            <p>车次停运</p>
        </div>
        <div class="train-bottom-1">
            <img src="https://file.40017.cn/huochepiao/others/order.png" alt="">
            <p>订单</p>
        </div>
        <div class="train-bottom-1">
            <img src="https://file.40017.cn/huochepiao/others/12306.png" alt="">
            <p>我的12306</p>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name:"TrainTicket"
}
</script>
<style >
    .train-top{
    width: 3.75rem;
    height: 2.5rem;
    background-image: url(https://file.40017.cn/huochepiao/others/4in1-app-banner-default.jpg);
    background-size: 100% 100%;
}
.train-top_1{
    width: 100%;
    height: .46rem;
    display: flex;
    justify-content: center;
    align-items: center
}
.train-top_1 span{
    flex: 1;
    color: #333;
    text-align: center;
}

.train-top_1 p{
    flex: 3
}
/* ***********train-main************ */
.train-content{
    background: #fff;
    overflow: hidden;
    position: relative;
    margin: -21.333% .08rem .1rem;
    border-radius: .07rem;
}
.train-main{
    padding: 0 .15rem;
}
.train-city{
    padding: 0 .15rem;
}
.city-wrap{
    position: relative;
    box-sizing: border-box;
    line-height: 1;
    height: .7rem;
    overflow: hidden;
}
.from-city{
    position: relative;
    display: inline-block;
    width: 45%;
    height: 100%;
}
.choose{
    display: block;
    font-size: .25rem;
    color: #ccc;
    border: 0;
    background: none;
    height: 100%;
    line-height: .7rem;
    transform: translateZ(0);
    transition: .3s;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    opacity: 1;
    font-weight: 700;
    color:rgba(51,51,51,0.9)
}
.arr-city{
    float: right!important;
    text-align: right;
}
.choose_1{
    display: block;
    font-size: .25rem;
    color: #ccc;
    border: 0;
    background: none;
    height: 100%;
    line-height: .7rem;
    transform: translateZ(0);
    transition: .3s;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    opacity: 1;
    font-weight: 700
}
.changecity{
    width: .36rem;
    height: .36rem;
    position: absolute;
    top: 50%;
    margin: 0 auto;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    z-index: 1;
    left: 0;
    right: 0;
}
.i_1{
    display: block;
    width: 100%;
    height: 100%;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAABIFBMV…U3iIh8NSQFJW0lVZeImrBcwQQKLKVVTaNimFUtFZL+C);
    background-size: 100%;
}
.train-wrap{
    position: relative;
    font-size: .16rem;
    color: #666;
    padding: 0 .15rem;
}
.flex-box {
    position: relative;
    width: 100%;
    line-height: 1em;
}
.leavedate{
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.select-date{
    line-height: 1em;
}
.select-date b{
    color: rgba(0,0,0,.9);
    font-size: .2rem;
    line-height: .2rem;
    vertical-align: text-bottom;
    font-weight: 400;
}
.select-date i{
    padding-left: .1rem;
    font-size: .12rem;
    font-style: normal;
    vertical-align: text-bottom;
    color: rgba(0,0,0,.25);
    display: inline-block;
    padding-bottom: .02rem;
}
.search-inner{
    width: 100%;
    height: .58rem;
    color: #333;
    font-size: .16rem;
    padding: .2rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center
}
.search-ticket{
    width: 3.59rem;
    height: .68rem;
    padding: 0 .15rem .2rem;
    
  
}
.search-ticket-1{
    width: 100%;
    height: .48rem;
    color: #fff;
    font-size: .18rem;
    background-color: #23beae;
    border-radius: .1rem;
    text-align:center;
    line-height: .48rem;
}
/* ***********train-server************* */
.train-server{
    width: 100%;
    height: .79rem;
    background-color: #fff;
    margin: 0 0 .1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.train-server-1{
    flex:1;
}
.train-server-1  img{
    width: .27rem;
    height: .27rem;
    margin: 0 .49rem;
}
.train-server-1 p{
    text-align: center;
    color: rgba(0,0,0,0.4);
    font-size: 12px;
    padding:.1rem 0 0;
}
/* ************train-bottom********************* */
.train-bottom{
    width: 100%;
    height: .68rem;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0
}
.train-bottom-1{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.train-bottom img{
    width: .24rem;
    height: .24rem;
    margin-bottom: .1rem
}
.train-bottom p{
    color: rgba(0,0,0,0.65);
    font-size: .12rem;
    margin: 0 0 .02rem
}
</style>