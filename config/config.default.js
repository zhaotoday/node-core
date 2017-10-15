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

  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    allowHeaders: 'Authorization'
  }

  config.pageSize = 10

  return config
}
