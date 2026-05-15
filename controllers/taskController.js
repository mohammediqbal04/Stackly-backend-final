import tasks from "../models/tasks.js";

//Create
export const createTask = async (req, res) => {
  try{
    const task = await tasks.create({
      user: req.user.id,
      ...req.body
    });
    res.status(201).json(task);
  } catch(error){
    res.status(500).json({
      message: error.message,
    });
  }
};

//Get All tasks
export const getAllTasks = async (req, res) => {
  try{
    const Tasks = await tasks.find({
      user: req.user.id,
    })
    res.status(201).json(Tasks);
  } catch(error){
    res.status(500).json({
      message: error.message,
    })
  }
}

//Get by id
export const getTaskbyId = async (req, res) => {
  try{
    const Task = await tasks.findById(req.params.id);
    if(!Task){
      return res.status(404).json({
        message: "Task not found"
      });
    }
    // Verify task belongs to current user
    console.log(Task.user);
    console.log(req.user.id);
    if(Task.user.toString() !== req.user.id.toString()){
      return res.status(403).json({
        message: "Unauthorized: You can only access your own tasks"
      });
    }
    res.status(200).json(Task);
  } catch(error){
    res.status(500).json({ message: error.message})
  }
}

//Update task
export const updateTask = async (req, res) => {
  try{
    const task = await tasks.findById(req.params.id);
    if(!task){
      return res.status(404).json({
        message: "Task not found"
      });
    }
    // Verify task belongs to current user
    if(task.user.toString() !== req.user.id.toString()){
      return res.status(403).json({
        message: "Unauthorized: You can only update your own tasks"
      });
    }
    const updatedTask = await tasks.findByIdAndUpdate(req.params.id, req.body,
    {
      new: true
    });
    res.status(200).json(updatedTask);
  } catch(error){
    res.status(500).json({ message: error.message })
  }
}

//Delete task
export const deleteTask = async(req, res) => {
  try{
    const task = await tasks.findById(req.params.id);
    if(!task){
      return res.status(404).json({
        message: "Task not found"
      });
    }
    // Verify task belongs to current user
    if(task.user.toString() !== req.user.id.toString()){
      return res.status(403).json({
        message: "Unauthorized: You can only delete your own tasks"
      });
    }
    await tasks.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Task deleted successfully"})
  } catch(error){
    res.status(500).json({message: error.message })
  }
}