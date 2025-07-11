import mongoose from "mongoose";

//1 - Create a schema for the Note model
//2 - Define the structure of the Note document

const noteSchema = new mongoose.Schema(
  {
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
},
{timestamps: true} //createdAt, updatedAt
);


const Note = mongoose.model("Note", noteSchema);

export default Note;