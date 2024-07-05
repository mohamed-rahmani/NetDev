import { getAuthSession } from "@/lib/auth";
import { Post } from "@/src/feature/post/Post";
import { getPostView } from "@/src/query/post.query";
import clsx from "clsx";
import NotFound from "./reply/not-found";

export default async function PostView({
  params,
}: {
  params: {
    postId: string;
  };
}) {
  const session = await getAuthSession();
  const post = await getPostView(params.postId, session?.user.id);

  if (!post) {
    return (
      <NotFound
        errorTitle="Post not found"
        errorMessage="This post doesn't exist."
      />
    );
  }

  return (
    <div className="divide-y divide-accent">
      {post.parent && (
        <Post post={post.parent} key={post.parent.id} className="border-b" />
      )}
      <div className={clsx({ "ml-10": post.parent })}>
        <Post
          post={post}
          key={post.id}
          className={clsx({ "border-l": post.parent }, "border-b")}
        />
        <div className="ml-8 divide-y divide-accent">
          {post.replies.map((reply) => (
            <Post post={reply} key={reply.id} className="border-l border-b" />
          ))}
        </div>
      </div>
    </div>
  );
}
