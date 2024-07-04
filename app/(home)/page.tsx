import { getAuthSession } from "@/lib/auth";
import { Post } from "@/src/feature/post/Post";
import { getLatestPosts } from "@/src/query/post.query";

export default async function Home() {
  const session = await getAuthSession();

  const posts = await getLatestPosts(session?.user.id);

  return (
    <div className="divide-y divide-muted">
      {posts.map((p) => (
        <Post key={p.id} post={p} className="border-l border-r" />
      ))}
    </div>
  );
}
