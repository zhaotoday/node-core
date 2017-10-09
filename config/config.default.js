module.exports = appInfo => {
  const config = {}

  config.view = {
    defaultExtension: '.ejs',
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
