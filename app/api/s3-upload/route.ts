import { NextRequest, NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function POST(req: NextRequest) {
  const buffer = Buffer.from(await req.arrayBuffer());

  return new Promise((resolve) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: 'auto', type: 'upload', access_mode: 'public' },
      (error, result) => {
        if (error || !result) {
          resolve(
            NextResponse.json({ error: error?.message || 'Upload failed' }, { status: 500 })
          );
        } else {
          resolve(
            NextResponse.json({ url: result.secure_url, public_id: result.public_id }, { status: 200 })
          );
        }
      }
    );
    uploadStream.end(buffer);
  });
}
