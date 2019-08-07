import http from "utils/http.js"


export const move_api=(cityId=10)=>http("get","/lvyou/lvyou/market/temaiList?project=dj&cityId=53")

export const move_api2=(cityId=10)=>http("get","/lvyou/lvyou/market/temaiList?project=dj&cityId=80")


export const move_api3 = (cityId=10)=>http("get","/api/cityList")
