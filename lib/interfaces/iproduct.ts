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

// Product Detail

export interface IProductPriceDetail {
  id: number;
  title: string;
  description: string;
  price: string;
}

export interface IIProdDetailImageFormats {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
}

export interface IProdDetailImageAttr {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    large: IIProdDetailImageFormats;
    small: IIProdDetailImageFormats;
    medium: IIProdDetailImageFormats;
    thumbnail: IIProdDetailImageFormats;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null;
  createdAt: string;
  updatedAt: string;
}

export interface IProdDetailImage {
  id: number;
  attributes: IProdDetailImageAttr;
}

export interface IProductDetail {
  id: number;
  attributes: {
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
      data: IProdDetailImage[];
    };
    design_mockup: {
      data: IProdDetailImage[];
    };
    before_after: {
      data: IProdDetailImage[];
    };
    price_detail: IProductPriceDetail[];
  };
}
