import { WritePostForm } from "@/app/write/WritePostForm";
import { getAuthSession } from "@/lib/auth";
import { Post } from "@/src/feature/post/Post";
import { getPost } from "@/src/query/post.query";
import { getUser } from "@/src/query/user.query";
import NotFound from "./not-found";
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
    return (
      <NotFound
        errorTitle="User not found"
        errorMessage="You must be logged to post a reply."
      />
    );
  }

  const user = await getUser();

  if (!user) {
    return (
      <NotFound
        errorTitle="User not found"
        errorMessage="You must be logged to post a reply."
      />
    );
  }

  const post = await getPost(params.postId, user.id);
  if (!post) {
    return (
      <NotFound
        errorTitle="Post not found"
        errorMessage="This post doesn't exist."
      />
    );
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
