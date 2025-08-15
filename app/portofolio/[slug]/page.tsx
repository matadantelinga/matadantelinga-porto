"use client";
import { ImageSlider } from "@/components/Portofolio/ImageSlider";
import { ColWrapper } from "@/components/Shared/ColWrapper";
import { GridWrapper } from "@/components/Shared/GridWrapper";
import { LoaderSpinner } from "@/components/Shared/LoaderSpinner";
import { SectionTitle } from "@/components/Shared/SectionTitle";
import { SectionWrapper } from "@/components/Shared/SectionWrapper";
import { fetchProjectBySlug } from "@/lib/services/projectService";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const PortofolioDetailPage = () => {
  const { slug } = useParams();

  const { data: project, isLoading } = useQuery({
    queryKey: ["project", slug],
    queryFn: () => fetchProjectBySlug(slug as string),
  });

  if (isLoading) return <LoaderSpinner />;
  if (!project) return <p>Project not found</p>;

  return (
    <>
      <SectionWrapper>
        <GridWrapper>
          <ColWrapper>
            <div className="detail-images-wrapper">
              <ImageSlider images={project.images} />
            </div>
          </ColWrapper>
          <ColWrapper>
            <SectionTitle title={project.name}>{project.name}</SectionTitle>
            <p>{project.description}</p>
          </ColWrapper>
        </GridWrapper>
      </SectionWrapper>
    </>
  );
};

export default PortofolioDetailPage;
