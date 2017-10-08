module.exports = {
  firstUpperCase ([first, ...rest]) {
    return first.toUpperCase() + rest.join('')
  }
}
