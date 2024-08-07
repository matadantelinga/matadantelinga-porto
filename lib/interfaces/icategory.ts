import { Image } from "./igeneral";
import { IProduct } from "./iproduct";

export interface IProductData {
  data: IProduct[];
}

export interface IRoomCategoryAttributes {
  slug: string;
  title: string;
  image: Image;
  products: IProductData;
}

export interface IRoomCategory {
  attributes: IRoomCategoryAttributes;
  id: number;
}

export interface IProductQueryParams {
  size: number; // Data Size to show
  page: number; // Current page number
  room?: string;
  type?: string;
  style?: string;
}

export interface ICategorySelectOption {
  id: number;
  attributes: {
    title: string;
    slug: string;
  };
}
