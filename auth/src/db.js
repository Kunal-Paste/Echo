import mongoose from "mongoose";
import config from "./config/config.js";

async function connectAuthDb() {
    try {
        await mongoose.connect(config.MONGO_URL);
        console.log('connected to authDb');
    } catch (err) {
        console.log('failed to connect authDb');
    }
}

export default connectAuthDb;