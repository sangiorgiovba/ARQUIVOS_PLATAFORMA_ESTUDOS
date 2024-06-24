import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      Pagina Home
      <UserButton afterSignOutUrl="/sign-in" /> 


    </div>
  );
}
