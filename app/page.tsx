import MainSlider from "@/components/Homepage/MainSlider";
import RoomDesign from "@/components/Homepage/RoomDesign";
import SearchMain from "@/components/Homepage/SearchMain";
import Basecontent from "@/components/basecontent";

export default function Home() {
  return (
    <div className="relative">
      <Basecontent>
        <div className="relative">
          <MainSlider />
          <SearchMain />
        </div>
        <div className="wrapper">
          <RoomDesign />
        </div>
      </Basecontent>
    </div>
  );
}
