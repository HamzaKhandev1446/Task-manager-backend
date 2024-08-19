const Task = require("../models/task.model"); // Adjusted to directly import Task

const createTask = async (req, res) => {
  try {
    const { title, description, status, dueDate } = req.body;
    const task = new Task({ title, description, status, dueDate });

    const savedTask = await task.save();
    res.status(201).json({
      message: "Task created successfully",
      task: savedTask
    });
  } catch (error) {
    console.error("Error processing task data:", error);
    res.status(500).json({ message: "Error creating task", error });
  }
};

module.exports = { createTask };
