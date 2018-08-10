'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 *@fileOverview 实现Index数据模型
 * @author chen
 */
/**
 *IndexModle类 生成一段异步数据
 * @class
 */
class IndexModel {
  /**
   *@constructor
   * @example{string} app koa2上下文
   */
  constructor(app) {}
  /**
   * 获取具体数据api接口
   * @return {Promise} 返回异步数据
   * @example
   * return new Promise
   * getData()
   */
  getData() {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve('异步数据');
      }, 1000);
    });
  }
}
exports.default = IndexModel;