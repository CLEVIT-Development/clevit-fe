"use client";

import { useRef, useState } from "react";

import { useRouter } from "next/navigation";

import { useBlogCreate, useBlogDelete } from "../../common/hooks/blog/blogMutations";
import { useAllBlogs } from "../../common/hooks/blog/blogQueries";
import { useAuth } from "../../common/hooks/useAuth";
import showNotification, { ToastVersions } from "../../common/services/toast/showNotifications";
import Section from "../../common/templates/Section";
import BlogCard from "../../shared/ui/BlogCard/BlogCard";
import BlogCardSkeleton from "../../shared/ui/BlogCard/BlogCardSkeleton";
import Button from "../../shared/ui/Button";
import Pagination from "../../shared/ui/Pagination";
import type { TStatus } from "../../types/blog.types";
import { ButtonVariant } from "../../types/variant.types";
import { generateUniqueTitlePath } from "../../utils/helper.utils";
import CreateBlog from "./CreatBlogCard";

const BlogSection = () => {
  const { mutateAsync: createBlog } = useBlogCreate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { isAuthenticated, handleLogout } = useAuth();
  const { data: allBlogs, isLoading } = useAllBlogs({
    page: currentPage,
    sort: "Desc",
    isAdmin: isAuthenticated,
  });
  const { mutateAsync: deleteBlog } = useBlogDelete();
  const router = useRouter();

  const handleBlogCreate = async () => {
    const defaultBlog = {
      title: "Default Blog Title",
      titlePath: generateUniqueTitlePath("Default Blog Title"),
      content: "This is the default content for the blog post.",
      metaDescription: "This is a default meta description for SEO.",
      status: "Draft" as TStatus, // Assuming TStatus has a value 'draft'
      imageUrl:
        "https://res.cloudinary.com/dchnaa2wb/image/upload/v1729259681/xnmlcsaogei5cfjtgdv2.jpg",
    };

    await createBlog(defaultBlog);
    router.push(`/admin/edit-blog/${defaultBlog.titlePath}`);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleDeleteBlog = async (id: string) => {
    try {
      await deleteBlog(id);
      showNotification({
        type: ToastVersions.success,
        description: "Blog has successfully deleted.",
      });
    } catch (err) {
      showNotification({
        type: ToastVersions.error || err,
        description: "Error deleting blog.",
      });
    }
  };

  const isAbleToCreateBlog = [allBlogs?.blogsList.length, isAuthenticated, !isLoading].every(
    Boolean
  );

  return (
    <Section className="!px-5 desktop:px-0" headingLevel="h2" ref={containerRef}>
      {isAuthenticated ? (
        <Button className="fixed z-50 right-6 top-[60%] block ml-auto" onClick={handleLogout}>
          Logout
        </Button>
      ) : null}
      {!allBlogs?.blogsList.length && !isLoading && (
        <div className="flex flex-col items-center justify-center h-64">
          <p className="text-gray-100 text-lg mb-4">No blogs available at the moment.</p>
          {isAuthenticated && (
            <Button variant={ButtonVariant.Primary} onClick={handleBlogCreate}>
              Create New Blog
            </Button>
          )}
        </div>
      )}
      <div className="w-full h-full rounded-lg bg-white grid xs:grid-cols-1 sm:grid-cols-2 desktop:grid-cols-3 gap-x-4 gap-y-5">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => <BlogCardSkeleton key={index} />)
          : allBlogs?.blogsList.map((data) => (
              <BlogCard
                isAdminMode={isAuthenticated}
                data={data}
                onEdit={() => router.push(`/admin/edit-blog/${data.titlePath}`)}
                onDelete={handleDeleteBlog}
                key={data.id}
                className="shadow-none"
              />
            ))}
        {isAbleToCreateBlog && <CreateBlog handleBlogCreate={handleBlogCreate} />}
      </div>
      {allBlogs && allBlogs.totalItems >= allBlogs.pageSize && !isLoading && (
        <Pagination
          totalItems={allBlogs.totalItems}
          pageSize={allBlogs.pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </Section>
  );
};

export default BlogSection;
