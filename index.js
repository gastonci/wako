const express = require('express')
const app = express()
const sendmail = require('sendmail')();
 
sendmail({
    from: 'no-reply@yourdomain.com',
    to: 'test@qq.com, test@sohu.com, test@163.com ',
    subject: 'test sendmail',
    html: 'Mail of test sendmail ',
  }, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
});

app.get('/', function (req, res) {
	switch(req.query.v) {
		case "1":
			res.send("hola")
			sendmail({
    			from: 'no-reply@yourdomain.com',
    			to: 'lalor@loketa.com',
    			subject: 'test sendmail',
    			html: 'Mail of test sendmail ',
  			}, function(err, reply) {
    			console.log(err && err.stack);
    			console.dir(reply);
			})
			break
		case "2":
			res.send("chau")
			break
	}
	console.log(req.query.v)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))