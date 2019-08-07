// 引用城市列表数据
import {move_api3} from "api/move.js"
// 公共数据放入两个数组  热门城市 城市列表
const state={
    cityhot:[],
    citylist:[],

}
// 把数据data传入vue页在通过vue方法 执行mutations
const actions={
    async headActions({commit}){
        let data =await move_api3();
        commit("headMutations",data.data.cities)
    }
}

const mutations={
// 上面方法传入 公共数据的两个数组  和 全部数据
// 热门列表
    headMutations(state,params){
        let citylist=[]
        // 循环全部数据 满足热门的数据 push到公共数据数组中
        for(var i=0; i<params.length;i++){
            if(params[i].isHot){
            state.cityhot.push({id:params[i].id,name:params[i].nm})   
            }
        }

// 城市列表        py是数据的拼音  
        for(var i=0;i<params.length;i++){
  // 循环全部数据 把数据py 截取第一个字母 并转为大写
            var letlist= params[i].py.substr(0,1).toUpperCase();
       
//如果城市列表里存在这个字母了 
            if(islist(letlist)){
        //就循环城市列表  
                for(var k=0;k<citylist.length;k++){
                    if(letlist==citylist[k].index){
        // 数组.list 存在的这个数据的id和name push进去
                        citylist[k].list.push({id:params[i].id,name:params[i].nm});
                        break;
                    }
                }
// 如果没有这个字母 数组就push（{这个字母，list:[id,name]}）
           }else{
                citylist.push({index:letlist,list:[{id:params[i].id,name:params[i].nm}]})
            }
        } 

// 判断一下截取的大写字母 在不在城市列表当中
// 存在为true 不存在未false
// 这么做是为了能够让上面 判断不重复的字母 添加到列表里
        function islist(letlist){
            var stop=false;

            for(var b=0;b<citylist.length;b++){
                if(citylist[b].index==letlist){
                    stop=true;
                    break;
                }
            }
            return stop
        }

        // 字母排序 暂时没懂  x码比较
        citylist.sort((item1,item2)=>{
            if(item1.index>item2.index){
                return 1;
            }else{
                return -1;
            }
        })
        // 赋值给公共数据
        state.citylist=citylist
        // console.log(state.citylist,state.cityhot)
    }
}
export default {
    state,
    mutations,
    actions,
    namespaced:true
}


