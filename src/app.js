const express = require('express');
const tasksRouter = require('./routes/tasks.routes');

const app = express();

app.use(express.json());

app.use('/api/tasks', tasksRouter)
module.exports = app;