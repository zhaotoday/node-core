module.exports = {
  firstUpperCase ([first, ...rest]) {
    return first.toUpperCase() + rest.join('')
  },
  where: {
    toObj (string) {
      return JSON.parse(string)
    },
    toStr (object) {
      return JSON.stringify(object)
    }
  }
}
