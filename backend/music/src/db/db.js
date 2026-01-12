import mongoose from "mongoose";
import config from '../config/config.js'


async function connectMusicDB(){
    try {
        await mongoose.connect(config.MONGO_URL);
        console.log('connected to music database');
    } catch (err) {
        console.log('failed to connect to music database', err);
    }
}

export default connectMusicDB;