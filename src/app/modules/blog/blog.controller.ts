import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogService } from "./blog.service";

const createBlog = catchAsync(async (req, res) => {
  const blogData = req.body;
  const result = await BlogService.createBlog(blogData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog created successfully",
    data: result,
  });
});

const getAllBlogs = catchAsync(async (req, res) => {
  const result = await BlogService.getAllBlogs();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blogs retrieved successfully",
    data: result,
  });
});

const getSingleBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogService.getSingleBlog(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog retrieved successfully",
    data: result,
  });
});

const updateBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const blogData = req.body;
  const result = await BlogService.updateBlog(id, blogData);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog updated successfully",
    data: result,
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogService.deleteBlog(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blog deleted successfully",
    data: result,
  });
});

export const BlogController = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
