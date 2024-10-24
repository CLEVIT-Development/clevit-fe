import type * as yup from "yup";

import { type BlogSchema } from "@/common/schemas/blogSchema";
import type { TStatus } from "@/shared/forms/BlogAddEditForm/types";

export type IBlogData = yup.InferType<typeof BlogSchema>;

export interface IBlog {
  id: string;
  title: string;
  description: string;
  image: string;
  content: string;
  created_at: string;
  titlePath: string;
  status: TStatus;
  metaDescription: string;
  readingTime?: string;
}

export interface Pagination {
  pageSize: number;
  currentPage: number;
  totalItems: number;
}

export interface IGetAllBlogs extends Pagination {
  blogsList: IBlog[];
}
