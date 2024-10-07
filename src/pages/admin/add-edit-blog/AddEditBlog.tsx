import { useEffect } from "react";
import { useParams } from "react-router-dom";

import useBlog from "@/common/hooks/useBlog";
import Layout from "@/common/layout/Layout.tsx";
import Section from "@/common/templates/Section";
import BlogForm from "@/shared/forms/BlogAddEditForm/BlogAddEditForm";
import { type IBlog } from "@/shared/forms/BlogAddEditForm/types";
import { HeaderVariant } from "@/types/variant.types.ts";

const AddEditBlogPage = () => {
  const { id } = useParams();
  const { getBlogById, blogData } = useBlog();

  const isEditing = Boolean(id);

  useEffect(() => {
    if (isEditing && id) {
      getBlogById(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, isEditing]);

  return (
    <>
      <Layout headerVariant={HeaderVariant.Tertiary}>
        <Section className="mt-8 ">
          <h1 className="desktop:text-2xl text-lg">
            {isEditing ? "Edit Blog" : "Create New Blog"}{" "}
          </h1>
          <BlogForm initialData={blogData as IBlog} />
        </Section>
      </Layout>
    </>
  );
};

export default AddEditBlogPage;
