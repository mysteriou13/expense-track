import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import FromConnection from "./components/fromConnection/fromConnection";
import Deconnection from "./components/Deconnection/Deconnection";
export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {!session ? (
        <FromConnection />
      ) : (
        <div>Bienvenue, {session.user?.name}<Deconnection/> </div>
      )}
    </div>
  );
}
