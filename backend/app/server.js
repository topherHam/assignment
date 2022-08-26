
import express from 'express';
import rootRouter from './routes/index.js';
import DBServer from  './dbserver.js'
import cors from 'cors'
//web server
const app = express()

app.use(express.json())
app.use(cors());

//routes
app.use('/', rootRouter)

//listener
const server = app.listen(3000, ()=>console.log('express server running . . .'))

//Connection to mongo
DBServer.connect()

export default server
