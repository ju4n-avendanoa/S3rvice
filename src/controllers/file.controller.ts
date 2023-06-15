import { Request, Response } from "express";
import { uploadFile } from "../s3";
import { UploadedFile } from "express-fileupload";

export async function uploadFileController(req: Request, res: Response) {
  const object = Object.values(req.files!);
  const file = object[0] as UploadedFile;
  console.log(req.files);
  await uploadFile(file);
  res.send("Uploaded File");
}
