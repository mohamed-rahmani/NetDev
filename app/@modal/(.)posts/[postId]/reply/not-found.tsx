"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { LoginButton } from "@/src/feature/layout/auth/LoginButton";
import { usePathname, useRouter } from "next/navigation";

export default function NotFound({
  errorTitle,
  errorMessage,
}: {
  errorTitle: string;
  errorMessage: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Dialog
      open={pathname?.includes("reply")}
      onOpenChange={() => router.back()}
    >
      <DialogContent aria-describedby={"create post"}>
        <DialogTitle>Post your reply</DialogTitle>
        <Alert className="my-8 dark:bg-gray-700 bg-gray-400 border">
          <AlertTitle>{errorTitle}</AlertTitle>
          <AlertDescription className="mb-2">{errorMessage}</AlertDescription>
          <LoginButton />
        </Alert>
      </DialogContent>
    </Dialog>
  );
}
