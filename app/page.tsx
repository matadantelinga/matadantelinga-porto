import Basecontent from "@/components/basecontent";
import MainSlider from "@/components/MainSlider";
import RoomDesign from "@/components/RoomDesign";
import SearchMain from "@/components/SearchMain";

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
    )
}
