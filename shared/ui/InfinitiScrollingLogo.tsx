import React, { type ElementType, createElement, useEffect, useRef, useState } from "react";

import { uuid } from "@tinymce/tinymce-react/lib/es2015/main/ts/Utils";

interface LogoItem {
  id: string;
  icon: ElementType;
}

interface Props {
  logos: LogoItem[];
  speed?: number;
}

const InfiniteLogoScroll: React.FC<Props> = ({ logos, speed = 1 }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"right" | "left">("right");

  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null); // ✅ Fix: useRef instead of let variable

  const duplicatedLogos = [...logos, ...logos.map((logo) => ({ ...logo, id: uuid }))];

  const animate = () => {
    if (containerRef.current && !isDragging) {
      if (scrollDirection === "right") {
        containerRef.current.scrollLeft += speed;
      } else {
        containerRef.current.scrollLeft -= speed;
      }

      if (containerRef.current.scrollLeft >= containerRef.current.scrollWidth / 2) {
        containerRef.current.scrollLeft = 0;
      } else if (containerRef.current.scrollLeft <= 0) {
        containerRef.current.scrollLeft = containerRef.current.scrollWidth / 2;
      }
    }

    animationFrameRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animate();

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDragging, scrollDirection]); // ✅ ESLint warning resolved

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;

    const x = e.pageX - (containerRef.current.offsetLeft || 0);
    const walk = (x - startX) * 2;

    containerRef.current.scrollLeft = scrollLeft - walk;

    setScrollDirection(walk > 0 ? "left" : "right");
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      className="overflow-hidden w-full relative cursor-grab active:cursor-grabbing pt-7"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <div className="flex items-center w-max">
        {duplicatedLogos.map((element, index) => (
          <div key={index} className="flex items-center justify-center h-16 w-32 mx-4">
            {createElement(element.icon, {
              className: "w-full h-full object-contain",
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteLogoScroll;
