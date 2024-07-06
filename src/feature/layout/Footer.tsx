"use client";

import { buttonVariants } from "@/components/ui/button";
import clsx from "clsx";
import { SquarePen } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegUser, FaUser } from "react-icons/fa6";
import { GoHome, GoHomeFill } from "react-icons/go";

export const Footer = () => {
  const path = usePathname();

  return (
    <footer className="flex items-center container justify-between gap-1 fixed bottom-0 left-0 right-0 bg-transparent m-auto border-accent backdrop-blur-md h-16">
      <Link
        href="/"
        className={clsx(buttonVariants({ variant: "ghost" }), "flex-1")}
      >
        {path == "/" ? (
          <GoHomeFill size={26} />
        ) : (
          <GoHome className="fill-current text-gray-500" size={26} />
        )}
      </Link>
      <Link
        href="/write"
        className={clsx(buttonVariants({ variant: "ghost" }), "flex-1")}
      >
        {path == "/write" ? (
          <SquarePen size={24} />
        ) : (
          <SquarePen className="text-gray-500" size={24} />
        )}
      </Link>
      <Link
        href="/profile"
        className={clsx(buttonVariants({ variant: "ghost" }), "flex-1")}
      >
        {path == "/profile" ? (
          <FaUser size={21} />
        ) : (
          <FaRegUser className="text-gray-500" size={21} />
        )}
      </Link>
    </footer>
  );
};
