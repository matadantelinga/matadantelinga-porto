import React, { ReactNode } from "react";
import classNames from "classnames";

interface GridWrapperProps {
  children: ReactNode;
  className?: string;
  padding?: string;
}

export const GridWrapper: React.FC<GridWrapperProps> = ({
  children,
  className,
  padding = "py-10", // Default padding, pass another value if want to customize
}) => {
  return (
    <div
      className={classNames(
        "w-full grid grid-cols-12 gap-4",
        padding,
        className
      )}
    >
      {children}
    </div>
  );
};
