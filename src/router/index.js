import Vue from "vue";
import VueRouter from "vue-router";
import home from "./home";
import cityBox from "./cityBox";
import planeTicket from "./planeTicket";
import trainTicket from "./trainTicket";
Vue.use(VueRouter)

export default new VueRouter ({
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        home,
        cityBox,
        planeTicket,
        trainTicket
    ],
     
})