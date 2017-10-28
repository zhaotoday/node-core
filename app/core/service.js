module.exports = app => {
  return class extends app.Service {
    constructor (ctx) {
      super(ctx)

      this.module = ''
      this.model = null
    }

    /**
     * 获取当前模型
     * @returns {object}
     */
    getModel () {
      const {firstUpperCase} = this.ctx.helper

      if (!this.model) {
        this.model = this.ctx.model[firstUpperCase(this.module)]
      }

      return this.model
    }

    /**
     * 查询
     * @returns {promise}
     */
    async find ({id = '', attributes = null, offset = 0, limit = 10, where = null, order = [['id', 'DESC']]} = {}) {
      if (id) {
        return this.getModel().findById(id)
      } else {
        return this.getModel().findAll({attributes, offset, limit, where, order})
      }
    }

    /**
     * 删除
     * @returns {promise}
     */
    async destroy ({id}) {
      return this.getModel().destroy({
        where: {id}
      })
    }

    /**
     * 新增
     * @returns {promise}
     */
    async create ({body = null} = {}) {
      return this.getModel().create(body)
    }

    /**
     * 更新
     * @returns {promise}
     */
    async update ({id, body = null} = {}) {
      return this.getModel().update(body, {
        where: {id}
      })
    }

    /**
     * 获取记录总数
     * @returns {promise}
     */
    async count ({where = null} = {}) {
      return this.getModel().count({where})
    }
  }
}
