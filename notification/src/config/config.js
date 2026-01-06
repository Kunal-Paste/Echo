import {config as dotenvConfig} from 'dotenv';

dotenvConfig();

const _config = {
    CLIENT_ID:process.env.CLIENT_ID,
    CLIENT_SECRET:process.env.CLIENT_SECRET,
    REFRESH_TOKEN:process.env.REFRESH_TOKEN,
    EMAIL_USER:process.env.EMAIL_USER,
    JWT_SECRET_KEY:process.env.JWT_SECRET_KEY,
    MONGO_URL:process.env.MONGO_URL,
}

export default Object.freeze(_config);