import { useEffect } from "react";
import { useParams } from "react-router-dom";

import useBlog from "@/common/hooks/useBlog";
import Layout from "@/common/layout/Layout.tsx";
import Section from "@/common/templates/Section";
import BlogForm from "@/shared/forms/BlogAddEditForm/BlogAddEditForm";
import { HeaderVariant } from "@/types/variant.types.ts";

const AddEditBlogPage = () => {
  const { titleName } = useParams();
  const { getBlogByTitleName, blogData } = useBlog();

  const isEditing = Boolean(titleName);

  useEffect(() => {
    if (isEditing && titleName) {
      getBlogByTitleName(titleName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [titleName, isEditing]);

  return (
    <>
      <Layout headerVariant={HeaderVariant.Tertiary}>
        <Section className="mt-8">
          <h1 className="desktop:text-2xl text-lg">
            {isEditing ? "Edit Blog" : "Create New Blog"}{" "}
          </h1>
          {blogData && <BlogForm initialData={blogData} />}
        </Section>
      </Layout>
    </>
  );
};

export default AddEditBlogPage;
