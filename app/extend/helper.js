module.exports = {
  firstUpperCase ([first, ...rest]) {
    return first.toUpperCase() + rest.join('')
  },
  where: {
    toObj (str) {
      return JSON.parse(str)
    },
    toStr (obj) {
      return JSON.stringify(obj)
    }
  },
  formatQuery (query) {
    const {toObj} = this.where
    const {pageSize} = this.app.config
    const {offset = 0, limit = pageSize, where = null, order = [['id', 'DESC']]} = query

    return {offset, limit, where: toObj(where), order}
  }
}
