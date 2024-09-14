import NotFoundBackground from "@/assets/images/NotFound.svg?react";
import Layout from "@/common/layout/Layout.tsx";
import { HeaderVariant } from "@/types/variant.types.ts";

const NotFound = () => {
  return (
    <Layout headerVariant={HeaderVariant.Tertiary}>
      <section className="flex flex-col items-center space-y-12 mt-10">
        <p className="text-xl">Page Not Found</p>
        <NotFoundBackground width={"50vw"} />
      </section>
    </Layout>
  );
};

export default NotFound;
