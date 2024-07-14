import { PageBanner } from "@/components/Shared/Pagebanner";
import { LocationList } from "./LocationList";
import Basecontent from "@/components/basecontent";

export default function LocationPage() {
  return (
    <>
      <Basecontent>
        <PageBanner
          pageBannerTitle="Pastikan lokasi berada dalam jangkauan kami"
          imageUrl="/images/banner-location.png"
        ></PageBanner>
        <section className="wrapper py-10">
          <LocationList></LocationList>
        </section>
      </Basecontent>
    </>
  );
}
