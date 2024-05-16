import express from 'express'

const app = express();

app.get('/', (req, res) => {
	console.log("uwu")
	res.json({
	aaaa: "asdasdas"
})
})

app.listen(3000)
