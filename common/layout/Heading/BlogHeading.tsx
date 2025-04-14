import { RoutePaths } from "../../../shared/constants/route.constants";
import { seoConfig } from "../../../shared/constants/seo.constants";
import StyledLink from "../../../shared/ui/StyledLink";
import { ButtonVariant } from "../../../types/variant.types";

const BlogHeading = () => {
  return (
    <div className="w-full flex items-center desktop:text-left text-center justify-center desktop:pb-10 pt-[120px] desktop:pt-[150px] xs:pb-6 px-5">
      <div className="flex flex-col justify-center items-center">
        <h1 className="animate-textSlide text-center text-white desktop:text-3xl text-lg font-semibold desktop:w-full w-[60%]">
          {seoConfig.blogs.h1}
        </h1>
        <p className="animate-textSlide text-white text-center xl:max-w-[70%] desktop:text-lg xs:text-base desktop:mt-4 desktop:mb-9 xs:mt-6 xs:mb-11">
          As a partner for your business, at Clevit we provide a wide range of services that target
          your business’s growth and support the development of innovative solutions.
        </p>
        <StyledLink variant={ButtonVariant.Primary} href={RoutePaths.ContactUs}>
          Contact Us
        </StyledLink>
      </div>
    </div>
  );
};

export default BlogHeading;
