import type * as yup from "yup";

import { type BlogSchema } from "@/common/schemas/blogSchema";

export type IBlogData = yup.InferType<typeof BlogSchema>;
