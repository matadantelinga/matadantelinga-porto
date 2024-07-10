import { getData } from "../services";

export const getLocations = async () => {
  return await getData(`/our-area?populate=deep`);
};
