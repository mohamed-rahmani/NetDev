import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter: FileRouter = {
  productImage: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
  }).onUploadComplete(async ({ metadata, file }) => {
    const userId = (metadata as any).userId;
    console.log("Upload complete for userId:", userId);
    console.log("file url", file.url);
  }),
};

export type OurFileRouter = typeof ourFileRouter;
