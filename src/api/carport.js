import { requestWithToken } from "@/utils/request";

/***
 * 查询车位信息
 * @param uid 用户id
 * @param comId 小区id
 * @returns {Promise}
 */
export function getCarport({ uid, comid }) {
  return requestWithToken("/carport", "get", { uid, comid });
}

/**
 * 查询车位被被共享的时间
 * @param pid 车位ID
 * @returns {Promise}
 */
export function getCarportRentTime({ pid }) {
  return requestWithToken("/carport/rent_time", "get", { pid });
}

/**
 * 共享车位
 * @param starttime 开始时间
 * @param endtime 结束时间
 * @param comid 小区id
 * @param pid 车位id
 * @returns {Promise}
 */
export function rentCarportApi({ starttime, endtime, comid, pid }) {
  return requestWithToken("/carport/rent", "post", {
    starttime,
    endtime,
    comid,
    pid,
  });
}

/***
 * 用户添加车位
 * @param pid 车位id
 * @param uid 用户id
 * @returns {Promise}
 */
export function userBindCarportApi({ pid, uid }) {
  return requestWithToken("/carport/bind_user", "post", { pid, uid });
}

/**
 * 查询车位日志
 * @param uid 用户id
 * @param pid 车位id
 * @param page_num 页码
 * @param page_size 每页数量
 * @returns {Promise}
 */
export function getCarportLogApi({ uid, pid, page_num, page_size }) {
  return requestWithToken("/carport/log", "get", {
    uid,
    pid,
    page_num,
    page_size,
  });
}
