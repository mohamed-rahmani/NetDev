import { getAuthSession } from "@/lib/auth";
import { Post } from "@/src/feature/post/Post";
import { getLatestPosts } from "@/src/query/post.query";

export default async function Home() {
  const session = await getAuthSession();

  const posts = await getLatestPosts(session?.user.id);

  return (
    <div className="divide-y-[.5px] divide-[#454545] border-r-[0.5px] border-l-[0.5px] border-[#454545] dark:bg-[#242424]">
      {posts.map((p) => (
        <Post key={p.id} post={p} className="" />
      ))}
    </div>
  );
}
