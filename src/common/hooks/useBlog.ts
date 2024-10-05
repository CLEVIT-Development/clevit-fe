import { useState } from "react";

import { type IBlogData } from "@/types/blog.types";

import { axiosInstanceAuth } from "../services/toast/axios.service";

interface UseBlogOptions {
  onSuccess?: () => void;
  onFailure?: (error: unknown) => void;
}

interface Pagination {
  pageSize: number;
  currentPage: number;
  totalItems: number;
}

type IBlog = {
  id: string;
  title: string;
  description: string;
  image: string;
  created_at: string;
};

interface IGetAllBlogs extends Pagination {
  data: { blogsList: IBlog[] };
}

interface IGetBlogById {
  data: IBlog;
}

const useBlog = () => {
  const [loading, setLoading] = useState(false);
  const [blogData, setBlogData] = useState<IBlog | undefined>();
  const [allBlogs, setAllBlogs] = useState<IBlog[] | undefined>();
  const [pagination, setPagination] = useState<Pagination | undefined>();

  const addBlog = async (data: IBlogData, options?: UseBlogOptions) => {
    setLoading(true);

    try {
      await axiosInstanceAuth.post("/api/blogs", data);
      options?.onSuccess?.();
    } catch (error) {
      options?.onFailure?.(error);
    } finally {
      setLoading(false);
    }
  };

  const updateBlogById = async (id: string, data: IBlogData, options?: UseBlogOptions) => {
    setLoading(true);

    try {
      await axiosInstanceAuth.put(`/api/blogs/${id}`, data);
      options?.onSuccess?.();
    } catch (error) {
      options?.onFailure?.(error);
    } finally {
      setLoading(false);
    }
  };

  const getBlogById = async (id: string) => {
    setLoading(true);

    try {
      const response: IGetBlogById = await axiosInstanceAuth.get(`/api/blogs/${id}`);

      setBlogData(response.data);
    } catch (error) {
      console.error("Failed to fetch blog:", error);
    } finally {
      setLoading(false);
    }
  };

  const getAllBlogs = async (page: number = 1) => {
    setLoading(true);

    try {
      const response: IGetAllBlogs = await axiosInstanceAuth.get(`/blogs?page=${page}`);

      setAllBlogs(response.data.blogsList);

      setPagination({
        pageSize: response.pageSize,
        currentPage: response.currentPage,
        totalItems: response.totalItems,
      });
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    addBlog,
    updateBlogById,
    getBlogById,
    getAllBlogs,
    blogData,
    allBlogs,
    pagination, // Expose pagination data
    loading,
  };
};

export default useBlog;
