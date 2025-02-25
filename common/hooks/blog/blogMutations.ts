import BlogService from "@/common/services/blog/blog.service";
import type { IBlog } from "@/types/blog.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useInvalidateBlog = () => {
  const queryClient = useQueryClient();

  const handleInvalidateAllblogs = () => {
    console.log("Invalidating all blogs");
    queryClient.invalidateQueries();
  };

  return {
    handleInvalidateAllblogs,
    queryClient,
  };
};

export const useBlogCreate = () => {
  const { handleInvalidateAllblogs } = useInvalidateBlog();

  return useMutation({
    mutationFn: async (data: Omit<IBlog, "id" | "image" | "description" | "created_at">) => {
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
    mutationFn: async ({ id, ...data }: IBlog & { image: string }) => {
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
