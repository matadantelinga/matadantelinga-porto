import React, { ReactNode } from "react";
import classNames from "classnames";

interface GridWrapperProps {
  children: ReactNode;
  className?: string;
  padding?: string;
  gridCols?: string;
}

export const GridWrapper: React.FC<GridWrapperProps> = ({
  children,
  className,
  padding = "py-10", // Default padding, pass another value if want to customize
  gridCols = "grid-cols-12",
}) => {
  return (
    <div
      className={classNames("w-full grid  gap-4", padding, className, gridCols)}
    >
      {children}
    </div>
  );
};
