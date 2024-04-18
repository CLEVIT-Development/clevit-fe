import Pointer from "@/assets/vectors/Pointer.svg?react";
import Button from "@/atom/Button.tsx";
import { EButtonVariant } from "@/types/variant.types.ts";

const RequestQuoteSection = () => {
  return (
    <section className="bg-quoteGradient rounded-[10px] md:py-[84px] xs:py-6 md:px-[46px] md:mx-0 xs:-mx-5 flex md:flex-row xs:flex-col items-center justify-center md:space-x-[73px] mb-24">
      <div className="flex md:flex-row xs:flex-col space-x-3 md:items-end xs:items-center">
        <p className="text-white font-medium text-[32px] text-center">
          Let's build your dream project
        </p>
        <Pointer className="md:rotate-0 md:scale-100 xs:rotate-[130deg] xs:scale-[.6]" />
      </div>
      <Button variant={EButtonVariant.Outlined}>Request a Quote</Button>
    </section>
  );
};

export default RequestQuoteSection;
