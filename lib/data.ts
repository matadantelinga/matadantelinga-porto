import { getData } from "./services";

export const getMainBanners = async () => {
  return await getData(`/main-banners?populate=*`);
};

export const getHomePage = async () => {
  return await getData(`/home?populate=deep`);
};
