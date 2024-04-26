import type { ForwardedRef } from "react";
import { forwardRef } from "react";

import Messages from "@/assets/vectors/Messages.svg?react";
import { Gradient } from "@/shared/gradient/Gradient.tsx";
import Button from "@/shared/ui/Button.tsx";

const Heading = forwardRef((_, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <Gradient ref={ref}>
      <div className="flex flex-col items-center text-center desktop:pb-20 desktop:pt-[240px] xs:pb-6 xs:pt-[125px] xs:px-[30px]">
        <h1 className="text-white desktop:text-3xl xs:text-lg xs:font-semibold">
          Web and Mobile App Development Company
        </h1>
        <p className="text-white text-center desktop:max-w-[80%] desktop:text-lg xs:text-base desktop:mt-4 desktop:mb-9 xs:mt-6 xs:mb-11">
          Clevit provides a comprehensive suite of web, mobile, and AI solutions to help your
          business evolve and fuel innovation.
        </p>
        <Button className="xs:flex desktop:hidden" prefix={<Messages />}>
          Let's Talk
        </Button>
        <Button className="xs:hidden desktop:flex">Request a Quote</Button>
      </div>
    </Gradient>
  );
});

export default Heading;
