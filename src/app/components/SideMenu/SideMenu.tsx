'use client';
import { redirect } from 'next/navigation';
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { useState,useEffect,useMemo } from "react";
import Image from "next/image";
import LinkSide from "../LinkSide/LinkSide";
import type { IconItem } from "@/app/Type/Type";
import type { Session } from "next-auth";
import  {signOut} from "next-auth/react"

interface SideMenuClientProps {
  session: Session | null;
}

export default function SideMenuClient({ session }: SideMenuClientProps) {
  const namelink = useSelector((state: RootState) => state.sliceUser.namelink);

   const [ico] = useState<IconItem[]>([
        {
            pathIco: "M13 18h-2v-2h2v2zm2-4H9v6h6v-6zm4-4.7V4h-3v2.6L12 3 2 12h3l7-6.31L19 12h3l-3-2.7z",
            nameico: 'home',
             colorIco:'var(--colorIco)',
             linkIco:'/User',
        },

        {
            pathIco: 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z',
            nameico: 'Expenses',
            colorIco:'var(--colorIco)',
            linkIco:'/User/Expenses',
        },

        {
            pathIco: 'm15.4 17 1.3 4.4h-1.1L13 17h-3c-.55 0-1-.45-1-1s.45-1 1-1h3l2.6-4.4h1.1L15.4 15h2.85l.75-1h1l-.6 2 .6 2h-1l-.75-1H15.4zM5.75 7 5 6H4l.6 2-.6 2h1l.75-1H8.6l-1.3 4.4h1.1L11 9h3c.55 0 1-.45 1-1s-.45-1-1-1h-3L8.4 2.6H7.3L8.6 7H5.75z',
            nameico: 'Trips',
            colorIco:'var(--colorIco)',
            linkIco:'/User/Trips',
        },
        {
            pathIco: 'M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h5v-2H4v-6h18V6c0-1.11-.89-2-2-2zm0 4H4V6h16v2zm-5.07 11.17-2.83-2.83-1.41 1.41L14.93 22 22 14.93l-1.41-1.41-5.66 5.65z',
            nameico: 'Approvals',
            colorIco:'var(--colorIco)',
            linkIco:'/User/Approvals'
        },
        {
            pathIco: 'M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z',
            nameico: 'Setting',
            colorIco:'var(--colorIco)',
             linkIco:'/User/Setting',
        },

        {
            pathIco: 'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z',
            nameico: 'support',
            colorIco:'var(--colorIco)',
             linkIco:'/User/support'
        }
    ]);

 const memoIco = useMemo(() => {
    return ico.map((icomap) =>
      icomap.nameico === namelink
        ? { ...icomap, colorIco: "var(--activeIco)" } // highlight actif
        : { ...icomap, colorIco: "var(--colorIco)" } // color by défaut
    );
  }, [namelink]);

/*redirection after singout*/
  useEffect(()=>{

    if(!session){
    redirect('/')
    }

  },[session])

  if (!session) return null;

  return (
    <div className="p-4 text-white w-64">
      <div className="flex items-center gap-4 mb-6">
        {/* ico picture*/}
        <Image
          src={session.user?.image ?? ""}
          width={70}
          height={70}
          alt={session.user?.name ?? "User"}
          className="rounded-full"
        />
        <div className="font-bold">{session.user?.name ?? "Utilisateur"}</div>
      </div>

      <div className="space-y-2">
        {memoIco.map((icomap, index) => (
          <LinkSide
            key={index}
            pathIco={icomap.pathIco}
            nameico={icomap.nameico}
            colorIco={icomap.colorIco}
            linkIco= {icomap.linkIco}
          />
        ))}
        
      </div>

      <div  className='cursor-pointer' onClick={()=> signOut()}> deconnection</div>
    </div>
  );
}
