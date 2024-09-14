import Button from "@/shared/ui/Button";
import { ButtonVariant } from "@/types/variant.types";

const BlogHeading = () => {
  return (
    <div className="w-full flex flex-col items-center text-center desktop:pb-20 desktop:pt-[240px] xs:pb-6 xs:pt-[125px] xs:px-[30px]">
      <h1 className="animate-textSlide text-white desktop:text-3xl xs:text-lg xs:font-semibold">
        What we can do for you
      </h1>
      <p className="animate-textSlide text-white text-center desktop:max-w-[45%] desktop:text-lg xs:text-base desktop:mt-4 desktop:mb-9 xs:mt-6 xs:mb-11">
        As a partner for your business, at Clevit we provide a wide range of services that target
        your business’s growth and support the development of innovative solutions.
      </p>
      <Button variant={ButtonVariant.Primary}>Contact us</Button>
    </div>
  );
};

export default BlogHeading;
