
const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')

//routes
const indexRouter = require('./routes/index')




//view setting
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayout)
app.use(express.static('public'))

app.use('/', indexRouter)




const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });