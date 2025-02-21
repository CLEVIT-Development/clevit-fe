import Layout from "@/common/layout/Layout";
import { HeaderVariant } from "@/types/variant.types";

interface Props {
  children: React.ReactNode;
}

const ContactLayout: React.FC<Props> = ({ children }) => {
  return <Layout headerVariant={HeaderVariant.Tertiary}>{children}</Layout>;
};

export default ContactLayout;
