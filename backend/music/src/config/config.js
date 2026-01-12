import {config as dotenvConfig} from 'dotenv';

dotenvConfig();

const _config = {

    MONGO_URL: process.env.MONGO_URL,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    IMAGEKIT_PUBLICKEY: process.env.IMAGEKIT_PUBLICKEY,
    IMAGEKIT_PRIVATEKEY: process.env.IMAGEKIT_PRIVATEKEY,
    IMAGEKIT_URL_ENDPOINT: process.env.IMAGEKIT_URL_ENDPOINT,

}

export default Object.freeze(_config);