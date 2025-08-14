import React, { ReactNode } from "react";
import classNames from "classnames";

interface iSectionWrapperProps {
  children: ReactNode;
  className?: string;
  isMainWrapper?: boolean;
}
export const SectionWrapper: React.FC<iSectionWrapperProps> = ({
  children,
  className,
  isMainWrapper = true,
}) => {
  return (
    <>
      <section
        className={classNames(isMainWrapper ? "wrapper" : "", className)}
      >
        {children}
      </section>
    </>
  );
};
