"use client";
import React from "react";
import clsx from "clsx";

// Define the interface for the component props
interface SectionTitleProps extends React.ComponentPropsWithoutRef<"h2"> {
  color?: "black" | "white";
  fontSize?: "36px" | "48px"; // You can add more sizes if needed
}

// Create the SectionTitle component
const SectionTitle = React.forwardRef<HTMLHeadingElement, SectionTitleProps>(
  ({ className, color = "black", fontSize = "36px", ...props }, ref) => {
    // Map color and fontSize props to Tailwind classes
    const colorClass = color === "white" ? "text-white" : "text-black";
    const fontSizeClass = fontSize === "48px" ? "text-5xl" : "text-4xl";

    return (
      <h2
        ref={ref}
        className={clsx(
          colorClass,
          fontSizeClass,
          className,
          "font-bold section-title section-title"
        )}
        {...props}
      />
    );
  }
);

// Set display name for debugging
SectionTitle.displayName = "SectionTitle";

export { SectionTitle };
