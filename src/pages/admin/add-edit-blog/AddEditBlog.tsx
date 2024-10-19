import { useParams } from "react-router-dom";

import { useBlogByTitle } from "@/common/hooks/blog/blogQueries";
import Layout from "@/common/layout/Layout.tsx";
import Section from "@/common/templates/Section";
import BlogForm from "@/shared/forms/BlogAddEditForm/BlogAddEditForm";
import BlogEditSceleton from "@/shared/forms/BlogAddEditForm/BlogEditSceleton";
import { HeaderVariant } from "@/types/variant.types.ts";

const AddEditBlogPage = () => {
  const { id } = useParams();
  const { data: blogData, isLoading } = useBlogByTitle(id!);

  return (
    <>
      <Layout headerVariant={HeaderVariant.Tertiary}>
        <Section className="mt-8">
          <h1 className="desktop:text-2xl text-lg">Edit Blog</h1>
          {isLoading ? <BlogEditSceleton /> : <BlogForm initialData={blogData} />}
        </Section>
      </Layout>
    </>
  );
};

export default AddEditBlogPage;
