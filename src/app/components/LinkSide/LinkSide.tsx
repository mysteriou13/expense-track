"use client"
import { useRouter } from 'next/navigation'
import { useMemo } from "react";
import type { IconItem } from "@/app/Type/Type";
import { useDispatch } from "react-redux";
import { setNameLink } from "@/app/redux/Slice/SliceLinkUser/SliceLinkUser";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
});

export default function LinkSide({ pathIco, nameico, colorIco, linkIco }: IconItem) {

  const dispatch = useDispatch();
  const router = useRouter();

  const Linknav = (namelink: string) => {
    dispatch(setNameLink(namelink));
    router.push(linkIco)
  };

  const LinkSidestyle = " h-[6vh] flex items-center gap-2 hover:text-gray-300 cursor-pointer";

  const classBorder = "bg-[--borderlinkside] rounded-lg border border-[var(--borderlinkside)] ";

  /*change style lien after click*/
  const currentStyle = useMemo(() => {
    if (colorIco === "var(--activeIco)") {
      return `${LinkSidestyle} ${classBorder}`;
    } else {
      return `${LinkSidestyle}`;
    }
  }, [colorIco]);

  return (
    <div className={currentStyle} onClick={() => Linknav(nameico)}>
      <svg
        width={27}
        height={27}
        viewBox="0 0 24 24"
        fill={colorIco}
        style={{ overflow: "visible", margin: "0px 9px 0px 0px" }}
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d={pathIco} />
      </svg>
      <span className={rubik.className} style={{ color: colorIco }}>
        {nameico}
      </span>
    </div>
  );
}
