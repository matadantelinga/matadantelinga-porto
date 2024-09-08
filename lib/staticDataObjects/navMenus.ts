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
    name: "Contact",
    link: "/contact",
  },
];

export const SocialMenus: IMenuItem[] = [
  {
    name: "Instagram",
    link: "instagram.com",
    icon: "<FaInstagram></FaInstagram>",
  },
  {
    name: "LinkedIn",
    link: "linkedin.com",
    icon: "<FaLinkedin></FaLinkedin>",
  },
];
