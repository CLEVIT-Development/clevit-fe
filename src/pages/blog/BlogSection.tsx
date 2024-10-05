import { useEffect, useRef, useState } from "react";

import useBlog from "@/common/hooks/useBlog";
import Section from "@/common/templates/Section.tsx";
import BlogCard from "@/shared/ui/BlogCard/BlogCard";
import Pagination from "@/shared/ui/Pagination";

const BlogSection = () => {
  const { getAllBlogs, allBlogs, pagination } = useBlog();
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getAllBlogs(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    containerRef.current?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "start",
    });
  }, [currentPage]);

  return (
    <Section title="" className="scroll-mt-[150px] md:px-0" headingLevel="h2" ref={containerRef}>
      <div className="h-full w-full rounded-lg bg-white  grid  xs:grid-cols-1 xs:gap-0 sm:grid-cols-2 desktop:grid-cols-3 !gap-6 ">
        {allBlogs?.map(({ id, title, image, created_at: date }) => (
          <BlogCard
            id={id}
            date={date}
            image={image}
            imageAlt={title}
            key={id}
            title={title}
            className="shadow-none"
          />
        ))}
      </div>

      {pagination && (
        <Pagination
          totalItems={pagination.totalItems}
          pageSize={pagination.pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </Section>
  );
};

export default BlogSection;
