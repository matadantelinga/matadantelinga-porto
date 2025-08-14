"use client";
import { ColWrapper } from "@/components/Shared/ColWrapper";
import { GridWrapper } from "@/components/Shared/GridWrapper";
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

  if (isLoading) return <p>Loading...</p>;
  if (!project) return <p>Project not found</p>;

  return (
    <>
      <SectionWrapper>
        <GridWrapper>
          <ColWrapper>
            <div style={{ display: "flex", gap: "1rem" }}>
              {project.images.map((img) => (
                <img
                  key={img.id}
                  src={`/${img.url}`}
                  alt={project.name}
                  width={300}
                />
              ))}
            </div>
          </ColWrapper>
          <ColWrapper>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
          </ColWrapper>
        </GridWrapper>
      </SectionWrapper>
    </>
  );
};

export default PortofolioDetailPage;
