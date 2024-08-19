const express = require("express");

const tasksRouter = express.Router();
const { createTask } = require("../controllers/tasks.controller");

tasksRouter.post("/", createTask);

module.exports = tasksRouter;
