const express = require('express')


const app = express()

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


require("../BoogieJS/backend/api.js")(app)
require("../BoogieJS/backend/mcp.js")(app)
require("../BoogieJS/backend/cloudstorage.js")(app)
const port = 5595

app.get('/', (req, res) => {
  res.send('Welcome To Boogie.JS')
})


app.use((req, res) => {
  console.log(`[\x1b[32m${req.method}\x1b[0m][${req.statusCode}] ${req.url}`)
})

app.listen(port, () => {
  console.log(`[\x1b[34mBOOGIEJS\x1b[0m] Backend listening on port ${port}\n`)
})