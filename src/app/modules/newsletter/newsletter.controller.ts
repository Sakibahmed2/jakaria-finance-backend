import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { NewsletterService } from "./newsletter.service";

const createNewsletter = catchAsync(async (req, res) => {
  const data = req.body;

  const result = await NewsletterService.createNewsletter(data);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Newsletter created successfully",
    data: result,
  });
});

const getAllNewsletters = catchAsync(async (req, res) => {
  const result = await NewsletterService.getAllNewsletters();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "All newsletters retrieved successfully",
    data: result,
  });
});

export const NewsletterController = {
  createNewsletter,
  getAllNewsletters,
};
