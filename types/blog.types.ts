import type * as yup from "yup";

import { type BlogSchema } from "../common/schemas/blogSchema";

export type IBlogData = yup.InferType<typeof BlogSchema>;

export type TStatus = "Draft" | "Published";

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

export interface IBlogTitlePath {
  titlePath: string;
}
