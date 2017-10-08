module.exports = app => {
  return class extends app.Service {
    constructor (ctx) {
      super(ctx)

      this.module = ''
    }

    getModel () {
      const {firstUpperCase} = this.ctx.helper

      return this.ctx.model[firstUpperCase(this.module)]
    }

    async getAll ({offset = 0, limit = 10, where = null} = {}) {
      return this.getModel().findAll({offset, limit, where, order: [['id', 'DESC']]})
    }

    async getById (id) {
      return this.getModel().findById(id)
    }

    async getFirst () {
      return this.getModel().findAll({
        limit: 1,
        order: [['id', 'ASC']]
      })
    }

    async getLast () {
      return this.getModel().findAll({
        limit: 1,
        order: [['id', 'DESC']]
      })
    }

    async getCount ({where = null} = {}) {
      return this.getModel().count({where})
    }
  }
}
