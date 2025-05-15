import { ProjectCard } from "@/components/Shared/ProjectCard";
import { Projects } from "@/lib/staticDataObjects/projects";
import React from "react";

export const SelectedProjectList = () => {
  return (
    <>
      {Projects.map((proj, index) => (
        <React.Fragment key={proj.id}>
          <div
            className={`col-span-12 ${
              index % 3 === 0 ? "md:col-span-5" : "md:col-span-7"
            }`}
          >
            <ProjectCard project={proj}></ProjectCard>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};
