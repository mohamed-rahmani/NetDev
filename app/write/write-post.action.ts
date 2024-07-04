"use server";

import { prisma } from "@/lib/prisma";
import { getUser } from "@/src/query/user.query";
import { WritePostFormValues } from "./WritePostForm";

export const createPost = async (values: WritePostFormValues) => {
  //creer un post
  console.log("POST /writePost");
  const user = await getUser();

  const post = prisma.post.create({
    data: {
      content: values.content,
      userId: user.id,
    },
  });
  return (await post).id;
};
