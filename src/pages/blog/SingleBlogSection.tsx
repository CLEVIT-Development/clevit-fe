import { blogsConstants } from "@/assets/constants/blogs.constants";
import ImagePlaceholder from "@/assets/images/ImagePlaceholder.jpg";
import FacebookIcon from "@/assets/vectors/Facebook.svg?react";
import InstagramIcon from "@/assets/vectors/Instagram.svg?react";
import LinkedInIcon from "@/assets/vectors/Linkedin.svg?react";
import Section from "@/common/templates/Section.tsx";
import BlogCard from "@/shared/ui/BlogCard/BlogCard";

interface SingleBlogPageProps {
  blogId: string;
}

const SingleBlogSection = ({ blogId }: SingleBlogPageProps) => {
  const blog = blogsConstants.find((blog) => blog.id === blogId);

  if (!blog) {
    return <h1>Blog not found</h1>;
  }

  const { title, description, imageAlt } = blog;

  return (
    <Section className="items-start desktop:max-w-[80%]">
      <img
        loading="lazy"
        className="w-[335px] h-[220px] desktop:w-[1110px] desktop:h-[550px]  lg:flex rounded-[20px] bg-[#D9D9D9]"
        alt={imageAlt}
        src={ImagePlaceholder}
      />
      <h1 className="text-3xl desktop:max-w-[80%]">{title}</h1>
      <p className="text-base desktop:max-w-[80%]">{description}</p>

      <div className="flex space-x-2 items-center justify-center">
        <span className="text-lg">Share this</span>
        <FacebookIcon className="w-10 h-10" />
        <InstagramIcon className="w-10 h-10" />
        <LinkedInIcon className="w-10 h-10" />
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
