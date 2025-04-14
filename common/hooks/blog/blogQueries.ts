import { useQuery } from "@tanstack/react-query";

import BlogService from "../../services/blog/blog.service";
import BlogQueryKeys from "./queryKeys";

export const useBlogByTitle = (titlePath: string) => {
  return useQuery({
    queryKey: [BlogQueryKeys.BY_TITLE, titlePath],
    queryFn: async () => {
      return BlogService.getBlogByTitleName(titlePath);
    },
  });
};

export const useAllBlogs = ({
  page,
  sort,
  isAdmin,
}: {
  page: number;
  sort: "Desc" | "Asc";
  isAdmin: boolean;
}) => {
  return useQuery({
    queryKey: [BlogQueryKeys.ALL, page, sort, isAdmin],
    queryFn: async () => {
      return BlogService.getAllBlogs(page, sort, isAdmin);
    },
  });
};

export const useLastThreeBlogs = () => {
  return useQuery({
    queryKey: [BlogQueryKeys.LAST_THREE],
    queryFn: async () => {
      return BlogService.getLastThreeBlogs();
    },
  });
};
