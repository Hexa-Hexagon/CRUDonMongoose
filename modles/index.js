const mongoose = require('mongoose');
const { DEV } = require('../config/index');
const DB_URL = `mongodb://${DEV.DB_HOST}:${DEV.DB_PORT}/${DEV.DB_NAME}`;

async function connect() {
    try {
        await mongoose.connect(DB_URL);
    } catch (error) {
        console.log(error);
    }
}

connect();