import mongoose from 'mongoose'
import { MONGODB_URL } from './config'

mongoose.connect(MONGODB_URL ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("DB is connected"))
    .catch(error => console.error(error))