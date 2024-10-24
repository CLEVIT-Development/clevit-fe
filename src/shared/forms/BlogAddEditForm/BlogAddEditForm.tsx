import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useBeforeUnload, useBlocker, useNavigate } from "react-router-dom";

import { RoutePaths } from "@/app/routing/routing.constants";
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
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(BlogSchema),
    shouldUnregister: true,
    defaultValues: initialData,
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { mutateAsync: updateBlogById, isSuccess } = useBlogUpdate();
  const navigate = useNavigate();

  const blocker = useBlocker(({ currentLocation, nextLocation }) => {
    const curr = currentLocation.pathname.split("/");
    const next = nextLocation.pathname.split("/");
    const isSamePage = curr.length === next.length;

    // dont block page if title Path updating
    const isSamePathname = isSamePage && curr[curr.length - 1] === next[next.length - 1];

    return isDirty && !isSamePathname && currentLocation.pathname !== nextLocation.pathname;
  });

  useLockBodyScroll(blocker.state === "blocked");

  useBeforeUnload(
    useCallback(
      (event) => {
        if (isDirty && !isSuccess) {
          event.preventDefault();
          event.returnValue =
            "You have unsaved changes. Exiting this page will lose all your work.";
        }
      },
      [isDirty]
    )
  );

  useEffect(() => {
    if (initialData?.image) {
      setImagePreview(initialData.image);
    }
  }, [initialData?.image]);

  const handleBlogSave = async () => {
    const data = getValues();
    const blogId = initialData?.id;

    const updateData = { id: blogId, ...data, status: initialData?.status ?? "Draft" };

    if (blogId) {
      try {
        await updateBlogById(updateData as IBlog);
        showNotification({
          type: ToastVersions.success,
          title: "Success",
          description: "Blog has been successfully updated",
        });
        blocker.proceed?.();
      } catch (e) {
        showNotification({
          type: ToastVersions.error,
          title: "Error",
          description: "There was an error updating the blog",
        });
      }
    }
  };

  const handlePublish = async () => {
    const data = getValues();
    const publishData = {
      id: initialData?.id,
      ...data,
      status: "Published",
    };

    if (initialData?.id) {
      await updateBlogById(publishData as IBlog);
      await navigate("/blogs");
      showNotification({
        type: ToastVersions.success,
        title: "Success",
        description: "Blog has been successfully Published",
      });
    }
  };

  useAutosave({
    onSave: handleBlogSave,
    isDirty,
    interval: 10000,
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

    reset();
    navigate(RoutePaths.Blogs, {
      replace: true,
    });
  };

  return (
    <>
      <form className="w-full desktop:w-[900px] space-y-4" onSubmit={(e) => e.preventDefault()}>
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
          <Button className="bg-black" onClick={handlePublish}>
            Publish Blog
          </Button>
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
