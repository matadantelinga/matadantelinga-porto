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
      <div className="design-accordion text-white">
        <Accordion type="single" collapsible>
          {accordionItems?.map((item, index) => (
            <React.Fragment key={item.id}>
              <div className="design-accordion__item py-2">
                <div className="numbering yellow-opac big">{index + 1}</div>
                <div className="design-accordion__item-content">
                  <AccordionItem value={`item${item.id}`}>
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    <AccordionContent>
                      <div
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      ></div>
                    </AccordionContent>
                  </AccordionItem>
                </div>
              </div>
            </React.Fragment>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default DreamStepper;
