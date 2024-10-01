import { useEffect } from "react";
import { useParams } from "react-router-dom";

import useBlog from "@/common/hooks/useBlog";
import Layout from "@/common/layout/Layout.tsx";
import Section from "@/common/templates/Section";
import BlogForm from "@/shared/forms/BlogAddEditForm/BlogAddEditForm";
import { HeaderVariant } from "@/types/variant.types.ts";

const AddEditBlogPage = () => {
  const { id } = useParams();
  const { getBlog, blogData } = useBlog();

  const isEditing = Boolean(id);

  useEffect(() => {
    if (isEditing && id) {
      getBlog(id);
    }
  }, [id, isEditing, getBlog]);

  return (
    <>
      <Layout headerVariant={HeaderVariant.Tertiary}>
        <Section className="mt-8 ">
          {id ? (
            <h1>Edit Blog {id}</h1>
          ) : (
            <h1 className="desktop:text-2xl text-lg">Create New Blog</h1>
          )}
          <BlogForm initialData={blogData} />
        </Section>
      </Layout>
    </>
  );
};

export default AddEditBlogPage;
