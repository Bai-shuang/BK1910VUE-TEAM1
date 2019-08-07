export default{
    path:"/two",
    // 路由的懒加载
    component:()=>import("views/two"),
    name:"two",
    meta: {
  
        // flag:false,
     
    },
}