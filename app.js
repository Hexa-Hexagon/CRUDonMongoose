const express = require('express');
const model = require('./modles/');

const app = express();
app.use(express.json());

app.get('/', async(req, res) => {
    try {
        res.json("Result");
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = app;