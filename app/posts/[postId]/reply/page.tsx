import { WritePostForm } from "@/app/write/WritePostForm";
import { getAuthSession } from "@/lib/auth";
import { Post } from "@/src/feature/post/Post";
import { getPost } from "@/src/query/post.query";
import { getUser } from "@/src/query/user.query";
import { createReply } from "./write-reply.action";

export default async function PostReply({
  params,
}: {
  params: {
    postId: string;
  };
}) {
  const session = await getAuthSession();
  if (!session) {
    throw new Error("No session");
  }

  const user = await getUser();

  if (!user) {
    throw new Error("User not found");
  }

  const post = await getPost(params.postId, user.id);
  if (!post) {
    throw new Error("Post not found");
  }

  return (
    <div>
      <Post post={post} className="border-b border-l" />
      <WritePostForm
        user={user}
        onSubmit={async (values) => {
          "use server";
          const postParentReplyID = await createReply(post.id, values);
          return postParentReplyID;
        }}
      />
    </div>
  );
}
