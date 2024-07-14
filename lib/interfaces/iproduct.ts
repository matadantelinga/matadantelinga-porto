interface ImageFormat {
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

interface ImageAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    large: ImageFormat;
    small: ImageFormat;
    medium: ImageFormat;
    thumbnail: ImageFormat;
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

export interface IImageData {
  id: number;
  attributes: ImageAttributes;
}

export interface IProductImage {
  data: IImageData[];
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
  type: string;
  room: string;
  style: string;
  price_total: string;
  image: IProductImage;
  threed_mockup: { data: null };
  before_after: { data: null };
  price_detail: IPriceDetail[];
}

export interface IProduct {
  id: number;
  attributes: IProductAttributes;
}
