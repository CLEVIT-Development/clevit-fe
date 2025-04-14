import type { Metadata, ResolvingMetadata } from "next";

import BlogService from "../../../../common/services/blog/blog.service";
import SingleBlogSection from "../../../../components/blog/SingleBlogSection";
import { CalendlySection } from "../../../../components/home";

type Props = {
  params: Promise<{ title: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

type Params = {
  title: string;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { title } = await params;

  const blog = await BlogService.getBlogByTitleName(title, false);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: blog.title,
    description: blog.metaDescription,
    keywords: blog.metaDescription?.split(", "),
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [blog.image, ...previousImages],
    },
  };
}

const SingleBlogPage = async ({ params }: { params: Promise<Params> }) => {
  const { title } = await params;

  return (
    <>
      <SingleBlogSection titlePath={title} />
      <CalendlySection title="Ready to turn your vision into reality? The journey starts here. We're excited to meet you." />
    </>
  );
};

export default SingleBlogPage;
