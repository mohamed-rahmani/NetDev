import notFound from "@/app/posts/not-found";
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
  console.log(session);
  if (!session) {
    return notFound();
  }

  const user = await getUser();

  if (!user) {
    return notFound();
  }

  const post = await getPost(params.postId, user.id);
  if (!post) {
    return notFound();
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
