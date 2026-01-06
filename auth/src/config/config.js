import {config as dotenvConfig} from 'dotenv';

dotenvConfig();

const _config = {

    MONGO_URL: process.env.MONGO_URL,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY

}

export default _config;