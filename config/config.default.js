module.exports = appInfo => {
  const config = {}

  config.view = {
    mapping: {
      '.ejs': 'ejs'
    }
  }

  config.ejs = {}

  config.sequelize = {
    dialect: 'mysql'
  }

  return config
}
