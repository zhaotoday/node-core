module.exports = app => {
  return class extends app.Controller {
    constructor (ctx) {
      super(ctx)

      this.module = ''
      this.service = null
    }

    getService (module) {
      return this.ctx.service[module || this.module]
    }

    async _index () {
      const {offset, limit, where} = this.ctx.helper.formatQuery(this.ctx.request.query)

      this.ctx.status = 200
      this.ctx.body = {
        count: await this.service.count({where}),
        items: await this.service.find({offset, limit, where})
      }
    }

    async _show () {
      this.ctx.status = 200
      this.ctx.body = await this.service.findById(this.ctx.params.id)
    }

    async _create () {
      this.ctx.status = 201
      this.ctx.body = await this.service.create({body: this.ctx.request.body})
    }

    async _update () {
      this.ctx.status = 204
      await this.service.update({
        id: this.ctx.params.id,
        body: this.ctx.request.body
      })
    }

    async _destroy () {
      this.ctx.status = 204
      await this.service.destroyById(this.ctx.params.id)
    }
  }
}
