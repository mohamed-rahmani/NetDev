"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { SignInGithubButton } from "@/src/feature/layout/auth/SignInGithubButton";
import { Session } from "next-auth";
import { usePathname, useRouter } from "next/navigation";

export default function LoginModal({
  path,
  session,
}: {
  path: string;
  session: Session | null;
}) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Dialog open={pathname?.includes(path)} onOpenChange={() => router.back()}>
      <DialogContent
        aria-describedby={"create post"}
        className="mx-auto my-8 p-8 max-w-lg bg-accent rounded-sm"
      >
        <DialogTitle>
          <h2 className="text-3xl font-bold mr-auto flex items-center justify-center mb-8">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-fromTitle via-interTitle to-toTitle">
              &lt;ND/&gt;
            </p>
          </h2>
        </DialogTitle>

        {session?.user && <div>You are already logged in</div>}
        <div>
          <div className="flex justify-center py-2 text-sm">
            <p>Every good developer should have a GitHub account, right ? 👀</p>
          </div>
          <SignInGithubButton />
        </div>
      </DialogContent>
    </Dialog>
  );
}
