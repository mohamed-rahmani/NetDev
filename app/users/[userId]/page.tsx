import { Button } from "@/components/ui/button";
import { getAuthSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Post } from "@/src/feature/post/Post";
import { getUserProfile } from "@/src/query/user.query";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { followUser } from "./follow.action";
import { Profile } from "./Profile";

type PageParams = {
  params: {
    userId: string;
  };
};

export const generateMetadata = async ({
  params,
}: PageParams): Promise<Metadata> => {
  const user = await getUserProfile(params.userId);

  if (!user) {
    throw new Error("User not found");
  }

  return {
    title: `${user.name} (${user.username})`,
  };
};

export default async function UserPage({
  params,
}: {
  params: {
    userId: string;
  };
}) {
  const session = await getAuthSession();
  const user = await getUserProfile(params.userId);

  if (!user) {
    return notFound();
  }

  const isFollower = session?.user.id
    ? await prisma.follow.findFirst({
        where: {
          followerId: session?.user.id,
          followingId: user.id,
        },
        select: {
          id: true,
        },
      })
    : false;

  const isCurrentUser = params.userId == session?.user.id;

  if (isCurrentUser) {
    redirect("/profile");
  }
  return (
    <div>
      <Profile user={user}>
        <form className="mt-4">
          <Button
            variant={isFollower ? "outline" : "default"}
            formAction={async () => {
              "use server";
              if (!session?.user.id) {
                return;
              }
              await followUser(params.userId);
            }}
          >
            {isFollower ? "Unfollow" : "Follow"}
          </Button>
        </form>
      </Profile>
      <div className="divide-y divide-accent border-accent mt-4">
        <div className="flex justify-evenly">
          <div className="cursor-pointer">
            <p className="p-4 font-bold">Posts</p>
            <div className="h-1 bg-primary rounded-sm"></div>
          </div>
          <p className="p-4 font-bold text-muted">Galery</p>
          <p className="p-4 font-bold text-muted">Groups</p>
        </div>
        {user.posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
