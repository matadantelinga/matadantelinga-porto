import { IProductQueryParams } from "../interfaces/icategory";
import { getData } from "../services";

export const getAllProducts = async (params: IProductQueryParams) => {
  const filters = [];

  if (params.room) {
    filters.push(`filters[room]=${params.room}`);
  }
  if (params.type) {
    filters.push(`filters[type]=${params.type}`);
  }
  if (params.style) {
    filters.push(`filters[style]=${params.style}`);
  }

  const filterString = filters.length > 0 ? `&${filters.join("&")}` : "";
  const url = `/products?pagination[pageSize]=${params.size}${filterString}&populate=*`;

  return await getData(url);
};
