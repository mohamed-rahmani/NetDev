import { createPost } from "@/app/write/write-post.action";
import { getUser } from "@/src/query/user.query";
import { WriteModal } from "./WriteModal";
import NotFound from "./not-found";

export default async function Page() {
  const user = await getUser();
  if (!user) {
    return <NotFound />;
  }
  return <WriteModal path="write" user={user} createPost={createPost} />;
}
