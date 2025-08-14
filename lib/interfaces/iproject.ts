export interface IProjectCategory {
  id: number;
  name: string;
}

export interface IProjectImage {
  id: number;
  url: string;
}

export interface IProjectItem {
  name: string;
  images: IProjectImage[];
  id: number;
  description: string;
  category: IProjectCategory;
  slug: string;
}
