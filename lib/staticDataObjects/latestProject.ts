import { ePortoflioType, ePortofolioRoom } from "../enums/ePortofolio";

export interface ILatestProjectMenu {
  id: number;
  icon: string;
  label: string;
  isActive: boolean;
  type: "room" | "type" | "style";
  value: string;
}

export const StaticLatestProjectMenu: ILatestProjectMenu[] = [
  {
    id: 1,
    icon: "/icons/icon-proj-kitchen.svg",
    label: "Kitchen Set",
    isActive: false,
    type: "room",
    value: ePortofolioRoom.KITCHEN,
  },
  {
    id: 2,
    icon: "/icons/icon-proj-apart.svg",
    label: "Apartment",
    isActive: false,
    type: "type",
    value: ePortoflioType.APARTMENT,
  },
  {
    id: 3,
    icon: "/icons/icon-proj-house.svg",
    label: "Rumah",
    isActive: false,
    type: "type",
    value: ePortoflioType.HOME,
  },
  {
    id: 4,
    icon: "/icons/icon-proj-cabinet.svg",
    label: "Walk-in Closet",
    isActive: false,
    type: "room",
    value: ePortofolioRoom.WALKINCLOSET,
  },
  {
    id: 5,
    icon: "/icons/icon-proj-office.svg",
    label: "Office",
    isActive: false,
    type: "type",
    value: ePortoflioType.OFFICE,
  },
];
