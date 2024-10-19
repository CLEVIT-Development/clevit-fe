import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useBlocker } from "react-router-dom";

import { useBlogUpdate } from "@/common/hooks/blog/blogMutations";
import useAutosave from "@/common/hooks/useAutoSave";
import useLockBodyScroll from "@/common/hooks/useBodyLock";
import { BlogSchema } from "@/common/schemas/blogSchema";
import showNotification, { ToastVersions } from "@/common/services/toast/showNotifications";
import Button from "@/shared/ui/Button";
import Input from "@/shared/ui/forms/Input";
import RichTextEditor from "@/shared/ui/forms/RichTextEditor";
import TextArea from "@/shared/ui/forms/TextArea";
import { yupResolver } from "@hookform/resolvers/yup";

import SaveReminder from "./SaveReminder";
import { type IBlog } from "./types";

interface IBlogFormProps {
  initialData?: IBlog;
}

const BlogForm = ({ initialData }: IBlogFormProps) => {
  const {
    register,
    setValue,
    formState: { errors, isDirty },
    trigger,
    getValues,
    reset,
  } = useForm<IBlog>({
    mode: "onChange",
    resolver: yupResolver(BlogSchema),
    shouldUnregister: true,
    defaultValues: initialData,
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { mutateAsync: updateBlogById } = useBlogUpdate();

  const blocker = useBlocker(
    ({ currentLocation, nextLocation }) =>
      isDirty && currentLocation.pathname !== nextLocation.pathname
  );

  useLockBodyScroll(blocker.state === "blocked");

  useEffect(() => {
    if (initialData?.image) {
      setImagePreview(initialData.image);
    }
  }, [initialData?.image]);

  const handleBlogSave = async () => {
    const data = getValues();
    const blogId = initialData?.id;

    if (blogId) {
      try {
        await updateBlogById({
          id: blogId,
          ...data,
        });
        showNotification({
          type: ToastVersions.success,
          title: "Success",
          description: "Blog has been successfully updated",
        });
        reset(undefined, { keepValues: true, keepDirty: false, keepDefaultValues: false });
      } catch (e) {
        showNotification({
          type: ToastVersions.error,
          title: "Error",
          description: "There was an error updating the blog",
        });
      }
    }
  };

  useAutosave({
    onSave: handleBlogSave,
    isDirty,
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      setValue("image", file);
      trigger("image");
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleContentChange = async (content: string) => {
    setValue("content", content);

    const isValid = await trigger("content");

    if (isValid) {
      trigger("content");
    }
  };

  const handleExit = () => {
    blocker.proceed?.();
  };

  const handleExitWithSave = async () => {
    await handleBlogSave();
    blocker.proceed?.();
  };

  return (
    <>
      <form className="w-full desktop:w-[700px] space-y-4" onSubmit={(e) => e.preventDefault()}>
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
          label="Title"
          error={errors.title?.message}
          placeholder="Blog Title"
          {...register("title")}
        />
        <Input
          required
          label="Title path"
          error={errors.titlePath?.message}
          placeholder="Blog Title Path"
          {...register("titlePath")}
        />
        <TextArea
          maxLength={3000}
          required
          label="Meta description"
          error={errors.metaDescription?.message}
          placeholder="Blog Meta Description"
          {...register("metaDescription")}
        />
        <RichTextEditor
          required
          label="Content"
          error={errors.content?.message}
          onContentChange={handleContentChange}
          initialContent={initialData?.content || ""}
        />
        <div className="flex items-center justify-between">
          <Button onClick={handleBlogSave}>Save Blog</Button>
          <Button className="bg-black">Publish Blog</Button>
        </div>
      </form>
      <SaveReminder
        isOpen={blocker.state === "blocked"}
        onReset={blocker.reset}
        onExit={handleExit}
        onSaveAndExit={handleExitWithSave}
      />
    </>
  );
};

export default BlogForm;
