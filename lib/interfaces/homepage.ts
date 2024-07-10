interface ImageFormats {
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

interface ImageAttributes {
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

interface ImageData {
  id: number;
  attributes: ImageAttributes;
}

interface Image {
  data: ImageData;
}

interface DesignRoom {
  id: number;
  main_title: string;
  title: string;
  link: string;
  link_label: string;
  image: Image;
}

interface DreamDesign {
  id: number;
  main_title: string;
}

interface ItemSliderDreamImage {
  data: ImageData;
}

interface ItemSliderDreamItem {
  id: number;
  title: string;
  description: string;
}

interface ItemSliderDream {
  id: number;
  image: ItemSliderDreamImage;
  item: ItemSliderDreamItem[];
}

interface ItemWhyImage {
  data: ImageData;
}

interface ItemWhy {
  id: number;
  title: string;
  description: string;
  image: ItemWhyImage;
}

interface WhyUs {
  id: number;
  main_title: string | null;
  item_why: ItemWhy[];
}

interface Attributes {
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  design_room: DesignRoom;
  dream_design: DreamDesign;
  item_slider_dream: ItemSliderDream[];
  why_us: WhyUs;
}

interface Data {
  id: number;
  attributes: Attributes;
}

export interface HomepageContent {
  data: Data;
  meta: Record<string, unknown>;
}
