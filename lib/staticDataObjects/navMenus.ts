export interface IMenuItem {
  name: string;
  link: string;
  icon?: string;
}

export const NavMenus: IMenuItem[] = [
  {
    name: "Portofolio",
    link: "/portofolio",
  },
  {
    name: "Area Jangkauan",
    link: "/location",
  },
  {
    name: "Tanya Harga",
    link: "/ask-price",
  },
];
