import { ImageData } from "./igeneral";

interface ITypeAttributes {
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: {
    data: ImageData;
  };
}
interface IRoomAttributes {
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: {
    data: ImageData;
  };
}

interface IStyleAttributes {
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: {
    data: ImageData;
  };
}

export interface IPriceDetail {
  id: number;
  title: string;
  description: string;
  price: string;
}

export interface IProductAttributes {
  title: string;
  luas: string;
  timeline_project: string;
  location: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  price_total: string;
  image: {
    data: ImageData[];
  };
  design_mockup: {
    data: null;
  };
  before_after: {
    data: null;
  };
  price_detail: IPriceDetail[];
  type: {
    data: {
      id: number;
      attributes: ITypeAttributes;
    };
  };
  room: {
    data: {
      id: number;
      attributes: IRoomAttributes;
    };
  };
  style: {
    data: {
      id: number;
      attributes: IStyleAttributes;
    };
  };
}

export interface IProduct {
  id: number;
  attributes: IProductAttributes;
}
