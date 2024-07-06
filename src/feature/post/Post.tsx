"use client";

import { buttonVariants } from "@/components/ui/button";
import { PostHome } from "@/src/query/post.query";
import clsx from "clsx";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { LikeButton } from "./LikeButton";
import { PostLayout } from "./PostLayout";

type PostProps = {
  post: PostHome;
  className?: string;
};

export const Post = ({ post, className }: PostProps) => {
  return (
    <PostLayout
      user={post.user}
      postId={post.id}
      createdAt={post.createdAt}
      className={clsx(className)}
    >
      <Link href={`/posts/${post.id}`}>{post.content}</Link>
      <div className="flex gap-2 items-center">
        <LikeButton postId={post.id} isLiked={post.likes.length > 0} />
        <Link
          className={clsx(buttonVariants({ variant: "ghost", size: "icon" }))}
          href={`/posts/${post.id}/reply`}
        >
          <MessageCircle size={20} />
        </Link>
      </div>
      <div className="flex items-center">
        <Link
          className="text-muted-foreground text-sm"
          href={`/posts/${post.id}`}
        >
          {post._count.likes} likes
        </Link>
        <p className="px-1">⸱</p>
        <Link
          className="text-muted-foreground text-sm"
          href={`/posts/${post.id}`}
        >
          {post._count.replies} comments
        </Link>
      </div>
    </PostLayout>
  );
};
