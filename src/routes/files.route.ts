import { Router } from "express";
import {
  getFilesController,
  uploadFileController,
} from "../controllers/file.controller";

const fileRouter = Router();

fileRouter.get("/files", getFilesController);
fileRouter.post("/upload", uploadFileController);

export default fileRouter;
