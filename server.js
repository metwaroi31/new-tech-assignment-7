var express = require('express')
var app = express()
var path = require('path')

app.use(express.static(__dirname + '/public/views/pages'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/views/index.html') )
})

app.listen(3000)
