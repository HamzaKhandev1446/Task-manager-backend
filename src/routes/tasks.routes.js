const express = require("express");

const tasksRouter = express.Router();
const { createTask, getAllTasks, getTask, updateTask } = require("../controllers/tasks.controller");

tasksRouter.post("/", createTask);
tasksRouter.get("/", getAllTasks);
tasksRouter.get("/:id", getTask);
tasksRouter.patch("/:id", updateTask);

module.exports = tasksRouter;
