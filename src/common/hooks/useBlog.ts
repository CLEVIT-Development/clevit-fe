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
  content: string;
  created_at: string;
  titlePath: string;
  readingTime?: string;
};

interface IGetAllBlogs extends Pagination {
  data: { blogsList: IBlog[] };
}

const useBlog = () => {
  const [loading, setLoading] = useState(false);
  const [blogData, setBlogData] = useState<IBlog | null>();
  const [allBlogs, setAllBlogs] = useState<IBlog[] | null>();
  const [pagination, setPagination] = useState<Pagination | null>();
  const [lastThreeBlogs, setLastThreeBlogs] = useState<IBlog[]>([]);

  const addBlog = async (data: IBlog, options?: UseBlogOptions) => {
    const { image, ...blogData } = data;
    console.log(image, 99999999999);
    setLoading(true);

    const formData = new FormData();

    formData.append("image", image);

    try {
      const blogReqData = {
        content: blogData.content,
        title: blogData.title,
        titlePath: blogData.titlePath,
      };
      const response = await axiosInstanceAuth.post("/blogs/add-blog", {
        ...blogReqData,
      });
      const { id } = response.data;

      await addBlogImageById(id, formData);

      options?.onSuccess?.();
    } catch (error) {
      options?.onFailure?.(error);
    } finally {
      setLoading(false);
    }
  };
  const addBlogImageById = async (
    id: string,
    data: IBlogData["image"],
    options?: UseBlogOptions
  ) => {
    console.log(data, 88888, id);

    try {
      await axiosInstanceAuth.post(`/blogs/add-blog-image/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      options?.onSuccess?.();
    } catch (error) {
      options?.onFailure?.(error);
    } finally {
      setLoading(false);
    }
  };

  const updateBlogById = async (id: string, data: IBlogData, options?: UseBlogOptions) => {
    setLoading(true);

    const { image, ...blogData } = data;

    try {
      const reqData = {
        content: blogData.content,
        title: blogData.title,
        titlePath: blogData.titlePath,
      };

      await axiosInstanceAuth.patch(`/blogs/update-blog/${id}`, reqData);
      console.log(image, 88888, id);

      await updateBlogImageById(id, { image });

      options?.onSuccess?.();
    } catch (error) {
      options?.onFailure?.(error);
    } finally {
      setLoading(false);
    }
  };
  const updateBlogImageById = async (
    id: string,
    data: IBlogData["image"],
    options?: UseBlogOptions
  ) => {
    setLoading(true);

    try {
      await axiosInstanceAuth.put(`/blogs/update-blog-image/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      options?.onSuccess?.();
    } catch (error) {
      options?.onFailure?.(error);
    } finally {
      setLoading(false);
    }
  };
  const deleteBlogById = async (id: string, options?: UseBlogOptions) => {
    setLoading(true);

    try {
      await axiosInstanceAuth.delete(`/blogs/delete-blog/${id}`);
      setAllBlogs(null);
      getAllBlogs();
      options?.onSuccess?.();
    } catch (error) {
      options?.onFailure?.(error);
    } finally {
      setLoading(false);
    }
  };

  const getBlogByTitleName = async (titlePath: string, options?: UseBlogOptions) => {
    setLoading(true);
    setBlogData(null);

    try {
      const response = await axiosInstanceAuth.get(`/blogs/by-title-path/${titlePath}`);

      setBlogData(response.data);

      options?.onSuccess?.();
    } catch (error) {
      options?.onFailure?.(error);
      setBlogData(null);
    } finally {
      setLoading(false);
    }
  };

  const getAllBlogs = async (page: number = 1, options?: UseBlogOptions) => {
    setLoading(true);

    try {
      const response: IGetAllBlogs = await axiosInstanceAuth.get(`/blogs?page=${page}&sort=Desc`);

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

  const getLastThreeBlogs = async (options?: UseBlogOptions) => {
    setLoading(true);

    try {
      const response = await axiosInstanceAuth.get(`/blogs/last-three`);

      setLastThreeBlogs(response.data);

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
    getBlogByTitleName,
    getAllBlogs,
    getLastThreeBlogs,
    blogData,
    allBlogs,
    lastThreeBlogs,
    deleteBlogById,
    pagination,
    loading,
  };
};

export default useBlog;
