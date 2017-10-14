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

    async findAll ({attributes = null, offset = 0, limit = 10, where = null, order = [['id', 'DESC']]} = {}) {
      return this.getModel().findAll({attributes, offset, limit, where, order})
    }

    async findById (id) {
      return this.getModel().findById(id)
    }

    async findTop ({where = null, order = [['id', 'ASC']]} = {}) {
      return this.getModel().findAll({limit: 1, order})
    }

    async create (body) {
      return this.getModel().create(body)
    }

    async update (id, body) {
      return this.getModel().update(body, {
        where: {id}
      })
    }

    async destroy (id) {
      return this.getModel().destroy({
        'where': {id}
      })
    }

    async count ({where = null} = {}) {
      return this.getModel().count({where})
    }
  }
}
