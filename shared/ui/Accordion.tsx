"use client";

import React, { useEffect, useRef, useState } from "react";

import ArrowIcon from "../../assets/vectors/Arrow.svg";

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // Set content height dynamically based on the content's scroll height
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [content, isOpen]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full border border-gray-100 rounded-2xl overflow-hidden">
      <div
        className="cursor-pointer flex justify-between items-center p-10"
        onClick={toggleAccordion}
      >
        <h3 className="text-base font-bold max-w-[80%]">{title} </h3>
        <span className="text-lg">
          {isOpen ? (
            <ArrowIcon className="fill-black rotate-90 h-3" />
          ) : (
            <ArrowIcon className="fill-black -rotate-90 h-3" />
          )}
        </span>
      </div>

      {/* Content wrapper with dynamic height */}
      <div
        style={{
          maxHeight: isOpen ? `${contentHeight}px` : "0px",
        }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <div ref={contentRef} className="p-10 bg-[#F5F5F5]">
          <p className="text-[#2E2E2E] text-base leading-8">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
