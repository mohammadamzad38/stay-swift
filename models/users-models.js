import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema({
  name: {
    require: true,
    type: String,
  },
  email: {
    require: true,
    type: String,
  },
  password: {
    require: true,
    type: String,
  },
  image: {
    require: true,
    type: String,
  },
});

export const usersModel =
  mongoose.models.users ?? mongoose.model("users", usersSchema);
