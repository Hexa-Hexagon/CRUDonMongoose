const express = require('express');
const Model = require('./modles/');

const app = express();
app.use(express.json());

app.get('/', async(req, res) => {
    try {
        const user = await Model.user.find();
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
})
app.get('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const user = await Model.user.findById(id);
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
})
app.post('/', async(req, res) => {
    try {
        const user = await Model.user.create(req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
})
app.put('/', async(req, res) => {
    try {
        const user = req.body;
        if (!user._id) {
            res.status(400).json("Id is absent");
        }
        const updatedUser = await Model.user.findByIdAndUpdate(user._id, user, { new: true });
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json(error);
    }
})
app.delete('/:id', async(req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(400).json("Id is absent");
        }
        const user = await Model.user.findByIdAndDelete(id);
        res.json(user);
    } catch (error) {
        res.status(500).json(error);
    }
})
module.exports = app;