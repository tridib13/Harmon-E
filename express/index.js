const express = require('express')
const cors = require('cors')

const router = require('./routes')

const app = express()
app.use(express.json())

app.use(cors({ origin: true, credentials: true }))
app.use(router)

const port = process.env.PORT || 5000
app.listen(port, () => console.log('Server up on port', port))