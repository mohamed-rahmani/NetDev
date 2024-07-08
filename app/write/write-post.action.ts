"use server";

import { prisma } from "@/lib/prisma";
import { getUser } from "@/src/query/user.query";
import { WritePostFormValues } from "./WritePostForm";

export const createPost = async (values: WritePostFormValues) => {
  //creer un post
  console.log("POST /writePost");
  const user = await getUser();

  if (!user) {
    throw new Error("User not found");
  }

  const post = prisma.post.create({
    data: {
      content: values.content,
      image: values.image,
      userId: user.id,
    },
  });
  return (await post).id;
};
