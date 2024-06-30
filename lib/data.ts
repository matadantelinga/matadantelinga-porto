import { getData } from "./services";

export const getMainBanners = async () => {
  return await getData(`/main-banners?populate=*`);
};
