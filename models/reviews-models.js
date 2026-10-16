import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
  hotelId: {
    require: true,
    type: ObjectId,
  },
  userId: {
    require: true,
    type: ObjectId,
  },
  review: {
    require: true,
    type: String,
  },
});
export const reviewModel =
  mongoose.models.reviews ?? mongoose.model("reviews", reviewSchema);
