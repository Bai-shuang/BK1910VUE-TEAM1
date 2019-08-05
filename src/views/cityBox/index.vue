<template>
    <div>
        <div class="cityBox-search">
        <input type="text" value="中文/拼音/首字母" id="searchInput">
    </div>
    <div class="cityBox-container">
        <h3>当前</h3>
        <ul class="cityBox-getPosition">
            <li>
                <span>用户拒绝获取地理位置</span>
            </li>
        </ul>
        <h3>热门</h3>
        <ul class="cityBox-cityList">
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
            <li>北京</li>
        </ul>
    </div>
    </div>
</template>
<script>
export default {
    name:"CityBox"
}
</script>

<style>
    .cityBox-search{
    width: 100%;
    height: .55rem;
    background: #e0e4ec;
    padding: .075rem .08rem .075rem .075rem;
    position: fixed;
    top: 0;
    left: 0
}
#searchInput{
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 0 0 0 .36rem;
    border: none;
    outline: none;
    color: #888;
}
.cityBox-container{
    width: 100%;
    padding: .08rem 0 0;
    overflow-y: auto;
    position: absolute;
    top:  .55rem;
    bottom: 0;
}
.cityBox-container h3{
    width: 100%;
    height: .3rem;
    color: #777;
    font-size: 16px;
    padding: 0 0 0 .2rem;
    text-align: left;
    line-height: .3rem
}
.cityBox-getPosition{
    height: .42rem;
}
.cityBox-getPosition li{
    height: 100%;
    background: #fff;
    margin: 0 .075rem 0 .14rem;
    padding: 0 0 0 .15rem;
    display: flex;
    align-items: center;
    color: #666;
}
.cityBox-getPosition li span{
    color: #666;
    font-size: 12px
}
/* **************cityBox-cityList******************** */
.cityBox-cityList{
    width: 100%;
   
}
.cityBox-cityList li{
    width: .99rem;
    height: .42rem;
    color: #666;
    font-size: 14px;
    background: #fff;
    margin: 0 0 .12rem .14rem;
    text-align: center;
    line-height: .42rem;
    float: left;
    border-radius: .05rem
}


</style>