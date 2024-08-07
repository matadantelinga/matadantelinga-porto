import { PageBanner } from "../Shared/Pagebanner";
import { PortofolioList } from "./PortofolioList";

export const PortofolioIndex = () => {
  return (
    <>
      <PageBanner
        pageBannerTitle="Cari desain sesuai keinginan mu"
        imageUrl="/images/banner-portofolio.png"
      ></PageBanner>
      <PortofolioList></PortofolioList>
    </>
  );
};
