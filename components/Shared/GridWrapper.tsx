import React, { ReactNode } from "react";
import classNames from "classnames";

interface GridWrapperProps {
  children: ReactNode;
  className?: string;
}

export const GridWrapper: React.FC<GridWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={classNames("w-full py-10 grid grid-cols-12 gap-4", className)}
    >
      {children}
    </div>
  );
};
