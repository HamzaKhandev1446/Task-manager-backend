const Task = require("../models/task.model"); // Adjusted to directly import Task

const createTask = async (req, res) => {
  try {
    const { title, description, status, dueDate } = req.body;
    const task = new Task({ title, description, status, dueDate });

    const savedTask = await task.save();
    res.status(201).json({
      message: "Task created successfully",
      task: savedTask,
    });
  } catch (error) {
    console.error("Error processing task data:", error);
    res.status(500).json({ message: "Error creating task", error });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const { title, status, dueDate } = req.query;
    const query = {};

    if (title) {
      query.title = { $regex: title, $options: "i" };
    }

    if (status) {
      query.status = status;
    }

    if (dueDate) {
      query.dueDate = { $lte: new Date(dueDate) };
    }
    const tasks = await Task.find(query);

    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks", error });
  }
};

const getTask = async (req, res) => {
  try {
    const id = req.params.id;
    const tasks = await Task.find({ _id: id });
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks", error });
  }
};

const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: "Error fetching tasks", error });
  }
};

module.exports = { createTask, getAllTasks, getTask, updateTask };
