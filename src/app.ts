import express, { Request, Response } from "express";
import fileUpload from "express-fileupload";
import fileRouter from "./routes/files.route";

const app = express();
const PORT = 500;

app.use(express.json());
app.use(fileUpload({ useTempFiles: true, tempFileDir: "./temp" }));
app.use(fileRouter);

app.get("/healthcheck", (req: Request, res: Response) => {
  console.log("hello");
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}/healthcheck`);
});
