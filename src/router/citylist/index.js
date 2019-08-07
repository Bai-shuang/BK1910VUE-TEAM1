export default{
    path:"/citylist",
    // 路由的懒加载
    component:()=>import("views/citylist"),
    name:"citylist",

}