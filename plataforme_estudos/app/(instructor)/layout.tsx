import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const InstructorLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/sign-in");
  }

  return (
    <div className="h-full flex flex-col">
      <Topbar />

      <div className=" flex1 flex">
        <Sidebar />

        <div className="h-full flex flex-col">{children}</div>
      </div>
    </div>
  );
};

export default InstructorLayout;
