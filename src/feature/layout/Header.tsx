import { getAuthSession } from "@/lib/auth";
import { ThemeToggle } from "@/src/theme/ThemeToggle";
import { LoginButton } from "./auth/LoginButton";
import { UserProfile } from "./auth/UserProfile";

export const Header = async () => {
  const session = await getAuthSession();
  return (
    <header className="border-b border-b-accent fixed top-0 z-20 bg-background w-full">
      <div className="container flex items-center max-w-lg py-2 m-auto gap-1">
        <h2 className="text-2xl font-bold mr-auto">DevNet</h2>
        <ThemeToggle />
        {session?.user ? <UserProfile /> : <LoginButton />}
      </div>
    </header>
  );
};