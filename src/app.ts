import cors from "cors";
import express from "express";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";
import { servicesRouter } from "./app/modules/service/service.routes";
import { blogRouter } from "./app/modules/blog/blog.routes";
import { authRouter } from "./app/modules/auth/auth.routes";
import { newsletterRouter } from "./app/modules/newsletter/newsletter.route";

const app = express();

// Middleware to parse JSON bodies and enable CORS
app.use(
  cors({
    credentials: true,
    origin: [
      "http://jakaria.finance",
      "https://finance-tech.vercel.app",
      "https://jakaria.finance",
      "http://localhost:3000",
      "https://www.jakaria.finance",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  })
);
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(express.json({ limit: "10mb" }));

// Routers
app.use("/api/v1/services", servicesRouter);
app.use("/api/v1/blogs", blogRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/newsletter", newsletterRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Jakaria finance API!");
});

// Middleware for handling 404 Not Found
app.use(notFound);

// Global error handler
app.use(globalErrorHandler);

export default app;
