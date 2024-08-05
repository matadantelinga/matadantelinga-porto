import Basecontent from "@/components/basecontent";
import { PortofolioList } from "@/components/Portofolio/PortofolioList";
import { PageBanner } from "@/components/Shared/Pagebanner";

export default function PortofilioPage() {
  return (
    <>
      <Basecontent>
        <PageBanner
          pageBannerTitle="Cari desain sesuai keinginan mu"
          imageUrl="/images/banner-portofolio.png"
        ></PageBanner>
        <section className="wrapper py-10">
          <PortofolioList></PortofolioList>
        </section>
      </Basecontent>
    </>
  );
}
