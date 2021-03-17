import mongoose from 'mongoose';
import { DB_USER, DB_PASSWORD, DB_NAME } from '../Secret'
import { InitProject, MakeDummyUser } from './init' 

const URL = `mongodb://${DB_USER}:${DB_PASSWORD}@localhost:27017/admin`
console.log(URL);

const dbConnect = async () => {
    mongoose.connect(URL, {
        dbName: "TEST",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('DB Connected!')
    }).catch(err => {
        console.log(err)
    })
}

export default dbConnect