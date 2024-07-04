"use client"; // Error components must be Client Components

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { LoginButton } from "@/src/feature/layout/auth/LoginButton";
import { CircleAlert } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Dialog
      open={pathname?.includes("reply")}
      onOpenChange={() => router.back()}
    >
      <DialogContent aria-describedby={"create post"}>
        <DialogTitle>Post your reply</DialogTitle>
        <Alert className="my-8 dark:bg-red-700 bg-red-400">
          <CircleAlert />
          <AlertTitle>{error.message}</AlertTitle>
          <AlertDescription className="mb-2">
            {error.message == "No session" &&
              "You must be logged to reply a post."}
            {error.message == "User not found" &&
              "You must be logged to reply a post."}
            {error.message == "Post found" && "This post doesn't exist."}
          </AlertDescription>
          {error.message == "No session" || "User not found" ? (
            <LoginButton />
          ) : (
            <Link href="/">Go home</Link>
          )}
        </Alert>
      </DialogContent>
    </Dialog>
  );
}
