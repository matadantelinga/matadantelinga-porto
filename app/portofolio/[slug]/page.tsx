// Example type for portfolio item
interface PortfolioItem {
  title: string;
  description: string;
  // Add other properties as needed
}

const PortfolioDetail = ({
  params,
}: {
  params: { slug: string; locale: string };
}) => {
  return (
    <div>
      <h1>DETAIL</h1>
    </div>
  );
};

export default PortfolioDetail;
