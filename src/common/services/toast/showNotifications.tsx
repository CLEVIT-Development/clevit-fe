import { toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

export enum ToastVersions {
  error = "error",
  success = "success",
}

interface IShowNotification {
  type: ToastVersions;
  title?: string;
  description: string;
}

const showNotification = ({ type, title, description }: IShowNotification) => {
  injectStyle();

  switch (type) {
    case ToastVersions.success:
      toast(
        <p className="text-green-500">
          {title}
          <br />
          {description}
        </p>,
        {
          type: ToastVersions.success,
        }
      );
      break;

    case ToastVersions.error:
      toast(
        <p className="text-error100">
          {title}
          <br />
          {description}
        </p>,
        {
          type: ToastVersions.error,
        }
      );
      break;

    default:
      break;
  }
};

export default showNotification;
