import { GridWrapper } from "@/components/Shared/GridWrapper";
import { SectionTitle } from "@/components/Shared/SectionTitle";

const LatestProject = () => {
  return (
    <>
      <div className="w-full">
        <SectionTitle className="text-center">Proyek Terbaru Kami</SectionTitle>
      </div>
      <GridWrapper>
        <div className="col-span-3 md:col-span-2"></div>
      </GridWrapper>
    </>
  );
};

export default LatestProject;
