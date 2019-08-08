import http from "utils/http";
export const home_api = ()=>http("get","/api/AjaxHelper/GetDestinationList.ashx?startcity=53&categoryid=6&startcityname=%E5%8C%97%E4%BA%AC")
