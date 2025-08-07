/* eslint-disable @typescript-eslint/no-explicit-any */
import QueryBuilder from "../../builder/QueryBuilder";
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

const getAllBlogs = async (query: any) => {
  const blogQuery = new QueryBuilder(Blogs.find(), query)
    .search(["title", "content", "topic"])
    .filter()
    .sort()
    .paginate();

  const blogs = await blogQuery.moduleQuery;
  const meta = await blogQuery.countTotal();

  return { blogs, meta };
};

const getSingleBlog = async (id: string) => {
  const currentBlog = await Blogs.findById(id);
  if (!currentBlog) {
    throw new Error("Blog not found");
  }

  // Find next blog new one
  const nextBlog = await Blogs.findOne({
    createdAt: { $gt: currentBlog.createdAt },
  }).sort({ createdAt: 1 });

  // Find previous blog
  const prevBlog = await Blogs.findOne({
    createdAt: { $lt: currentBlog.createdAt },
  }).sort({ createdAt: -1 });

  return {
    currentBlog,
    nextBlog,
    prevBlog,
  };
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
