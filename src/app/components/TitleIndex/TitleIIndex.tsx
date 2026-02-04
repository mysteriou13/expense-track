import { Syncopate } from "next/font/google";

const syncopate = Syncopate({ subsets: ["latin"], weight: "700" });

export default function TitleIIndex() {
  return (
    <div>
      <p className={`${syncopate.className}`}>
        <span className="font-bold text-[#d8fffbff]">EX</span>
        <span className="text-[rgb(146,233,220)]">P</span>
        <span className="text-[rgb(0,218,196)]">EN</span>
        <span className="text-[rgb(0,199,171)]">S</span>
        <span className="text-[rgb(0,168,133)]">I</span>
        <span className="text-[rgb(0,137,102)]">O</span>
      </p>
    </div>
  );
}
