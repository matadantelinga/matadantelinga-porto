"use client";
import { Accordion, AccordionContent } from "@/components/ui/accordion";
import { staticDreamDesignStepper } from "@/lib/staticDataObjects/designStepper";
import { AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import React from "react";

export default function DreamStepper() {
  return (
    <>
      <div className="design-stepper">
        <ol>
          {staticDreamDesignStepper.map((item, index) => (
            <React.Fragment key={index}>
              <li className="text-c-white">
                <Accordion type="multiple">
                  <AccordionItem value="">
                    <AccordionTrigger>
                      <div className="title">
                        {index + 1}. {item.title}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="desc">{item.desc}</div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
            </React.Fragment>
          ))}
        </ol>
      </div>
    </>
  );
}
