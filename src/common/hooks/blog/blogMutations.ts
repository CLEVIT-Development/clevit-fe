import BlogService from "@/common/services/blog/blog.service";
import { type IBlog } from "@/shared/forms/BlogAddEditForm/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import BlogQueryKeys from "./queryKeys";

const useInvalidateBlog = () => {
  const queryClient = useQueryClient();

  const handleInvalidateAllblogs = () => {
    console.log("Invalidating all blogs");
    queryClient.invalidateQueries({
      queryKey: [BlogQueryKeys.ALL, BlogQueryKeys.BY_TITLE, BlogQueryKeys.LAST_THREE],
    });
  };

  return {
    handleInvalidateAllblogs,
  };
};

export const useBlogCreate = () => {
  const { handleInvalidateAllblogs } = useInvalidateBlog();

  return useMutation({
    mutationFn: async (data: IBlog) => {
      return BlogService.addBlog(data);
    },
    onSuccess: () => {
      handleInvalidateAllblogs();
    },
  });
};

export const useBlogUpdate = () => {
  const { handleInvalidateAllblogs } = useInvalidateBlog();

  return useMutation({
    mutationFn: async ({ id, ...data }: IBlog) => {
      return BlogService.updateBlogById(id!, data);
    },
    onSuccess: () => {
      handleInvalidateAllblogs();
    },
  });
};

export const useBlogDelete = () => {
  const { handleInvalidateAllblogs } = useInvalidateBlog();

  return useMutation({
    mutationFn: async (id: string) => {
      return BlogService.deleteBlogById(id);
    },
    onSuccess: () => {
      handleInvalidateAllblogs();
    },
  });
};
