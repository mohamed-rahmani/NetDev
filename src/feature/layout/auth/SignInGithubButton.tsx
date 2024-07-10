"use client";

import { GithubIcon } from "@/components/icons/GithubIcon";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export const SignInGithubButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams
    ? searchParams.get("callbackUrl") || "/"
    : "/";
  return (
    <button
      className="bg-[#121212] text-white border rounded-md w-full flex justify-center items-center gap-2 p-4"
      onClick={() => signIn("github", { callbackUrl })}
    >
      <GithubIcon size={20} /> Sign in with Github
    </button>
  );
};
