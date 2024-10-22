const BlogEditSceleton = () => {
  return (
    <div className="w-full desktop:w-[700px] space-y-4">
      <div className="animate-pulse flex flex-col gap-4">
        <div className="h-64 w-full object-cover rounded-md bg-slate-300"></div>
        {[...Array(5)].map((_, index) => (
          <div key={index} className="h-12 w-full rounded-md bg-slate-300"></div>
        ))}
      </div>
    </div>
  );
};

export default BlogEditSceleton;
