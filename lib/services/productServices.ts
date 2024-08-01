import { IProductQueryParams } from "../interfaces/icategory";
import { getData, getDataOpen } from "../services";

export const getAllProducts = async (params: IProductQueryParams) => {
  const filters = [];

  if (params.room) {
    filters.push(`filters[room][slug][$eq]=${params.room}`);
  }
  if (params.type) {
    filters.push(`filters[type][slug][$eq]=${params.type}`);
  }
  if (params.style) {
    filters.push(`filters[style][slug][$eq]=${params.style}`);
  }

  const filterString = filters.length > 0 ? `&${filters.join("&")}` : "";
  const url = `/products?pagination[pageSize]=${params.size}${filterString}&populate=*`;

  return await getData(url);
};

export const getProductDetail = async (slug: string) => {
  return await getDataOpen(`/slugify/slugs/product/${slug}?populate=deep`);
};
