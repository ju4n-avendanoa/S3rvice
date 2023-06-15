import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { AWS_NAME, AWS_PUBLIC_KEY, AWS_REGION, AWS_SECRET_KEY } from "./config";
import fs from "fs";
import { UploadedFile } from "express-fileupload";

const client = new S3Client({
  region: AWS_REGION,
  credentials: {
    accessKeyId: AWS_PUBLIC_KEY!,
    secretAccessKey: AWS_SECRET_KEY!,
  },
});

export async function uploadFile(file: UploadedFile) {
  const filePath: string = file.tempFilePath;
  const stream = fs.createReadStream(filePath);
  const uploadParams = {
    Bucket: AWS_NAME,
    Key: file.name,
    Body: stream,
  };

  const command = new PutObjectCommand(uploadParams);
  const result = await client.send(command);
  console.log(result);
}
