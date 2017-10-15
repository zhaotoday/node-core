module.exports = app => {
  return class extends app.Service {
    constructor (ctx) {
      super(ctx)

      this.module = ''
      this.model = null
    }

    getModel () {
      const {firstUpperCase} = this.ctx.helper

      if (!this.model) {
        this.model = this.ctx.model[firstUpperCase(this.module)]
      }

      return this.model
    }

    async find ({attributes = null, offset = 0, limit = 10, where = null, order = [['id', 'DESC']]} = {}) {
      return this.getModel().findAll({attributes, offset, limit, where, order})
    }

    async findById (id) {
      return this.getModel().findById(id)
    }

    async destroyById (id) {
      return this.getModel().destroy({
        where: {id}
      })
    }

    async create ({body = null} = {}) {
      return this.getModel().create(body)
    }

    async update ({id, body = null} = {}) {
      return this.getModel().update(body, {
        where: {id}
      })
    }

    async count ({where = null} = {}) {
      return this.getModel().count({where})
    }
  }
}
