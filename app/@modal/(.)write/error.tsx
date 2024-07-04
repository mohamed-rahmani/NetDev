"use client"; // Error components must be Client Components

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { LoginButton } from "@/src/feature/layout/auth/LoginButton";
import { CircleAlert } from "lucide-react";
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
      open={pathname?.includes("write")}
      onOpenChange={() => router.back()}
    >
      <DialogContent aria-describedby={"create post"}>
        <DialogTitle>Create Post</DialogTitle>
        <Alert className="my-8 dark:bg-red-700 bg-red-400">
          <CircleAlert />
          <AlertTitle>Not logged</AlertTitle>
          <AlertDescription className="mb-2">
            You must be logged to create a post.
          </AlertDescription>
          <LoginButton />
        </Alert>
      </DialogContent>
    </Dialog>
  );
}
