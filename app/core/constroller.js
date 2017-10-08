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
  }
}
