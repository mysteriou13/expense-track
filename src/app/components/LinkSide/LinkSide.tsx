import type { IconItem } from "@/app/Type/Type";

export default function LinkSide({ pathIco, nameico, colorIco }: IconItem) {
  return (
    <div className="flex items-center gap-2 hover:text-gray-300 cursor-pointer">
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
      <span>{nameico}</span>
    </div>
  );
}
