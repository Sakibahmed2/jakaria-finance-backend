import { Blogs } from "./blog.model";
import { TBlog } from "./blog.type";

const createBlog = async (blogData: TBlog) => {
  const existingBlog = await Blogs.findOne({ title: blogData.title });

  if (existingBlog) {
    throw new Error("Blog with this title already exists");
  }

  const result = await Blogs.create(blogData);
  return result;
};

const getAllBlogs = async () => {
  const result = await Blogs.find();

  if (!result || result.length === 0) {
    throw new Error("There are no blogs available");
  }

  return result;
};

const getSingleBlog = async (id: string) => {
  const result = await Blogs.findById(id);
  if (!result) {
    throw new Error("Blog not found");
  }
  return result;
};

const updateBlog = async (id: string, blogData: TBlog) => {
  const result = await Blogs.findByIdAndUpdate(id, blogData, {
    new: true,
  });

  return result;
};

const deleteBlog = async (id: string) => {
  const result = await Blogs.findByIdAndDelete(id);

  return result;
};

export const BlogService = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
