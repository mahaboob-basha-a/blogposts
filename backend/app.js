const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./routes')
require('dotenv').config()

const Port = process.env.PORT || 5000

app.use(express.json())
app.use(cors({origin:'*'}))
app.use('/',router)

app.listen(Port,()=> console.log(`Server running at ${Port}`))