import { useState } from "react";

import { axiosInstanceAuth } from "@/services/axios.service";
import { type IBlogData } from "@/types/blog.types";

interface UseBlogOptions {
  onSuccess?: () => void;
  onFailure?: (error: unknown) => void;
}

const useBlog = () => {
  const [loading, setLoading] = useState(false);
  const [blogData, setBlogData] = useState<IBlogData | undefined>();

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

  const updateBlog = async (id: string, data: IBlogData, options?: UseBlogOptions) => {
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

  const getBlog = async (id: string) => {
    setLoading(true);

    try {
      const response = await axiosInstanceAuth.get(`/api/blogs/${id}`);

      setBlogData(response.data); // Set the fetched blog data
    } catch (error) {
      console.error("Failed to fetch blog:", error);
    } finally {
      setLoading(false);
    }
  };

  return { addBlog, updateBlog, getBlog, blogData, loading };
};

export default useBlog;
