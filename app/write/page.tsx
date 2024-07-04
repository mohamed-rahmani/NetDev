import { getUser } from "@/src/query/user.query";
import { WritePostForm } from "./WritePostForm";
import { createPost } from "./write-post.action";

export default async function page() {
  const user = await getUser();
  if (!user) {
    throw new Error("User not found");
  }
  return <WritePostForm user={user} onSubmit={createPost} />;
}
