/* eslint-disable @typescript-eslint/no-unused-vars */
import catchAsync from "../utils/catchAsync";

const notFound = catchAsync(async (req, res, next) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: "Api not founded!!",
    data: null,
  });
});

export default notFound;
