import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import FromConnection from "./components/fromConnection/fromConnection";
import Deconnection from "./components/Deconnection/Deconnection";
import Arrow from "./components/Arrow/Arrow";
import TitleIIndex from "./components/TitleIndex/TitleIIndex";
export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {!session ? (
        <div className="h-screen w-screen bg-cover bg-position-[-36px_0px] bg-[url(/back-index.jpg)]">
          <div>
            <div className="font-bold text-white relative left-[44vw] top-[23vh]  w-[31vw] h-[60%] text-[40px]">
              <Arrow />
              <TitleIIndex />
            </div>
            <div>
              <FromConnection />
            </div>
          </div>
        </div>
      ) : (
        <div>
          Bienvenue, {session.user?.name}
          <Deconnection />{" "}
        </div>
      )}
    </div>
  );
}
