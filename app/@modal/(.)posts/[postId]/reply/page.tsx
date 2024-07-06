import { WriteModal } from "@/app/@modal/(.)write/WriteModal";
import { createReply } from "@/app/posts/[postId]/reply/write-reply.action";
import { getUser } from "@/src/query/user.query";
import NotFound from "./not-found";

export default async function Page({ params }: { params: { postId: string } }) {
  const user = await getUser();

  if (!user) {
    return (
      <NotFound
        errorTitle="Not logged"
        errorMessage="No problem you can login right here 👇"
      />
    );
  }
  return (
    <WriteModal
      path="reply"
      user={user}
      createPost={async (values) => {
        "use server";
        const postParentReplyID = await createReply(params.postId, values);
        return postParentReplyID;
      }}
    />
  );
}
