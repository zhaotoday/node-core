module.exports = appInfo => {
  const config = {}

  config.view = {
    mapping: {
      '.ejs': 'ejs'
    }
  }

  config.ejs = {}

  return config
}
