import mongoose from 'mongoose'
import { DATABASE_URL } from './constants.js';

const DBServer = {};

DBServer.connect = () => {
    mongoose.connect(DATABASE_URL)
    const db = mongoose.connection
    db.on('error', (error) => console.log(error))
    db.once('open', ()=> console.log('database connected /=.=/  '))
}

export default DBServer