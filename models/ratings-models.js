import mongoose, { Schema } from "mongoose";

const ratingsSchema = new Schema({
  hotelId: {
    require: true,
    type: ObjectId,
  },
  userId: {
    require: true,
    type: ObjectId,
  },
  ratings: {
    require: true,
    type: Number,
  },
});

export const ratingsModel =
  mongoose.models.ratings ?? mongoose.model("ratings", ratingsSchema);
