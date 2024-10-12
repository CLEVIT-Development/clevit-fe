import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, XIcon } from "react-share";

import ImagePlaceholder from "@/assets/images/ImagePlaceholder.jpg";
import FacebookIcon from "@/assets/vectors/Facebook.svg?react";
import LinkedInIcon from "@/assets/vectors/Linkedin.svg?react";
import { useBlogContext } from "@/common/context/BlogContext.tsx";
import useBlog from "@/common/hooks/useBlog";
import useOrigin from "@/common/hooks/useOrigin.ts";
import Section from "@/common/templates/Section.tsx";
import BlogCard from "@/shared/ui/BlogCard/BlogCard.tsx";

interface SingleBlogPageProps {
  titlePath?: string;
}

const SingleBlogSection = ({ titlePath }: SingleBlogPageProps) => {
  const { getBlogByTitleName, blogData } = useBlog();
  const { lastThreeBlogs } = useBlogContext();
  const origin = useOrigin();
  const { pathname } = useLocation();

  useEffect(() => {
    if (titlePath) getBlogByTitleName(titlePath);
  }, [titlePath]);

  if (!blogData) {
    return null;
  }

  const { title, content, image } = blogData;

  return (
    <Section className="items-start desktop:max-w-[80%] px-5 desktop:px-0">
      <img
        loading="lazy"
        className="w-full max-w-[1108px] h-full max-h-[552px] aspect-auto desktop:w-[1110px]  lg:flex rounded-[20px] bg-[#D9D9D9]"
        alt={title}
        src={image || ImagePlaceholder}
      />
      <h1 className="text-2xl desktop:text-3xl desktop:max-w-[80%]">{title}</h1>

      <p className="text-md desktop:max-w-[80%]" dangerouslySetInnerHTML={{ __html: content }} />

      <div className="flex space-x-2 items-center justify-center">
        <span className="text-lg">Share this</span>
        <FacebookShareButton url={origin + pathname}>
          <FacebookIcon className="w-6 h-6 desktop:w-8 desktop:h-8" />
        </FacebookShareButton>
        <LinkedinShareButton url={origin + pathname}>
          <LinkedInIcon className="w-6 h-6 desktop:w-8 desktop:h-8" />
        </LinkedinShareButton>
        <TwitterShareButton url={origin + pathname}>
          <XIcon className="w-6 h-6 desktop:w-8 desktop:h-8 rounded-full [&>rect]:fill-[#55606A]" />
        </TwitterShareButton>
      </div>
      <div className="w-full mt-40">
        <h2 className="text-lg font-bold">More Posts</h2>
        <div className="flex items-center justify-center md:justify-between desktop:justify-start flex-wrap gap-6 mt-5 desktop:mt-7">
          {lastThreeBlogs.map((blog) => (
            <div className="w-full md:max-w-1/2 desktop:max-w-[410px]">
              <BlogCard {...blog} className="shadow-none" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SingleBlogSection;
