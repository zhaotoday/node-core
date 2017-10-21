## Introduction
`node-core` is a Node.js framework based on Alibaba's Egg.js.

## Install
```bash
$ npm install --save node-core
```

## Example
Please visit a full example [here](https://github.com/zhaotoday/egg.js).

## Questions & Suggestions
Please open an issue [here](https://github.com/zhaotoday/node-core/issues).

## Supported plugins
- [egg-view-ejs](https://github.com/eggjs/egg-view-ejs)
- [egg-mysql](https://github.com/eggjs/egg-mysql)
- [egg-sequelize](https://github.com/eggjs/egg-sequelize)
- [egg-cors](https://github.com/eggjs/egg-cors)
- [egg-jwt](https://github.com/okoala/egg-jwt)

## References
- [Egg.js 官网](https://eggjs.org/zh-cn/)
- [框架开发](https://eggjs.org/zh-cn/advanced/framework.html)
- [前后端分离之JWT用户认证](http://lion1ou.win/2017/01/18/)

## Usage
Create `articles` model:
```js
// app/model/articles.js
module.exports = app => {
  const {STRING, TEXT, INTEGER} = app.Sequelize

  return app.model.define('articles', {
    id: {
      type: INTEGER(8),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    author: {
      type: STRING(50),
      allowNull: true
    },
    title: {
      type: STRING(200),
      allowNull: false
    },
    subtitle: {
      type: STRING(200),
      allowNull: true
    },
    description: {
      type: TEXT('tiny'),
    },
    content: {
      type: TEXT('long'),
      allowNull: true
    },
    image: {
      type: INTEGER(8),
      allowNull: true
    },
    category_id: {
      type: INTEGER,
      allowNull: true
    }
  })
}
```


Create `articles` service:
```js
// app/service/articles.js
module.exports = app => {
  return class extends app.Service {
    constructor (ctx) {
      super(ctx)

      this.module = 'articles'
    }
  }
}
```

Create `articles` controller:
```js
// app/controller/articles.js
module.exports = app => {
  return class extends app.Controller {
    constructor (ctx) {
      super(ctx)

      this.module = 'articles'
    }
  }
}
```