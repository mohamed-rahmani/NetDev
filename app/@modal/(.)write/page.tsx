import { createPost } from "@/app/write/write-post.action";
import { getUser } from "@/src/query/user.query";
import { WriteModal } from "./WriteModal";

export default async function Page() {
  const user = await getUser();
  if (!user) {
    throw new Error("User not found");
  }
  return <WriteModal path="write" user={user} createPost={createPost} />;
}
