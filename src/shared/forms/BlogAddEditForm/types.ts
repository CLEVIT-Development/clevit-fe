import type * as yup from "yup";

import { type BlogSchema } from "@/common/schemas/blogSchema";

export type IBlogData = yup.InferType<typeof BlogSchema>;

export type IBlog = {
  id?: string;
  title: string;
  titlePath: string;
  content: string;
  description?: string;
  //TODO: Fix later for more type safety
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: string | any;
  created_at?: string;
};
