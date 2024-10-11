import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "@/common/hooks/useAuth";
import useBlog from "@/common/hooks/useBlog";
import showNotification, { ToastVersions } from "@/common/services/toast/showNotifications";
import Section from "@/common/templates/Section.tsx";
import BlogCard from "@/shared/ui/BlogCard/BlogCard";
import BlogCardSkeleton from "@/shared/ui/BlogCard/BlogCardSkeleton";
import Button from "@/shared/ui/Button";
import Pagination from "@/shared/ui/Pagination";
import { ButtonVariant } from "@/types/variant.types";

import CreateBlog from "./CreatBlogCard";

const BlogSection = () => {
  const { getAllBlogs, allBlogs, deleteBlogById, pagination, loading } = useBlog();
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { isAuthenticated, handleLogout } = useAuth();

  useEffect(() => {
    const onSuccess = () => {
      containerRef.current?.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "start",
      });
    };

    getAllBlogs(currentPage, { onSuccess });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  console.log({ allBlogs });

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const navigate = useNavigate();

  const handleDeleteBlog = (id: string) => {
    deleteBlogById(id, {
      onSuccess: () =>
        showNotification({
          type: ToastVersions.success,
          description: "Blog has successfully deleted.",
        }),
      onFailure: () =>
        showNotification({
          type: ToastVersions.error,
          description: "Error deleting blog.",
        }),
    });
  };

  const isAbleToCreateBlog = [allBlogs, allBlogs?.length, isAuthenticated, !loading].every(Boolean);

  return (
    <Section className="scroll-mt-[150px] md:px-0" headingLevel="h2" ref={containerRef}>
      {isAuthenticated ? (
        <Button className="fixed z-50 right-6 top-[60%] block ml-auto" onClick={handleLogout}>
          Logout
        </Button>
      ) : null}
      {!allBlogs?.length && !loading && (
        <div className="flex flex-col items-center justify-center h-64">
          <p className="text-gray-100 text-lg mb-4">No blogs available at the moment.</p>
          {isAuthenticated && (
            <Button variant={ButtonVariant.Primary} onClick={() => navigate("/admin/add-blog")}>
              Create New Blog
            </Button>
          )}
        </div>
      )}
      <div className="w-full rounded-lg bg-white grid xs:grid-cols-1 xs:gap-0 sm:grid-cols-2 desktop:grid-cols-3 !gap-6">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => <BlogCardSkeleton key={index} />)
          : allBlogs?.map(({ id, title, titlePath, readingTime, image, created_at: date }) => (
              <BlogCard
                isAdminMode={!!isAuthenticated}
                onEdit={() => navigate(`/admin/edit-blog/${id}`)}
                onDelete={handleDeleteBlog}
                id={id}
                date={date}
                image={image}
                imageAlt={title}
                key={id}
                title={title}
                readingTime={readingTime}
                titlePath={titlePath}
                className="shadow-none"
              />
            ))}
        {isAbleToCreateBlog && <CreateBlog />}
      </div>
      {pagination && pagination.totalItems >= pagination.pageSize && !loading && (
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
