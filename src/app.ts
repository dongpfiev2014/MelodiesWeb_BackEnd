import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD"],
    credentials: true,
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Authorization",
    ],
  })
);

const PORT = process.env.PORT || 4000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, this is the Melodies Web API!");
});

console.log("quần què gì vậy");
console.log("quần què gì vậy");
console.log("quần què gì vậy");

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
