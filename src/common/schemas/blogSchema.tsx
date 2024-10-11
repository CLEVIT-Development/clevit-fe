import * as yup from "yup";

// URL validation regex
const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

export const BlogSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  titlePath: yup
    .string()
    .required("Title path is required")
    .matches(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Title path must be a valid path (lowercase letters, numbers, and hyphens only)"
    ),
  content: yup.string().required("Content is required"),
  image: yup
    .mixed()
    .required("Image is required")
    .test("is-valid-image", "Image must be a valid file or URL", (value) => {
      // Check if value is a string and a valid URL
      if (typeof value === "string") {
        return urlRegex.test(value); // Validates if it's a valid URL
      }

      // Check if value is a File object

      if (value && value instanceof File) {
        return (
          value.size <= 5 * 1024 * 1024 && // 5MB limit
          ["image/jpeg", "image/png", "image/gif"].includes(value.type) // Allowed image types
        );
      }

      return false; // Invalid if it's neither a valid URL nor a File
    }),
});
