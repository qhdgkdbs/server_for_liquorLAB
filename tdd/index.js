const express = require('express')
const app = express()
var morgan = require('morgan')
const port = 3000
const bodyParser = require('body-parser')
var liquor = require('./api/liquor/index')

if(process.env.NODE_ENV !== 'test'){
    app.use(morgan('dev'));
}

app.use(express.static(__dirname + '/public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/liquors', liquor)

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}!`)
// })

module.exports = app;