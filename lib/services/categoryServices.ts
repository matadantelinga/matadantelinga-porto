import { IProductQueryParams } from "../interfaces/icategory";
import { getData } from "../services";

export async function getRoomCategoryFilter(categoryName: string) {
  return await getData(`/rooms?filters[slug]=${categoryName}&populate=deep`);
}

export async function getAllRoomCategory(params: IProductQueryParams) {
  return await getData(
    `/rooms?pagination[pageSize]=${params.size}&populate=deep`
  );
}

export async function getAllTypesCategory() {
  return await getData(`/types`);
}

export async function getAllRoomsCategory() {
  return await getData(`/rooms`);
}

export async function getAllStylesCategory() {
  return await getData(`/styles`);
}
