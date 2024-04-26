import type { ComponentPropsWithoutRef } from "react";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { forwardRef } from "react";
import type { RefObject } from "react";

import styles from "./styles.module.css";

//TODO: add prop values for interactiveMovement: boolean,fix interactive handler to work if mouse movement is in container.

interface Props extends ComponentPropsWithoutRef<"div"> {}

const interactiveGradientMovement = (ref: RefObject<HTMLDivElement | null>) => {
  const interBubble = ref.current;

  if (!interBubble) {
    return;
  }

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  const smoothness = 20;

  function move() {
    currentX += (targetX - currentX) / smoothness;
    currentY += (targetY - currentY) / smoothness;

    if (interBubble?.style) {
      interBubble.style.transform = `translate(${Math.round(currentX)}px, ${Math.round(currentY)}px)`;
      requestAnimationFrame(() => {
        move();
      });
    }
  }

  window.addEventListener("mousemove", (event) => {
    targetX = event.clientX;
    targetY = event.clientY;
  });

  move();
};

export const Gradient = forwardRef<HTMLDivElement, Props>(({ children, ...defaultProps }, ref) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const interBubble = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    interactiveGradientMovement(interBubble);
  }, []);

  useEffect(() => {
    const checkHeightChange = () => {
      const currentHeight = contentRef.current?.clientHeight;

      setHeight(currentHeight);
    };

    checkHeightChange();

    const observer = new ResizeObserver(checkHeightChange);

    contentRef.current && observer.observe(contentRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} {...defaultProps} className="w-full" style={{ height: `${height}px` }}>
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
