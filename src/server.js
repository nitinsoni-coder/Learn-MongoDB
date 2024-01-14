import express from "express";
import { connectDB } from "./DB/connection.js";
import router from "./routes/routes.js";
const PORT = 8000;
const app = express();

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});

connectDB();
