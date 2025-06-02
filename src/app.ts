import cors from "cors";
import express from "express";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";

const app = express();

// Middleware to parse JSON bodies and enable CORS
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Jakaria finance API!");
});

// Middleware for handling 404 Not Found
app.use(notFound);

// Global error handler
app.use(globalErrorHandler);

export default app;
