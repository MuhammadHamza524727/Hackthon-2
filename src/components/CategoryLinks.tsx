import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CategoryLinks = () => {
  return (
    <>
      <div className=" sm:hidden md:block mx-auto my-0 max-w-screen-2xl sm:px-6 md:px-48 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div>
            <h2 className="font-bold text-lg mb-4">Icons</h2>
            <ul className="space-y-2 text-gray-600">
              <li>Air Force 1</li>
              <li>Huarache</li>
              <li>Air Max 90</li>
              <li>Air Max 95</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">Shoes</h2>
            <ul className="space-y-2 text-gray-600">
              <li>All Shoes</li>
              <li>Custom Shoes</li>
              <li>Jordan Shoes</li>
              <li>Running Shoes</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">Clothing</h2>
            <ul className="space-y-2 text-gray-600">
              <li>All Clothing</li>
              <li>Modest Wear</li>
              <li>Hoodies & Pullovers</li>
              <li>Shirts & Tops</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg mb-4">Kids</h2>
            <ul className="space-y-2 text-gray-600">
              <li>Infant & Toddler Shoes</li>
              <li>Kids Shoes</li>
              <li>Kids Jordan Shoes</li>
              <li>Kids Basketball Shoes</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="sm:block md:hidden mx-auto my-0 max-w-screen-2xl sm:px-6 md:px-48 py-8">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Icons</AccordionTrigger>
            <AccordionContent>Air Force 1</AccordionContent>
            <AccordionContent>Huarache</AccordionContent>
            <AccordionContent>Air Max 90</AccordionContent>
            <AccordionContent>Air Max 95</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Shoes</AccordionTrigger>
            <AccordionContent>All Shoes</AccordionContent>
            <AccordionContent>Custom Shoes</AccordionContent>
            <AccordionContent>Jordan Shoes</AccordionContent>
            <AccordionContent>Running Shoes</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Clothing</AccordionTrigger>
            <AccordionContent>All Clothing</AccordionContent>
            <AccordionContent>Modest Wear</AccordionContent>
            <AccordionContent>Hoodies & Pullovers</AccordionContent>
            <AccordionContent>Shirts & Tops</AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Clothing</AccordionTrigger>
            <AccordionContent>Infant & Toddler Shoes</AccordionContent>
            <AccordionContent>Kids Shoes</AccordionContent>
            <AccordionContent>Kids Jordan Shoes</AccordionContent>
            <AccordionContent>Kids Basketball Shoes</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default CategoryLinks;
