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
        Post not found or you must be logged to interact with a post.
      </AlertDescription>
      <Link href="/" className={buttonVariants({ variant: "link" })}>
        Go Home
      </Link>
    </Alert>
  );
}
