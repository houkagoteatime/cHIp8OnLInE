const express = require('express')
const app = express()
var router = express.Router()
var verbose = process.env.NODE_ENV != 'test';

values = ["Hello", "Express"]

router.use(function(req, res, next) {
	console.log('Time: ' + Date.now() + 'Server access at: ' + req.originalUrl)
})

app.route('/api/hello')
	.get(function(req, res) {
		res.json(values)
	})

app.listen(3000, () => console.log('Now listening on port 3000!'))

app.use('/', router)
app.set('view engine' , 'html')
