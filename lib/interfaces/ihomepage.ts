import { Image, ImageData } from "./igeneral";

export interface IDesignRoom {
  id: number;
  main_title: string;
  title: string;
  link: string;
  link_label: string;
  image: Image;
}

export interface IDreamDesign {
  id: number;
  main_title: string;
}

interface ItemSliderDreamImage {
  data: ImageData;
}

export interface ItemSliderDreamItem {
  id: number;
  title: string;
  description: string;
}

export interface ItemSliderDream {
  id: number;
  image: ItemSliderDreamImage;
  item: ItemSliderDreamItem[];
}

export interface ItemWhyImage {
  data: ImageData;
}

export interface ItemWhy {
  id: number;
  title: string;
  description: string;
  image: ItemWhyImage;
}

export interface IWhyUs {
  id: number;
  main_title: string | null;
  item_why: ItemWhy[];
}

export interface IHomepageContent {
  title: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  design_room: IDesignRoom;
  dream_design: IDreamDesign;
  item_slider_dream: ItemSliderDream[];
  why_us: IWhyUs;
}
