// src/app.ts
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import { RegisterRoutes } from "./routes/routes";
import swaggerDocument from "./swagger/swagger.json";

const app = express();

app.use(cors({
    origin: ["http://localhost:8000", "https://my-cv-project-sooty.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
    preflightContinue: false,
    optionsSuccessStatus: 204,
}));
app.use(express.json());
app.use(cookieParser());

// tsoa routes
RegisterRoutes(app);

// swagger ui
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get("/swagger.json", (req, res) => { res.json(swaggerDocument) });

export default app;
