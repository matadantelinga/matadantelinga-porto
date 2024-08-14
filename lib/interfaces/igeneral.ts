export interface ImageFormats {
  small?: {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
  };
  thumbnail?: {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
  };
}

export interface ImageAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormats | null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ImageData {
  id: number;
  attributes: ImageAttributes;
}

export interface Image {
  data: ImageData;
}

export interface iLogoAttributes {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: any | null;
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

export interface iLogoData {
  id: number;
  attributes: iLogoAttributes;
}

export interface iLogo {
  data: iLogoData;
}

export interface iGeneralInfo {
  title: string;
  information: string;
  copyright: string;
  whatsapp: string;
  instagram: string;
  facebook: string | null;
  youtube: string | null;
  tokopedia: string;
  shopee: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  seo: any | null;
  logo: iLogo;
}

export interface IPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface IPaginationInfo {
  startPage: number;
  endPage: number;
  hasPrevious: boolean;
  hasNext: boolean;
}

export interface IStaticPageContent {
  id: number;
  attributes: {
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: {
      data: any; // Adjust type if you have more specific information about the `data` field
    };
  };
}
