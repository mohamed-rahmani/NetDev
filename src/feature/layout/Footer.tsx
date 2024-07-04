import { buttonVariants } from "@/components/ui/button";
import clsx from "clsx";
import { Home, SquarePen, User } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-2 flex items-center container justify-between gap-1 fixed bottom-0 left-0 right-0 bg-background m-auto border-t border-accent">
      <Link
        href="/"
        className={clsx(buttonVariants({ variant: "ghost" }), "flex-1")}
      >
        <Home size={20} />
      </Link>
      <Link
        href="/write"
        className={clsx(buttonVariants({ variant: "ghost" }), "flex-1")}
      >
        <SquarePen size={20} />
      </Link>
      <Link
        href="/profile"
        className={clsx(buttonVariants({ variant: "ghost" }), "flex-1")}
      >
        <User size={20} />
      </Link>
    </footer>
  );
};
