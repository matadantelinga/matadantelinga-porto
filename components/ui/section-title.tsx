"use client";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@/lib/utils";

export const sectionTitleVariants = cva("font-bold", {
  variants: {
    color: {
      black: "text-black",
      white: "text-white",
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
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof sectionTitleVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(sectionTitleVariants(), className)}
    {...props}
  />
));

SectionTitle.displayName = "SectionTitle";

export { SectionTitle };
