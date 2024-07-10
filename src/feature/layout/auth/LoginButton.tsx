"use client";

import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { useTransition } from "react";

export const LoginButton = () => {
  const [isPending, startTransition] = useTransition();
  return (
    <Link href={"/register"}>
      <Button>
        {isPending ? (
          <Loader className="mr-2 h-4 w-4" />
        ) : (
          <LogIn className="mr-2 h-4 w-4" />
        )}
        Login
      </Button>
    </Link>
  );
};
