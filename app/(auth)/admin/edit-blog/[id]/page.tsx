"use client";

import { useParams } from "next/navigation";

import { useBlogByTitle } from "../../../../../common/hooks/blog/blogQueries";
import Section from "../../../../../common/templates/Section";
import BlogEditSceleton from "../../../../../components/blog/BlogEditSceleton";

const AddEditBlogPage = () => {
  const { id } = useParams();
  const { isLoading } = useBlogByTitle(id! as string);

  return (
    <Section className="mt-8">
      <h1 className="desktop:text-2xl text-lg">Edit Blog</h1>
      {isLoading ? <BlogEditSceleton /> : null}
    </Section>
  );
};

export default AddEditBlogPage;
