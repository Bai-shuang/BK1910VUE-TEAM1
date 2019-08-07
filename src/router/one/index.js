export default{
    path:"/one",
    // 路由的懒加载
    component:()=>import("views/one"),
    name:"one",

}