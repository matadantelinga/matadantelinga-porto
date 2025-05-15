import { IProjectItem } from "../interfaces/iproject";

export const Projects: IProjectItem[] = [
  {
    id: 1,
    description: "Planet Dekor adalah Perusahaan Interior Design",
    name: "Planet Dekor",
    images: [
      { id: 1, url: "projects/proj-planet-01.jpg" },
      { id: 2, url: "projects/proj-planet-02.jpg" },
      { id: 3, url: "projects/proj-planet-03.jpg" },
    ],
    category: {
      id: 1,
      name: "Web Development",
    },
  },
  {
    id: 2,
    description:
      "PT. SUMI INDO KABEL .tbk adalah Perusahaan Manufactur yang memproduksi kabel",
    name: "PT. SUMI INDO KABEL .tbk",
    images: [
      { id: 1, url: "projects/portoigSumi-01.jpg" },
      { id: 2, url: "projects/portoigSumi-02.jpg" },
      { id: 3, url: "projects/portoigSumi-03.jpg" },
    ],
    category: {
      id: 1,
      name: "Branding",
    },
  },
  {
    id: 3,
    description:
      "Artam ID",
    name: "Artam.id",
    images: [
      { id: 1, url: "projects/artam1.jpg" },
    ],
    category: {
      id: 1,
      name: "Design",
    },
  },
  {
    id: 4,
    description:
      "Angkasa Pura",
    name: "PT. Angkasa Pura II",
    images: [
      { id: 1, url: "projects/ap1.jpg" },
    ],
    category: {
      id: 1,
      name: "Design",
    },
  },
];
