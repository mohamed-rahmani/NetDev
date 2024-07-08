"use server";

import { utapi } from "../../server/uploadthing";

export async function deleteImage(fileKey: string): Promise<void> {
  await utapi.deleteFiles(fileKey);
}
