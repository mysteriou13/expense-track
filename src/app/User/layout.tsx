import SideMenu from "@/app/components/SideMenu/SideMenu";
import Arrow from "../components/Arrow/Arrow";
import TitleIIndex from "../components/TitleIndex/TitleIIndex";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <div className="bg-(--bguser) h-screen">
      <div className="flex">
        <div>
          <div>
            <SideMenu session={session} />
          </div>

          <div className="relative left-5 top-[35vh]">
            <Arrow />
            <TitleIIndex />
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
