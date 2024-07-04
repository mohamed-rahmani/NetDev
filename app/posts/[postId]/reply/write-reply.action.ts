"use server";

import { WritePostFormValues } from "@/app/write/WritePostForm";
import { prisma } from "@/lib/prisma";
import { getUser } from "@/src/query/user.query";
import { revalidatePath } from "next/cache";

export const createReply = async (
  postId: string,
  values: WritePostFormValues
) => {
  //creer un reply
  console.log("POST /writeReply");
  const user = await getUser();

  if (!user) {
    throw new Error("User not found");
  }

  const post = await prisma.post.create({
    data: {
      content: values.content,
      userId: user.id,
      parentId: postId,
    },
  });
  console.log("POST /writeReply SUCESS");

  revalidatePath(`/posts/${postId}`);

  return postId;
};
