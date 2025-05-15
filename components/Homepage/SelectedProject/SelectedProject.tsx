import { GridWrapper } from "@/components/Shared/GridWrapper";
import { SectionTitle } from "@/components/Shared/SectionTitle";
import { SelectedProjectList } from "./SelectedProjectList";

export const SelectedProject = () => {
  return (
    <>
      <GridWrapper>
        <div className="col-span-12 md:col-span-2">
          <SectionTitle className="has-line font-medium">
            Selected <span className="block ps-10">Project</span>
          </SectionTitle>
        </div>
        <div className="col-span-12 md:col-span-10">
          <div className="project-wrapper">
            <GridWrapper className="pt-0 pb-0">
              <SelectedProjectList></SelectedProjectList>
            </GridWrapper>
          </div>
        </div>
      </GridWrapper>
    </>
  );
};
