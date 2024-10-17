import { Suspense, lazy, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, XIcon } from "react-share";

import ImagePlaceholder from "@/assets/images/ImagePlaceholder.jpg";
import FacebookIcon from "@/assets/vectors/Facebook.svg?react";
import LinkedInIcon from "@/assets/vectors/Linkedin.svg?react";
import { useBlogContext } from "@/common/context/BlogContext.tsx";
import useBlog from "@/common/hooks/useBlog";
import useOrigin from "@/common/hooks/useOrigin.ts";
import BlogCard from "@/shared/ui/BlogCard/BlogCard.tsx";

import BlogPreviewSkeleton from "./BlogPostPreview";
import ContentSceleton from "./ContentSceleton";

const DraftPreview = lazy(() => import("./DraftPreview"));

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

  return !blogData ? (
    <BlogPreviewSkeleton />
  ) : (
    <section className="w-full">
      <img
        loading="lazy"
        className="h-[221px] object-cover aspect-auto w-full lg:max-w-[1110px] lg:h-[552px]  lg:flex rounded-[20px] bg-[#D9D9D9]"
        alt={blogData.title}
        src={blogData.image || ImagePlaceholder}
      />
      <h1 className="mt-4 font-semibold text-[42px] text-gray-200 px-4">{blogData.title}</h1>
      <Suspense fallback={<ContentSceleton />}>
        <DraftPreview className="mt-7 overflow-y-auto " content={blogData.content} />
      </Suspense>
      <div className="flex space-x-2 items-center justify-center mt-7">
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
      <div className="w-full mt-7 lg:mt-24">
        <h2 className="text-lg font-bold">More Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5 desktop:mt-7">
          {lastThreeBlogs.map((blog) => (
            <div className="w-full md:max-w-1/2 desktop:max-w-[410px]">
              <BlogCard {...blog} className="shadow-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SingleBlogSection;
