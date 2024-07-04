import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function notFound() {
  return (
    <Alert className="my-8">
      <AlertTriangle />
      <AlertTitle>Not Found</AlertTitle>
      <AlertDescription>
        You must be logged to see your profil ...
      </AlertDescription>
      <Link href="/" className={buttonVariants({ variant: "link" })}>
        Go Home
      </Link>
    </Alert>
  );
}
