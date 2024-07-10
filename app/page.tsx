import DreamDesign from "@/components/Homepage/DreamDesign/DreamDesign";
import MainSlider from "@/components/Homepage/MainSlider";
import RoomDesign from "@/components/Homepage/RoomDesign/RoomDesign";
import SearchMain from "@/components/Homepage/SearchMain";
import Basecontent from "@/components/basecontent";

export default function Home() {
  return (
    <div className="relative">
      <Basecontent>
        <section className="relative">
          <MainSlider />
          <SearchMain />
        </section>
        <section className="wrapper py-10">
          <RoomDesign />
        </section>
        <section className="bg-black">
          <div className="wrapper py-10">
            <DreamDesign />
          </div>
        </section>
      </Basecontent>
    </div>
  );
}
