import { Request, Response } from "express";
import { getFiles, uploadFile } from "../s3";
import { UploadedFile } from "express-fileupload";

export async function uploadFileController(req: Request, res: Response) {
  const object = Object.values(req.files!);
  const file = object[0] as UploadedFile;
  await uploadFile(file);
  res.send("Uploaded File");
}

export async function getFilesController(req: Request, res: Response) {
  try {
    const files = await getFiles();
    res.send(files);
  } catch {
    console.log("El error esta en el controlador");
  }
}
