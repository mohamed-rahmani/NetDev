"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CopyLinkContext } from "@/src/context/CopyLinkContext";
import { Link as Link1, MoreHorizontal } from "lucide-react";
import { useContext } from "react";

export default function MorePost({ postLink }: { postLink: string }) {
  const { copyNotificationVisible, setCopyNotificationVisible } =
    useContext(CopyLinkContext);
  const copyToClipboard = (pl: string) => {
    const url = pl;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopyNotificationVisible(true);
      })
      .catch((err) => {
        setCopyNotificationVisible(false);
        console.error("Failed to copy URL: ", err);
      });
  };
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="" asChild>
        <Button size="sm" variant="ghost">
          <MoreHorizontal size={20} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <button
            onClick={() => copyToClipboard(postLink)}
            className="inline-flex cursor-pointer"
          >
            <Link1 className="mr-2 h-4 w-4" />
            Copy the link
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
