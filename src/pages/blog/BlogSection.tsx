import { blogsConstants } from "@/assets/constants/blogs.constants";
import Section from "@/common/templates/Section.tsx";
import BlogCard from "@/shared/ui/BlogCard/BlogCard";

const BlogSection = () => {
  return (
    <Section title="" className="scroll-mt-[150px] md:px-0" headingLevel="h2">
      <div className="h-full w-full rounded-lg bg-white  grid  xs:grid-cols-1 xs:gap-0 sm:grid-cols-2 desktop:grid-cols-3 !gap-6 ">
        {blogsConstants.map(({ id, title, image, readingTime, imageAlt, date }) => (
          <BlogCard
            id={id}
            date={date}
            image={image}
            imageAlt={imageAlt}
            key={id}
            title={title}
            className="shadow-none"
            readingTime={readingTime}
          />
        ))}
      </div>
    </Section>
  );
};

export default BlogSection;
