"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import React from "react";

export default function DreamStepper() {
  return (
    <>
      <div className="design-stepper text-white">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-blue-500">01 Konsultasi</AccordionTrigger>
            <AccordionContent className="bg-red-200">
              Tim akan mengirimkan desain beserta penawaran harga sesuai desain yang sudah OK, dan melakukan pembayaran 50% dari harga penawaran.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>02 Survey Lokasi</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>03 Desain</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}
