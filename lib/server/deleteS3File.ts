import AWS from 'aws-sdk';
import { v2 as cloudinary } from 'cloudinary';



cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export const deleteS3File = async ({
  bucket,
  key,
}: {
  bucket: string;
  key: string;
}) => {
  const s3 = new AWS.S3();
  const bucketName = process.env.S3_BUCKET_NAME;

  const params = { Bucket: bucket, Key: key };

  console.log(`Deleting file ${key} from S3.`);

  await s3.deleteObject(params).promise();

  console.log(`File ${key} deleted from S3.`);

  return { success: true };
};

export const deleteCloudinaryFile = async ({
  publicId,
}: {
  publicId: string;
}) => {
  console.log(`Deleting file ${publicId} from Cloudinary.`);

  await cloudinary.uploader.destroy(publicId);

  console.log(`File ${publicId} deleted from Cloudinary.`);

  return { success: true };
};
