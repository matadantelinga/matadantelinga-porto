import React from "react";
import { SectionTitle } from "./SectionTitle";
import { GridWrapper } from "./GridWrapper";

interface IStaticContentProps {
  title: string;
  content: string;
}

export const StaticContent: React.FC<IStaticContentProps> = ({
  title,
  content,
}) => {
  return (
    <>
      <section className="wrapper py-10">
        <SectionTitle className="mb-4">{title}</SectionTitle>
        <GridWrapper>
          <div className="col-span-12">
            <div className="terms-content">
              <div
                dangerouslySetInnerHTML={{
                  __html: content.replace(/<p>&nbsp;<\/p>/g, ""),
                }}
              ></div>
            </div>
          </div>
        </GridWrapper>
      </section>
    </>
  );
};
