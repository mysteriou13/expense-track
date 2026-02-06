import SideMenu from "@/app/components/SideMenu/SideMenu";
import Arrow from "@/app/components/Arrow/Arrow";
import TitleIIndex from "@/app/components/TitleIndex/TitleIIndex";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
export default async function page() {
    const session = await getServerSession(authOptions);
  return (
    <div className="bg-[#1B1B1B] h-screen">
      <div>
        <div>
          <SideMenu session={session} />
        </div>
        
        <div className="relative left-5 top-[35vh]">
          <Arrow />
          <TitleIIndex />
        </div>

      </div>
    </div>
  );
}
