"use client";

import { Suspense, lazy } from "react";
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, XIcon } from "react-share";

import { notFound, usePathname } from "next/navigation";

import ImagePlaceholder from "../../assets/images/ImagePlaceholder.jpg";
import FacebookIcon from "../../assets/vectors/Facebook.svg";
import LinkedInIcon from "../../assets/vectors/Linkedin.svg";
import { useBlogByTitle, useLastThreeBlogs } from "../../common/hooks/blog/blogQueries";
import useOrigin from "../../common/hooks/useOrigin";
import BlogCard from "../../shared/ui/BlogCard/BlogCard";
import BlogPreviewSkeleton from "./BlogPostPreview";
import ContentSceleton from "./ContentSceleton";

const DraftPreview = lazy(() => import("./DraftPreview"));

interface SingleBlogPageProps {
  titlePath?: string;
}

const SingleBlogSection = ({ titlePath }: SingleBlogPageProps) => {
  const { data: lastThreeBlogs } = useLastThreeBlogs();
  const { data: blogData, isLoading } = useBlogByTitle(titlePath!);
  const origin = useOrigin();
  const pathname = usePathname();

  if (!isLoading && !blogData) {
    notFound();
  }

  return !blogData ? (
    <BlogPreviewSkeleton />
  ) : (
    <section className="w-full  lg:pr-[250px]">
      <div>
        <img
          loading="eager"
          className=" object-cover aspect-auto w-full lg:h-[552px] lg:flex rounded-[20px] bg-[#D9D9D9]"
          alt={blogData.title}
          src={blogData?.image || ImagePlaceholder.src}
        />
        <h1 className="mt-4 font-semibold text-xl lg:text-2xl text-gray-200 w-full">
          {blogData.title}
        </h1>
      </div>
      <Suspense fallback={<ContentSceleton />}>
        <DraftPreview className="mt-7 overflow-y-auto " content={blogData.content} />
      </Suspense>
      <div className="flex space-x-2 items-center mt-7">
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
          {lastThreeBlogs?.map((blog) => (
            <div key={blog.id} className="w-full md:max-w-1/2 desktop:max-w-[410px]">
              <BlogCard data={blog} className="shadow-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SingleBlogSection;
