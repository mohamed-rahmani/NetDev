import NotFound from "@/app/posts/[postId]/reply/not-found";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getAuthSession } from "@/lib/auth";
import { User2 } from "lucide-react";
import Link from "next/link";
import { DropdownMenuItemLogout } from "./LogoutButton";

export const UserProfile = async () => {
  const session = await getAuthSession();
  if (!session) {
    return (
      <NotFound
        errorTitle="Not logged"
        errorMessage="No problem you can login right here 👇"
      />
    );
  }
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        {session?.user.name ? (
          <Avatar size="default">
            {session?.user.image ? (
              <AvatarImage
                height={10}
                width={10}
                src={session?.user.image}
                alt={session?.user.name}
                className="cursor-pointer"
              />
            ) : null}
            <AvatarFallback>
              {session?.user.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        ) : (
          ""
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href="/profile">
            <User2 className="mr-2 h-4 w-4" />
            Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItemLogout />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
