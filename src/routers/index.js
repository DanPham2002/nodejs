const express = require('express')
const app = express()
const siteRouter = require('./site')
const newsRouter = require('./news')

function router(app){
    app.use('/news',newsRouter)
    app.use('/', siteRouter)
}

module.exports = router