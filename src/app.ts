import express from "express";
import cors from "cors";

const app = express();

// Middleware to parse JSON bodies and enable CORS
app.use(express.json());
app.use(cors());

export default app;
