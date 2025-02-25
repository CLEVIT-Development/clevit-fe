import ContentSceleton from "@/components/blog/ContentSceleton";

const BlogPreviewSkeleton = () => {
  return (
    <div className="w-full max-w-[1108px] h-full mx-auto py-5 space-y-4 animate-pulse">
      <div className="h-64 bg-gray-100 rounded-lg"></div>
      <ContentSceleton />
      <div className="flex space-x-2">
        <div className="h-6 bg-gray-100 rounded w-16"></div>
        <div className="h-6 bg-gray-100 rounded w-20"></div>
        <div className="h-6 bg-gray-100 rounded w-14"></div>
      </div>
    </div>
  );
};

export default BlogPreviewSkeleton;
