import { Router } from "express";
import { uploadFileController } from "../controllers/file.controller";

const fileRouter = Router();

fileRouter.post("/upload", uploadFileController);

export default fileRouter;
