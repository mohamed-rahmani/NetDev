import { buttonVariants } from "@/components/ui/button";
import { getAuthSession } from "@/lib/auth";
import { Post } from "@/src/feature/post/Post";
import { getUserProfile } from "@/src/query/user.query";
import Link from "next/link";
import { Profile } from "../users/[userId]/Profile";
import notFound from "./not-found";

export default async function ProfilePage() {
  const session = await getAuthSession();

  if (!session?.user.id) {
    return notFound();
  }

  const user = await getUserProfile(session.user.id);

  if (!user) {
    return notFound();
  }

  return (
    <div>
      <Profile user={user}>
        <form className="mt-4">
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="/profile/edit"
          >
            Edit Profile
          </Link>
        </form>
      </Profile>
      <div className="divide-y divide-accent border-accent mt-4">
        <div className="flex justify-evenly">
          <div className="cursor-pointer">
            <p className="p-4 font-bold">Posts</p>
            <div className="h-1 bg-primary rounded-sm"></div>
          </div>
        </div>
        {user.posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
