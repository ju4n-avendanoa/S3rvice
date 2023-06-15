import { Request, Response } from "express";
import { getFileByParam, getFiles, uploadFile } from "../s3";
import { UploadedFile } from "express-fileupload";

export async function uploadFileController(req: Request, res: Response) {
  const object = Object.values(req.files!);
  const file = object[0] as UploadedFile;
  await uploadFile(file);
  res.send("Uploaded File");
}

export async function getFilesByParamController(req: Request, res: Response) {
  const { filename } = req.params;
  const file = await getFileByParam(filename);
  res.json(file.$metadata);
}

export async function getFilesController(req: Request, res: Response) {
  const files = await getFiles();
  res.send(files);
}
