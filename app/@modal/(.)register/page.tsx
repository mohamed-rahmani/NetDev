import { getAuthSession } from "@/lib/auth";
import LoginModal from "./LoginModal";

export default async function Page() {
  console.log("Dans page de (.)register");
  const session = await getAuthSession();
  return <LoginModal path="/register" session={session} />;
}
