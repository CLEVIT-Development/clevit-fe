"use client";

import { forwardRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import type { ComponentPropsWithoutRef, RefObject } from "react";

import styles from "./styles.module.css";

type Props = ComponentPropsWithoutRef<"div">;

const interactiveGradientMovement = (ref: RefObject<HTMLDivElement | null>) => {
  const interBubble = ref.current;

  if (!interBubble) return;

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  const smoothness = 20;

  const move = () => {
    currentX += (targetX - currentX) / smoothness;
    currentY += (targetY - currentY) / smoothness;

    if (interBubble?.style) {
      interBubble.style.transform = `translate(${Math.round(currentX)}px, ${Math.round(currentY)}px)`;
    }

    requestAnimationFrame(move);
  };

  const handleMouseMove = (event: MouseEvent) => {
    targetX = event.clientX;
    targetY = event.clientY;
  };

  document.addEventListener("mousemove", handleMouseMove);

  move();

  return () => {
    document.removeEventListener("mousemove", handleMouseMove);
  };
};

export const Gradient = forwardRef<HTMLDivElement, Props>(({ children, ...defaultProps }, ref) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const interBubble = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(300);

  useEffect(() => {
    const cleanup = interactiveGradientMovement(interBubble);

    return cleanup;
  }, []);

  useLayoutEffect(() => {
    const updateHeight = () => {
      const calculatedHeight = contentRef.current?.clientHeight || 300; // Default to prevent layout shift

      setHeight(calculatedHeight);
    };

    const observer = new ResizeObserver(updateHeight);

    if (contentRef.current) observer.observe(contentRef.current);

    updateHeight();

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      {...defaultProps}
      className="w-full max-h-screen desktop:max-h-[600px]"
      style={{
        height: `${height}px`,
      }}
    >
      <div className={styles.gradientBackground}>
        <div className="absolute top-0 left-0 z-10 w-full">
          <div ref={contentRef}>{children}</div>
          <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
            <defs>
              <filter id="goo">
                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                  result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
        </div>
        <div className={styles.gradientsContainer}>
          <div className={styles.g1}></div>
          <div className={styles.g2}></div>
          <div className={styles.g3}></div>
          <div className={styles.g4}></div>
          <div className={styles.g5}></div>
          <div className={styles.interactive} ref={interBubble}></div>
        </div>
      </div>
    </div>
  );
});

Gradient.displayName = "Gradient";
