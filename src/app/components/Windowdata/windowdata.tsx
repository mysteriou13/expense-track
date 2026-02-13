
import { Rubik } from "next/font/google";

 const rubik = Rubik({
    subsets: ["latin"],
  });

export default function Windowdata({ title }: { title: string }) {
 

  return (
    <div className={`${rubik.className} bg-(--bgwindowuser)  w-[30vw] h-[20vw]`}>
      <div className="border-b-2 border-gray-300 ">
      {title}
      </div>

    </div>
  );
}
