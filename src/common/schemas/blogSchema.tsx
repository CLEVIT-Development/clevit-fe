import * as yup from "yup";

export const BlogSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  content: yup.string().required("Content is required"),
  image: yup
    .mixed()
    .required("Image is required")
    .test("File", "Image is required", (value) => {
      if (!value) return !value; // Return false if no file is provided

      return (value as File).size <= 5 * 1024 * 1024; // 5MB limit
    })
    .test("fileType", "Unsupported File Format", (value) => {
      if (!value) return false; // Return false if no file is provided

      return ["image/jpeg", "image/png", "image/gif"].includes((value as File).type); // Allow specific image types
    }),
});
