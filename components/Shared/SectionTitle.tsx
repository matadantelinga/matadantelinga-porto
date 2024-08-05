"use client";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

export const sectionTitleVariants = cva("font-bold", {
  variants: {
    color: {
      black: "text-c-black",
      white: "text-c-white",
    },
    fontSize: {
      "36px": "text-4xl", // 36px converted to Tailwind's text-4xl
    },
  },
  defaultVariants: {
    color: "black",
    fontSize: "36px",
  },
});

const SectionTitle = React.forwardRef<
  HTMLHeadingElement,
  React.ComponentPropsWithoutRef<"h2"> &
    VariantProps<typeof sectionTitleVariants>
>(({ className, color, fontSize, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(sectionTitleVariants({ color, fontSize }), className, "section-title")}
    {...props}
  />
));

SectionTitle.displayName = "SectionTitle";

export { SectionTitle };
