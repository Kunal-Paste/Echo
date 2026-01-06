import {config as dotenvConfig} from 'dotenv';

dotenvConfig();

const _config = {

    MONGO_URL: process.env.MONGO_URL,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET

}

export default _config;