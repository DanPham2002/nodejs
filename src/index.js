const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const router = require('./routers')


app.use(express.static(path.join(__dirname,'public')))

//HTTP loggers
app.use(morgan('combined'))

//template engines
app.engine('hbs', handlebars.engine({ 
  extname: '.hbs',
  defaultLayout: 'main'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

//router init
router(app)

//Port init
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})