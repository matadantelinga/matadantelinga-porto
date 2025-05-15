import classNames from "classnames";
import React, { ReactNode } from "react";

interface ColWrapperProps {
  children: ReactNode;
  className?: string;
  padding?: string;
}

export const ColWrapper: React.FC<ColWrapperProps> = ({
  children,
  className,
}) => {
  return <div className={classNames("col-span-12", className)}>{children}</div>;
};
