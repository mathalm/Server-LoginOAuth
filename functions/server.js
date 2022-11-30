import express, { Router } from "express";
import cors from "cors";
const app = express();
import serverless from "serverless-http";
import serverRoutes from "../routes/serveRoutes.js";

app.use(cors());
app.use(express.json());
app.use("/.netlify/functions/server", serverRoutes);

const router = Router();

router.get("/json", (req, res) => {
  res.json({
    teste: "Testando teste",
  });
});

module.exports.handler = serverless(app);
