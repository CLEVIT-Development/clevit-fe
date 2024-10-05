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
  const [blogData, setBlogData] = useState<IBlog | null>();
  const [allBlogs, setAllBlogs] = useState<IBlog[] | null>();
  const [pagination, setPagination] = useState<Pagination | null>();

  const addBlog = async (data: IBlogData, options?: UseBlogOptions) => {
    setLoading(true);

    try {
      await axiosInstanceAuth.post("/blogs", data);
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
      await axiosInstanceAuth.put(`/blogs/${id}`, data);
      options?.onSuccess?.();
    } catch (error) {
      options?.onFailure?.(error);
    } finally {
      setLoading(false);
    }
  };

  const getBlogById = async (id: string, options?: UseBlogOptions) => {
    setLoading(true);
    setBlogData(null);

    try {
      const response: IGetBlogById = await axiosInstanceAuth.get(`/blogs/${id}`);

      setBlogData(response.data);

      options?.onSuccess?.();
    } catch (error) {
      options?.onFailure?.(error);
    } finally {
      setLoading(false);
    }
  };

  const getAllBlogs = async (page: number = 1, options?: UseBlogOptions) => {
    setLoading(true);

    try {
      const response: IGetAllBlogs = await axiosInstanceAuth.get(`/blogs?page=${page}`);

      setAllBlogs(response.data.blogsList);
      setPagination({
        pageSize: response.pageSize,
        currentPage: response.currentPage,
        totalItems: response.totalItems,
      });

      options?.onSuccess?.();
    } catch (error) {
      options?.onFailure?.(error);
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
    pagination,
    loading,
  };
};

export default useBlog;
