import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required"
  },
  createAt: {
    type: Date,
    Default: Date.now
  }
});

const model = mongoose.model("Comment", CommentSchema);
export default model;
