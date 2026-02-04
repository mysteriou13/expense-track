import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import FromConnection from "./components/fromConnection/fromConnection";
import Deconnection from "./components/Deconnection/Deconnection";

import { Syncopate } from 'next/font/google';

const syncopate = Syncopate({ subsets: ['latin'], weight: '700' });
export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {!session ? (
        <div className="h-screen w-screen bg-cover bg-position-[-36px_0px] bg-[url(/back-index.jpg)]">
          <div>
            <div className="font-bold text-white relative left-[48vw] top-[23vh]  w-[31vw] h-[60%] text-[40px]">
              <p className={`${syncopate.className}`}>
              <span className="font-bold text-[#d8fffbff]">EX</span>
              <span className="text-[rgb(146,233,220)]">P</span>
              <span className="text-[rgb(0,218,196)]">EN</span>
              <span className="text-[rgb(0,199,171)]">S</span>
              <span className="text-[rgb(0,168,133)]">I</span>
              <span className="text-[rgb(0,137,102)]">O</span>
              </p>
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
