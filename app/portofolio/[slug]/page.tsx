import Basecontent from "@/components/basecontent";
import { PortfolioDetailIndex } from "@/components/Portofolio/PortofolioDetailIndex";

const PortfolioDetail = ({
  params,
}: {
  params: { slug: string; locale: string };
}) => {
  return (
    <Basecontent>
      <PortfolioDetailIndex slug={params.slug}></PortfolioDetailIndex>
    </Basecontent>
  );
};

export default PortfolioDetail;
