import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { RoutePaths } from "@/app/routing/routing.constants";
import { BlogSchema } from "@/common/schemas/blogSchema";
import showNotification, { ToastVersions } from "@/common/services/toast/showNotifications";
import RichTextEditor from "@/shared/ui/forms/RichTextEditor";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../ui/Button";
import Input from "../../ui/forms/Input";
import useBlog from "./hooks";
import { type IBlogData } from "./types";

interface IBlogFormProps {
  initialData?: IBlogData;
}

const BlogForm = ({ initialData }: IBlogFormProps) => {
  const methods = useForm<IBlogData>({
    mode: "onChange",
    resolver: yupResolver(BlogSchema),
    defaultValues: initialData,
    shouldUnregister: true,
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setValue("image", file);
      trigger("image");
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file)); // Set the image preview
    }
  };

  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();
  const { addBlog, updateBlog, loading } = useBlog();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    trigger,
  } = methods;

  console.log("Errors:", errors);
  console.log("Values:", getValues());

  const onFormSubmit = async (data: IBlogData) => {
    // Include the image file in the blog data
    const blogData = { ...data, image: imageFile };

    if (id) {
      updateBlog(id, blogData, {
        onSuccess: () => {
          navigate(RoutePaths.Blog);
        },
        onFailure: () => {
          showNotification({
            type: ToastVersions.error,
            title: "Update failed",
            description: "Could not update the blog post",
          });
        },
      });
    } else {
      addBlog(blogData, {
        onSuccess: () => {
          navigate(RoutePaths.Blogs);
        },
        onFailure: () => {
          showNotification({
            type: ToastVersions.error,
            title: "Creation failed",
            description: "Could not create the blog post",
          });
        },
      });
    }
  };

  const handleContentChange = async (content: string) => {
    setValue("content", content);

    // Trigger validation for the content field
    const isValid = await trigger("content");

    // Clear the error if the content is valid
    if (isValid) {
      trigger("content");
    }
  };

  return (
    <FormProvider {...methods}>
      <form className="w-full desktop:w-[700px] space-y-4" onSubmit={handleSubmit(onFormSubmit)}>
        <div>
          {imagePreview && (
            <div className="mt-2">
              <img
                src={imagePreview}
                alt="Image Preview"
                className="h-64 w-full object-cover rounded-md "
              />
            </div>
          )}
          <Input
            required
            error={errors.image?.message}
            label="Image"
            type="file"
            accept="image/*"
            name="image"
            onChange={handleImageChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <Input
          required
          disabled={loading}
          label="Title"
          error={errors.title?.message}
          placeholder="Blog Title"
          {...register("title")}
        />
        <RichTextEditor
          required
          label="Content"
          error={errors.content?.message}
          onContentChange={handleContentChange}
          initialContent={initialData?.content || ""}
        />

        <Button type="submit">{id ? "Update Blog" : "Create Blog"}</Button>
      </form>
    </FormProvider>
  );
};

export default BlogForm;
