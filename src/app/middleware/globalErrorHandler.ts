/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler } from "express";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  console.log("Error: ", err);

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    error: err,
  });
};

export default globalErrorHandler;
