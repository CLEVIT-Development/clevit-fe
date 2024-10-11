import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, XIcon } from "react-share";

import { blogsConstants } from "@/assets/constants/blogs.constants";
import ImagePlaceholder from "@/assets/images/ImagePlaceholder.jpg";
import FacebookIcon from "@/assets/vectors/Facebook.svg?react";
import LinkedInIcon from "@/assets/vectors/Linkedin.svg?react";
import useBlog from "@/common/hooks/useBlog";
import useOrigin from "@/common/hooks/useOrigin.ts";
import Section from "@/common/templates/Section.tsx";
import BlogCard from "@/shared/ui/BlogCard/BlogCard";

interface SingleBlogPageProps {
  blogId: string;
}

const SingleBlogSection = ({ blogId }: SingleBlogPageProps) => {
  const { getBlogById, blogData } = useBlog();
  const origin = useOrigin();
  const { pathname } = useLocation();

  useEffect(() => {
    getBlogById(blogId);
  }, [blogId]);

  if (!blogData) {
    return null;
  }

  const { title, content, image } = blogData;

  return (
    <Section className="items-start desktop:max-w-[80%]">
      <img
        loading="lazy"
        className="w-[335px] h-[220px] desktop:w-[1110px] desktop:h-[550px]  lg:flex rounded-[20px] bg-[#D9D9D9] object-cover"
        alt={title}
        src={image || ImagePlaceholder}
      />
      <h1 className="text-3xl desktop:max-w-[80%]">{title}</h1>
      <p className="text-base desktop:max-w-[80%]" dangerouslySetInnerHTML={{ __html: content }} />

      <div className="flex space-x-2 items-center justify-center">
        <span className="text-lg">Share this</span>
        <FacebookShareButton url={origin + pathname}>
          <FacebookIcon className="w-10 h-10" />
        </FacebookShareButton>
        <LinkedinShareButton url={origin + pathname}>
          <LinkedInIcon className="w-10 h-10" />
        </LinkedinShareButton>
        <TwitterShareButton url={origin + pathname}>
          <XIcon className="w-10 h-10 rounded-full [&>rect]:fill-[#55606A]" />
        </TwitterShareButton>
      </div>
      <div className="mt-40">
        <h2 className="text-lg font-bold">More Posts</h2>
        <div className="flex desktop:flex-row flex-col gap-6 mt-7">
          {blogsConstants.slice(0, 3).map((blog) => (
            <BlogCard {...blog} className="shadow-none" />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default SingleBlogSection;
