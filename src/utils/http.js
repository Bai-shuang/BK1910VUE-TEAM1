// import axios from "axios";

// const server =axios.create({
//     baseURL:"https://m.ly.com",
//     timeout:5000,
//     withCredentials:true,
//     changeOrigin:true,
//     headers:("Access-Control-Allow-Origin:*")
// })

// server.interceptors.request.use((config)=>{
//     // headers("Access-Control-Allow-Origin:*");
//     if(config.method.toUpperCase()=="GET"){
//         // config.params={...config.data}
//     }else if(config.method.toUpperCase()=="POST"){
//         config.headers["content-type"]="appliaction/x-www-form-urlencoded"
//     }

//     return config;
// },(error)=>{
//     Promise.reject(error)
// })

// server.interceptors.response.use((res)=>{
//     if(res.status=="OK"){
//         return res.data 
//     }
// },(error)=>{
//     Promise.reject(error)
// })

// export default (method,url,data={})=>{
//     if(method.toUpperCase()=="GET"){
//         return server.get(url,{
//             params:data
//         })
//     }else if(method.toUpperCase()=="POST"){
//         return server.post(url,data)
//     }
// }
import axios from "axios";
import Loading  from "../lib/loading/index.js"
// import qs from "qs"
// import loading from "../lib/loading/index.js"

// let vm = loading()
let vm=Loading();
const server = axios.create({
    baseURL:"https://m.ly.com",
    timeout:5000,
    withCredentials:true,
    changeOrigin:true,
})


server.interceptors.request.use((config)=>{
    if(config.method.toUpperCase() == "GET"){
       // config.params = {...config.data}
    }else if(config.method.toUpperCase() == "POST"){
        config.headers["content-type"] = "appliaction/x-www-form-urlencoded";
        //config.data = qs.stringify(config.data)
    }
    vm.handlemount();
    return config;
},(err)=>{
    Promise.reject(err);
})


server.interceptors.response.use((res)=>{
    if(res.statusText == "OK"){
        vm.handleDestory();
        return res.data
    }

},(err)=>{
    Promise.reject(err);
})



export default (method,url,data)=>{
    if(method.toUpperCase() == "GET"){
        console.log(data,222);
        return server.get(url,{
            params:data
        })
    }else if(method.toUpperCase() == "POST"){
        return server.post(url,data);
    }
}