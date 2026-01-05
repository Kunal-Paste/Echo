import {config as dotenvConfig} from 'dotenv';

dotenvConfig();

const _config = {

    MONGO_URL: process.env.MONGO_URL

}

export default _config;