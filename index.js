const express = require('express')
const app = express()
var nodemailer = require('nodemailer'); 

app.get('/', function (req, res) {
	switch(req.query.v) {
		case "1":
			res.send("hola")
			break
		case "2":
			res.send("chau")
			break
	}
	console.log(req.query.v)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))