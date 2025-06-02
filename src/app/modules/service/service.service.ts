import { Services } from "./service.model";
import { TService } from "./service.type";

const createService = async (data: TService) => {
  const result = await Services.create(data);
  return result;
};

const getAllServices = async () => {
  const result = await Services.find();
  return result;
};

const getSingleService = async (id: string) => {
  const result = await Services.findById(id);
  return result;
};

const updateService = async (id: string, data: TService) => {
  const result = await Services.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
};

const deleteService = async (id: string) => {
  const result = await Services.findByIdAndDelete(id);
  return result;
};

export const ServiceServices = {
  createService,
  getAllServices,
  getSingleService,
  updateService,
  deleteService,
};
