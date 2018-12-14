import ajax from "./ajax";

/* 包含n个接口请求函数的模块 
函数的返回值：promise对象
*/
// export function reqAddress(geohash){

// }
// 根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`/position/${geohash}`)
// 获取食物列表
export const reqFoodType = () => ajax(`/index_category`)
// 获取商场列表
export const reqShops = (longitude,latitude) => ajax(`/shops`,{longitude,latitude})