export default{
    path:"/three",
    // 路由的懒加载
    component:()=>import("views/three"),
    name:"three",
    meta: {
  
        // flag:false,
     
    },
}