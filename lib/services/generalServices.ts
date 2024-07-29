import { getData } from "../services";

export async function getGeneralInfo() {
  return await getData(`/general?populate=deep`);
}
