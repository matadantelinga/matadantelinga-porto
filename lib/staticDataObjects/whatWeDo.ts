interface IWhatWeDoItem {
  name: string;
  desc: string;
  icon: string;
}

export const WhatWeDos: IWhatWeDoItem[] = [
  {
    name: "Frontend Development",
    desc: "Angular, Ionic, NextJs",
    icon: "/icons/icon-dev.svg",
  },
  {
    name: "UI Design",
    desc: "Figma, Adobe XD",
    icon: "/icons/icon-ui.svg",
  },
  {
    name: "Logo Design",
    desc: "Adobe Photoshop, Adobe Illustrator",
    icon: "/icons/icon-design.svg",
  },
];
