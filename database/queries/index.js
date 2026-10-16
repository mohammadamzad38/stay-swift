import { hotelModel } from "@/models/hotels-models";
import { replaceMongoIdnArray } from "@/utils/data-utils";

export async function getAllHotels() {
  const hotels = await hotelModel.find().lean();

  return replaceMongoIdnArray(hotels);
}
