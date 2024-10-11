import { useEffect } from "react";
import { FacebookShareButton, LinkedinShareButton } from "react-share";

import { blogsConstants } from "@/assets/constants/blogs.constants";
import ImagePlaceholder from "@/assets/images/ImagePlaceholder.jpg";
import FacebookIcon from "@/assets/vectors/Facebook.svg?react";
// import InstagramIcon from "@/assets/vectors/Instagram.svg?react";
import LinkedInIcon from "@/assets/vectors/Linkedin.svg?react";
import useBlog from "@/common/hooks/useBlog";
import Section from "@/common/templates/Section.tsx";
import BlogCard from "@/shared/ui/BlogCard/BlogCard";

interface SingleBlogPageProps {
  blogId: string;
}

const SingleBlogSection = ({ blogId }: SingleBlogPageProps) => {
  const { getBlogById, blogData } = useBlog();

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
        <FacebookShareButton
          url={"https://clevit-dev.vercel.app/blog/2af0225d-86d9-42c3-b263-47af4d94e561"}
        >
          <FacebookIcon className="w-10 h-10" />
        </FacebookShareButton>
        {/*<InstagramIcon className="w-10 h-10" />*/}
        <LinkedinShareButton
          url={"https://clevit-dev.vercel.app/blog/2af0225d-86d9-42c3-b263-47af4d94e561"}
        >
          <LinkedInIcon className="w-10 h-10" />
        </LinkedinShareButton>
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
