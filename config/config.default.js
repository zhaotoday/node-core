module.exports = appInfo => {
  return {
    view: {
      defaultExtension: '.ejs',
      mapping: {
        '.ejs': 'ejs'
      }
    },

    ejs: {},

    sequelize: {
      dialect: 'mysql'
    },

    cors: {
      origin: '*',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
      allowHeaders: 'Authorization'
    },

    jwt: {},

    pageSize: 10
  }
}
