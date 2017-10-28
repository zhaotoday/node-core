const crypto = require('crypto')

module.exports = {
  /**
   * 单词首字母大写
   * @returns {string}
   */
  firstUpperCase ([first, ...rest]) {
    return first.toUpperCase() + rest.join('')
  },

  /**
   * 查询条件转换
   * @type {object}
   */
  where: {
    toObj (str) {
      return JSON.parse(str)
    },
    toStr (obj) {
      return JSON.stringify(obj)
    }
  },

  /**
   * 格式化查询
   * @returns {object}
   */
  formatQuery (query) {
    const {toObj} = this.where
    const {pageSize} = this.app.config
    const {offset = 0, limit = pageSize, where = null, order = [['id', 'DESC']]} = query

    return {offset, limit, where: toObj(where), order}
  },

  /**
   * MD5 加密
   * @returns {string}
   */
  md5 (string) {
    return crypto.createHash('md5').update(string).digest('hex')
  }
}
