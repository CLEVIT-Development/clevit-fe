import { useNavigate } from "react-router-dom";

import { RoutePaths } from "@/app/routing/routing.constants";
import Button from "@/shared/ui/Button";
import { ButtonVariant } from "@/types/variant.types";

const BlogHeading = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex items-center desktop:text-left text-center justify-center desktop:pb-10 pt-[120px] desktop:pt-[150px] xs:pb-6 px-5">
      <div className="flex flex-col justify-center items-center">
        <h1 className="animate-textSlide text-center text-white desktop:text-3xl text-lg font-semibold desktop:w-full w-[60%]">
          What We Can Do For You
        </h1>
        <p className="animate-textSlide text-white text-center xl:max-w-[70%] desktop:text-lg xs:text-base desktop:mt-4 desktop:mb-9 xs:mt-6 xs:mb-11">
          As a partner for your business, at Clevit we provide a wide range of services that target
          your business’s growth and support the development of innovative solutions.
        </p>
        <Button variant={ButtonVariant.Primary} onClick={() => navigate(RoutePaths.ContactUs)}>
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default BlogHeading;
