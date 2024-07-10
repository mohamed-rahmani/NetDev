import { getAuthSession } from "@/lib/auth";
import { SignInGithubButton } from "@/src/feature/layout/auth/SignInGithubButton";

export default async function Page() {
  const session = await getAuthSession();

  return (
    <div className="mx-auto my-8 p-8 max-w-lg bg-accent rounded-sm">
      <h2 className="text-3xl font-bold mr-auto flex items-center justify-center mb-8">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-fromTitle via-interTitle to-toTitle">
          &lt;ND/&gt;
        </p>
      </h2>
      {session?.user && <div>You are already logged in</div>}
      <div>
        <div className="flex justify-center py-2 text-sm">
          <p>Every good developer should have a GitHub account, right ? 👀</p>
        </div>
        <SignInGithubButton />
      </div>
    </div>
  );
}
