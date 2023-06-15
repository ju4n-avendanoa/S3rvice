import { Router } from "express";
import {
  getFilesByParamController,
  getFilesController,
  uploadFileController,
} from "../controllers/file.controller";

const fileRouter = Router();

fileRouter.get("/files", getFilesController);
fileRouter.get("/files/:filename", getFilesByParamController);
fileRouter.post("/upload", uploadFileController);

export default fileRouter;
