import { useState } from "react";

import axios from "axios";

interface BlogData {
  title: string;
  content: string;
}

interface UseBlogOptions {
  onSuccess?: () => void;
  onFailure?: (error: unknown) => void;
}

const useBlog = () => {
  const [loading, setLoading] = useState(false);

  const addBlog = async (data: BlogData, options?: UseBlogOptions) => {
    setLoading(true);

    try {
      await axios.post("/api/blogs", data);
      options?.onSuccess?.();
    } catch (error) {
      options?.onFailure?.(error);
    } finally {
      setLoading(false);
    }
  };

  const updateBlog = async (id: string, data: BlogData, options?: UseBlogOptions) => {
    setLoading(true);

    try {
      await axios.put(`/api/blogs/${id}`, data);
      options?.onSuccess?.();
    } catch (error) {
      options?.onFailure?.(error);
    } finally {
      setLoading(false);
    }
  };

  return { addBlog, updateBlog, loading };
};

export default useBlog;
