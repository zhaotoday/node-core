module.exports = app => {
  return class extends app.Controller {
    constructor (ctx) {
      super(ctx)

      this.module = ''
      this.service = null
    }

    getService (module) {
      if (!this.service) {
        this.service = this.ctx.service[module || this.module]
      }

      return this.service
    }

    $ (data) {
      return {
        $: data || {}
      }
    }

    async _index () {
      const {offset, limit, where} = this.ctx.helper.formatQuery(this.ctx.request.query)

      this.ctx.status = 200
      this.ctx.body = {
        count: await this.getService().count({where}),
        items: await this.getService().find({offset, limit, where})
      }
    }

    async _show () {
      this.ctx.status = 200
      this.ctx.body = await this.getService().find({id: this.ctx.params.id})
    }

    async _create () {
      this.ctx.status = 201
      this.ctx.body = await this.getService().create({body: this.ctx.request.body})
    }

    async _update () {
      this.ctx.status = 204
      await this.getService().update({
        id: this.ctx.params.id,
        body: this.ctx.request.body
      })
    }

    async _destroy () {
      this.ctx.status = 204
      await this.getService().destroy({id: this.ctx.params.id})
    }

    /**
     * 签发 token
     * @param userInfo 不敏感的用户信息
     * @param expiresIn 过期时间
     *   如：60=60*1000ms、'1d'=24*60*60*1000ms、'1h'=60*60*1000ms、'1m'=60*1000ms、'1s'=60ms、'1y'=365.25*24*60*60*1000
     * @returns {string}
     */
    sign ({userInfo, expiresIn}) {
      const {jwt, config} = this.app
      return jwt.sign(userInfo, config.jwt.secret, {expiresIn})
    }

    /**
     * 校验 token
     * @returns {object}
     */
    verify () {
      const token = this.ctx.header.authorization
      const {jwt, config} = this.app
      return jwt.verify(token, config.jwt.secret)
    }
  }
}
