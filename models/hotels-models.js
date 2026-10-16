import mongoose, { Schema } from "mongoose";

const hotelSchema = new Schema({
  name: {
    require: true,
    type: String,
  },
  address1: {
    require: true,
    type: String,
  },
  airportCode: {
    require: true,
    type: String,
  },
  city: {
    require: true,
    type: String,
  },
  countryCode: {
    require: true,
    type: String,
  },
  heighRate: {
    require: true,
    type: Number,
  },
  lowRate: {
    require: true,
    type: Number,
  },
  propertyCategory: {
    require: true,
    type: String,
  },
  stateProvinceCode: {
    require: false,
    type: String,
  },
  thumbNailUrl: {
    require: false,
    type: String,
  },
  gallery: {
    require: false,
    type: Array,
  },
  overview: {
    require: false,
    type: String,
  },
  amenities: {
    require: false,
    type: Array,
  },
});
export const hotelModel =
  mongoose.models.hotels ?? mongoose.model("hotels", hotelSchema);
