import cors from "cors";
import express from "express";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
import { servicesRouter } from "./app/modules/service/service.routes";
import { blogRouter } from "./app/modules/blog/blog.routes";

const app = express();

// Middleware to parse JSON bodies and enable CORS
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true, limit: "1mb" }));

// Routers
app.use("/api/v1/services", servicesRouter);
app.use("/api/v1/blogs", blogRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Jakaria finance API!");
});

// Middleware for handling 404 Not Found
app.use(notFound);

// Global error handler
app.use(globalErrorHandler);

export default app;
