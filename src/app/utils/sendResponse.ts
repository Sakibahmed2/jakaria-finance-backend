import { Response } from "express";

type TResponse<T> = {
  success?: boolean;
  statusCode?: number;
  message?: string;
  data?: T;
};

const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  res.status(data.statusCode || 200).json({
    success: data.success || true,
    statusCode: data.statusCode || 200,
    message: data.message || "Request was successful",
    data: data.data || null,
  });
};

export default sendResponse;
