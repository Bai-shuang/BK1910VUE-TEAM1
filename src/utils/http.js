
import axios from "axios";
import Loading from "common/loading/index.js"

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
     vm.com()
    return config;
},(err)=>{
    Promise.reject(err);
})


server.interceptors.response.use((res)=>{
    if(res.statusText == "OK"){
      vm.go()
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