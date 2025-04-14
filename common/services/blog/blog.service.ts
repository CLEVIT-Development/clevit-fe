import type { IBlog, IBlogData, IBlogTitlePath, IGetAllBlogs } from "../../../types/blog.types";
import { axiosInstance, axiosInstanceAuth } from "../toast/axios.service";

class BlogService {
  static async addBlog(data: Omit<IBlog, "id" | "image" | "description" | "created_at">) {
    const response = await axiosInstanceAuth.post("/blogs/add-blog", data);

    return response.data;
  }
  static async addBlogImageById(id: string, data: IBlogData["image"]) {
    const response = await axiosInstanceAuth.post(`/blogs/add-blog-image/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  }
  static async updateBlogById(id: string, data: IBlogData) {
    const { image, ...blogData } = data;

    await axiosInstanceAuth.patch(`/blogs/update-blog/${id}`, blogData);

    if (image instanceof File) {
      const formData = new FormData();

      formData.append("image", image);
      await this.updateBlogImageById(id, formData);
    }
  }
  static async updateBlogImageById(id: string, data: IBlogData["image"]) {
    console.log({ id, data });
    await axiosInstanceAuth.put(`/blogs/update-blog-image/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
  static async deleteBlogById(id: string) {
    await axiosInstanceAuth.delete(`/blogs/delete-blog/${id}`);
  }
  static async getBlogByTitleName(titlePath: string, isAdmin = true) {
    const apiInstance = isAdmin ? axiosInstanceAuth : axiosInstance;
    const response = await apiInstance.get<IBlog>(`/blogs/by-title-path/${titlePath}`);

    return response.data;
  }
  static async getAllBlogs(page = 1, sort = "Desc", isAdmin = false) {
    const apiInstance = isAdmin ? axiosInstanceAuth : axiosInstance;
    const endpoint = isAdmin ? "/blogs/admin" : "/blogs";

    const { data } = await apiInstance.get<IGetAllBlogs>(endpoint, {
      params: { page, sort },
    });

    return data;
  }
  static async getLastThreeBlogs() {
    const response = await axiosInstanceAuth.get<IBlog[]>(`/blogs/last-three`);

    return response.data;
  }
  static async getTitlePath() {
    const response = await axiosInstance.get<IBlogTitlePath[]>("/blogs/title-paths");

    return response.data;
  }
}

export default BlogService;
