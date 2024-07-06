"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { LoginButton } from "@/src/feature/layout/auth/LoginButton";
import { usePathname, useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Dialog
      open={pathname?.includes("write")}
      onOpenChange={() => router.back()}
    >
      <DialogContent aria-describedby="create post">
        <DialogTitle aria-describedby="create post">Create Post</DialogTitle>
        <Alert className="my-8 dark:bg-gray-700 bg-gray-400 border">
          <AlertTitle>Not logged</AlertTitle>
          <AlertDescription className="mb-2">
            No problem you can login right here 👇
          </AlertDescription>
          <LoginButton />
        </Alert>
      </DialogContent>
    </Dialog>
  );
}
