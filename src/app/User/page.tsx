import SideMenu from "@/app/components/SideMenu/SideMenu";
import Arrow from "@/app/components/Arrow/Arrow";
import TitleIIndex from "@/app/components/TitleIndex/TitleIIndex";

export default async function page() {
  return (
    <div className="bg-[#1B1B1B] h-screen">
      <div>
        <div>
          <SideMenu />
        </div>
        
        <div className="relative left-5 top-[35vh]">
          <Arrow />
          <TitleIIndex />
        </div>

      </div>
    </div>
  );
}
