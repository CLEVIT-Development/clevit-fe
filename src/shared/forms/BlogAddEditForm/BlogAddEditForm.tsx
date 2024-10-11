import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { RoutePaths } from "@/app/routing/routing.constants";
import useBlog from "@/common/hooks/useBlog";
import { BlogSchema } from "@/common/schemas/blogSchema";
import showNotification, { ToastVersions } from "@/common/services/toast/showNotifications";
import RichTextEditor from "@/shared/ui/forms/RichTextEditor";
import { yupResolver } from "@hookform/resolvers/yup";

import Button from "../../ui/Button";
import Input from "../../ui/forms/Input";
import { type IBlog } from "./types";

interface IBlogFormProps {
  initialData?: IBlog;
  isLoading?: boolean;
}

const BlogForm = ({ initialData, isLoading }: IBlogFormProps) => {
  const methods = useForm<IBlog>({
    mode: "onChange",
    resolver: yupResolver(BlogSchema),
    shouldUnregister: true,
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (initialData) {
      setValue("title", initialData.title);
      setValue("titlePath", initialData.titlePath);
      setValue("content", initialData.content);
      setValue("image", initialData.image);
      setImagePreview(initialData.image);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialData]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setValue("image", file);
      trigger("image");
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const navigate = useNavigate();
  const { id } = useParams<{ id?: string }>();
  const { addBlog, updateBlogById, loading: blogLoading } = useBlog();

  const isFormLoading = isLoading || blogLoading;
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    trigger,
  } = methods;

  const onFormSubmit = async (data: IBlog) => {
    if (id) {
      updateBlogById(id, data, {
        onSuccess: () => {
          showNotification({
            type: ToastVersions.success,
            title: "Blog Successfully updated.",
            description: "",
          });
          navigate(RoutePaths.Blogs);
        },
        onFailure: () => {
          showNotification({
            type: ToastVersions.error,
            title: "Update failed",
            description: "Could not update the blog",
          });
        },
      });
    } else {
      addBlog(data, {
        onSuccess: () => {
          showNotification({
            type: ToastVersions.success,
            title: "Blog Successfully created.",
            description: "",
          });
          navigate(RoutePaths.Blogs);
        },
        onFailure: () => {
          showNotification({
            type: ToastVersions.error,
            title: "Creation failed",
            description: "Could not create the blog",
          });
        },
      });
    }
  };

  const handleContentChange = async (content: string) => {
    setValue("content", content);

    const isValid = await trigger("content");

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
            disabled={isFormLoading}
            required
            error={errors.image?.message as string}
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
          disabled={isFormLoading}
          label="Title"
          error={errors.title?.message}
          placeholder="Blog Title"
          {...register("title")}
        />
        <Input
          required
          disabled={isFormLoading}
          label="Title path"
          error={errors.titlePath?.message}
          placeholder="Blog Title Path"
          {...register("titlePath")}
        />
        <RichTextEditor
          disabled={isFormLoading}
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
