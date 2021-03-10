import mongoose from 'mongoose';
import { DB_USER, DB_PASSWORD, DB_NAME } from '../Secret'

const URL = `mongodb://${DB_USER}:${DB_PASSWORD}@localhost:27017/admin`
console.log(URL);

const dbConnect = () => {
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