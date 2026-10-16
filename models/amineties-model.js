import mongoose, { Schema } from "mongoose";

const emenitiesSchema = new Schema({
  name: {
    require: true,
    type: String,
  },
  price: {
    require: true,
    type: Number,
  },
  instructions: {
    require: true,
    type: String,
  },
  hours: {
    require: true,
    type: String,
  },
});

export const emenitiesModel =
  mongoose.models.ameneties ?? mongoose.model("emenities", emenitiesSchema);
