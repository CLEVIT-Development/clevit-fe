// context/BlogContext.tsx
import { createContext, useContext, useEffect, useState } from "react";

import { axiosInstanceAuth } from "../services/toast/axios.service";

interface IBlog {
  id?: string;
  title: string;
  description: string;
  image: string;
  content: string;
  created_at: string;
  titlePath: string;
  readingTime?: string;
}

interface BlogContextType {
  lastThreeBlogs: IBlog[];
  loading: boolean;
  fetchLastThreeBlogs: () => Promise<void>;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider = ({ children }: { children: React.ReactNode }) => {
  const [lastThreeBlogs, setLastThreeBlogs] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchLastThreeBlogs = async () => {
    setLoading(true);

    try {
      const response = await axiosInstanceAuth.get(`/blogs/last-three`);

      setLastThreeBlogs(response.data);
    } catch (error) {
      console.error("Failed to fetch last three blogs", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLastThreeBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ lastThreeBlogs, loading, fetchLastThreeBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  const context = useContext(BlogContext);

  if (context === undefined) {
    throw new Error("useBlogContext must be used within a BlogProvider");
  }

  return context;
};
