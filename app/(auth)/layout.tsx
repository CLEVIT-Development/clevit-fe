import Layout from "@/common/layout/Layout";
import { HeaderVariant } from "@/types/variant.types";

interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  return <Layout headerVariant={HeaderVariant.Tertiary}>{children}</Layout>;
};

export default AuthLayout;
