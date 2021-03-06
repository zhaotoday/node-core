module.exports = app => (
  class Test extends app.Service {
    constructor (ctx) {
      super(ctx)
      this.config = this.app.config.test
    }

    async get (id) {
      return {id, name: this.config.key}
    }
  }
)
