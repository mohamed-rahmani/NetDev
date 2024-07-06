"use client";

import NotFound from "@/app/posts/[postId]/reply/not-found";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/lib/date";
import { CopyLinkContext } from "@/src/context/CopyLinkContext";
import { PostHome } from "@/src/query/post.query";
import clsx from "clsx";
import Link from "next/link";
import { PropsWithChildren, useState } from "react";
import MorePost from "./MorePost";

type PostLayoutProps = PropsWithChildren<{
  user: PostHome["user"];
  createdAt?: Date;
  className?: string;
  postId?: string;
}>;

export const PostLayout = ({
  className,
  user,
  createdAt,
  postId,
  children,
}: PostLayoutProps) => {
  const [copyNotificationVisible, setCopyNotificationVisible] = useState(false);
  const valueCopyLinkContext = {
    copyNotificationVisible: copyNotificationVisible,
    setCopyNotificationVisible: setCopyNotificationVisible,
  };

  if (!user) {
    return (
      <NotFound
        errorTitle="User not found"
        errorMessage="This post is not found"
      />
    );
  }

  let postLink = "";
  if (typeof window !== "undefined") {
    postLink = window.location + `posts/${postId}`;
  }
  if (copyNotificationVisible) {
    setTimeout(setCopyNotificationVisible, 2000);
  }
  return (
    <CopyLinkContext.Provider value={valueCopyLinkContext}>
      <div
        className={clsx(
          "flex w-full flex-row items-start p-4 relative",
          className
        )}
      >
        <Avatar size="default">
          {user.image ? (
            <AvatarImage src={user.image} alt={user.username} />
          ) : null}
          <AvatarFallback>
            {user.username.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="ml-4 flex w-full flex-col gap-2">
          <div className="flex flex-row items-center gap-2">
            <Link href={`/users/${user.id}`}>
              <p className="text-sm text-card-foreground mr-auto">
                {user.name}
              </p>
            </Link>
            <div className="flex items-center ml-auto">
              {createdAt ? (
                <p className="text-sm text-muted-foreground">
                  {formatDate(createdAt)}
                </p>
              ) : null}
              {postId == undefined ? null : <MorePost postLink={postLink} />}
            </div>
          </div>
          {children}
        </div>
        {copyNotificationVisible ? (
          <div
            className="absolute top-3/4 left-3/4 bg-black text-white dark:bg-white dark:text-black px-2 py-2 text-sm rounded ml-2
                      transition-all duration-200 ease-in-out opacity-100 transform translate-y-0 z-50"
          >
            Copied
          </div>
        ) : (
          <div
            className="absolute top-3/4 left-3/4 bg-black text-white dark:bg-white dark:text-black px-2 py-2 text-sm rounded ml-2
                      transition-all duration-200 ease-in-out opacity-0 transform translate-y-full z-50"
          >
            Copied
          </div>
        )}
      </div>
    </CopyLinkContext.Provider>
  );
};
