import dotenv from 'dotenv';

dotenv.config();

export default {
    mongo:{
        URL: process.env.MONGO_URL
    }
}