import { PageBanner } from "@/components/Shared/Pagebanner";
import { SectionTitle } from "@/components/ui/section-title";

export default function LocationPage() {
  return (
    <>
      <PageBanner
        pageBannerTitle="Pastikan lokasi berada dalam jangkauan kami"
        imageUrl="/images/banner-location.png"
      ></PageBanner>
      <section className="wrapper py-10"></section>
    </>
  );
}
