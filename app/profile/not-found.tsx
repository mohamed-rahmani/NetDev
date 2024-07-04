import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { LoginButton } from "@/src/feature/layout/auth/LoginButton";

export default function notFound() {
  return (
    <Alert className="my-8 dark:bg-gray-700 bg-gray-400 border">
      <AlertTitle className="text-xl">No profile yet ...</AlertTitle>
      <AlertDescription className="mb-2">
        No problem you can login right here 👇
      </AlertDescription>
      <LoginButton />
    </Alert>
  );
}
