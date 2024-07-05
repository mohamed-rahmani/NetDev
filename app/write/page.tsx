import { getUser } from "@/src/query/user.query";
import { WritePostForm } from "./WritePostForm";
import NotFound from "./not-found";
import { createPost } from "./write-post.action";

export default async function page() {
  const user = await getUser();
  if (!user) {
    return <NotFound />;
  }
  return <WritePostForm user={user} onSubmit={createPost} />;
}
