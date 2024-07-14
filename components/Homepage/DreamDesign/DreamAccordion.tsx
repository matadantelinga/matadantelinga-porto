"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ItemSliderDreamItem } from "@/lib/interfaces/ihomepage";

import React from "react";

interface IDreamStepperProps {
  accordionItems: ItemSliderDreamItem[];
}

const DreamStepper: React.FC<IDreamStepperProps> = ({ accordionItems }) => {
  return (
    <>
      <div className="design-stepper text-white">
        <Accordion type="single" collapsible>
          {accordionItems?.map((item) => (
            <React.Fragment key={item.id}>
              <AccordionItem value={`item${item.id}`}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></div>
                </AccordionContent>
              </AccordionItem>
            </React.Fragment>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default DreamStepper;
