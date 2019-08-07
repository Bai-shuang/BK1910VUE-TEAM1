<template>
   <div class="city_body">
    <!--热门城市-->
   <bigbox>
    <div>
           <div class="hot_city">
        <div class="hot_title">热门城市</div>
        <div class="hot_city_list" >
            <div class="hot_city_name" v-for="(item,index) in cityhot" :key="index">
                {{item.name}}</div>

        </div>
    </div>
    <!--城市列表-->
    <div class="city_list">
        <div class="city_list_item" v-for="(item,index) in citylist" :key="index">
            <div class="city_title_letter" >{{item.index}}</div>
            <div class="city_list_name">
                <div class="city_list_name_item" v-for="(it,ind) in item.list" :key="ind">{{it.name}}</div>
            </div>
        </div>    
    </div>
    </div>
    </bigbox>
    <!--城市列表下标-->
    <div class="city_list_index">
        <div class="index_item" v-for="(item,index) in citylist" :key="index">{{item.index}}</div>
    </div>
</div>
</template>

<script>
import {mapActions,mapState} from "vuex";

export default {
    name:"CityList",
    created(){
        this.headActions();
 
    },
    computed:{
        ...mapState({
            citylist:state=>state.city.citylist,
            cityhot:state=>state.city.cityhot,
        
        })
    },
    methods:{
        ...mapActions({
            headActions:"city/headActions"
        })
    }
}
</script>

<style>
.city_body {
    background: #ebebeb;
    height: 100%;
    overflow: auto;
}
* {
    box-sizing: border-box;

}
/*热门城市*/
.hot_title,.city_title_letter{
    line-height: .3rem;
    padding-left: .13rem;
    font-size: .14rem;
}

.hot_city_list,.city_list_name {
    width: 96%;
    background: #f5f5f5;
    padding-bottom: 0.08rem;
    padding-right: 0.3rem;
    display: flex;
    flex-wrap: wrap;
}
.hot_city_name {
    margin-top: 0.15rem;
    margin-left: 0.13rem;
    width: .95rem;
    height: 0.33rem;
    background: #fff;
    text-align: center;
    line-height: 0.33rem;
    font-size: 0.14rem;
    border: 1px solid #e6e6e6;
}




.city_list>div{
    width: 100%;
}
.city_list_name_item{
    line-height: .45rem;
    margin-left: .13rem;
    width: 100%;
    border-bottom: 1px solid #e6e6e6;
    font-size: .14rem;
}


/*城市列表下标*/
.city_list_index{
    position: fixed;
    right: 0;
    top: 0.5rem;
}
.city_list_index>div{
    padding: .05rem .025rem;
    font-size:.125rem;
}
</style>