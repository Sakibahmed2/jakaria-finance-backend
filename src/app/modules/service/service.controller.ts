import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ServiceServices } from "./service.service";

const createService = catchAsync(async (req, res) => {
  const data = req.body;

  const result = await ServiceServices.createService(data);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Service created successfully",
    data: result,
  });
});

const getAllServices = catchAsync(async (req, res) => {
  const result = await ServiceServices.getAllServices();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Services retrieved successfully",
    data: result,
  });
});

const getSingleService = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await ServiceServices.getSingleService(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Service retrieved successfully",
    data: result,
  });
});

const updateService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const result = await ServiceServices.updateService(id, data);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Service updated successfully",
    data: result,
  });
});

const deleteService = catchAsync(async (req, res) => {
  const { id } = req.params;

  await ServiceServices.deleteService(id);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Service deleted successfully",
  });
});

export const ServiceController = {
  createService,
  getAllServices,
  getSingleService,
  updateService,
  deleteService,
};
