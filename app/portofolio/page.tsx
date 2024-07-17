import Basecontent from "@/components/basecontent";
import { PageBanner } from "@/components/Shared/Pagebanner";

export default function PortofilioPage() {
  return (
    <>
      <Basecontent>
        <PageBanner
          pageBannerTitle="Cari desain sesuai keinginan mu"
          imageUrl="/images/banner-portofolio.png"
        ></PageBanner>
        <section className="wrapper py-10">Portofolio</section>
      </Basecontent>
    </>
  );
}
