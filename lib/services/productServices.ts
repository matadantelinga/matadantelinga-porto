import { IProductQueryParams } from "../interfaces/icategory";
import { getData } from "../services";

export const getAllProducts = async (params: IProductQueryParams) => {
  return await getData(
    `/products?pagination[pageSize]=${params.size}&populate=*`
  );
};
