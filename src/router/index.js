import Vue from "vue";
import VueRouter from "vue-router";
import home from "./home";
import cityBox from "./cityBox";
import planeTicket from "./planeTicket";
import trainTicket from "./trainTicket";
import one from "./one"
import two from "./two"
import three from "./three"
import citylist from "./citylist";
Vue.use(VueRouter)

export default new VueRouter ({
    routes:[
        home,
        cityBox,
        planeTicket,
        trainTicket,
  	one,
        two,
        three,
        citylist,
   	{
            path:"/",
            redirect:"/home"
        },
    ]
})