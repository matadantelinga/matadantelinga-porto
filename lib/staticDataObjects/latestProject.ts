export interface ILatestProjectMenu {
  id: number;
  icon: string;
  label: string;
  isActive: boolean;
}

export const StaticLatestProjectMenu: ILatestProjectMenu[] = [
  {
    id: 1,
    icon: "/icons/icon-proj-kitchen.svg",
    label: "Kitchen Set",
    isActive: true,
  },
  {
    id: 2,
    icon: "/icons/icon-proj-apart.svg",
    label: "Apartment",
    isActive: false,
  },
  {
    id: 3,
    icon: "/icons/icon-proj-house.svg",
    label: "Rumah",
    isActive: false,
  },
  {
    id: 4,
    icon: "/icons/icon-proj-cabinet.svg",
    label: "Walk-in Closet",
    isActive: false,
  },
  {
    id: 5,
    icon: "/icons/icon-proj-office.svg",
    label: "Office",
    isActive: false,
  },
];
