import mongoose, { model } from "mongoose";

const taskSchema = new mongoose.Schema({
  title:{type: String, required: true},
  description:{type: String, required: true},
  completed:{type: Boolean, required: true},
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
})

export default mongoose.model("Tasks", taskSchema);