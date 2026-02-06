import type { IconItem } from "@/app/Type/Type";
import { useSelector ,useDispatch } from "react-redux";
import { RootState } from "@/app/redux/store"
import { setNameLink } from "@/app/redux/Slice/SliceLinkUser/SliceLinkUser";

export default function LinkSide({ pathIco, nameico, colorIco }: IconItem) {
   const dispatch = useDispatch();

   
   const Linknav = (namelink:string)=>{
    dispatch(setNameLink(namelink))
   }

  return (
    <div className="flex items-center gap-2 hover:text-gray-300 cursor-pointer" 
    onClick={()=>Linknav(nameico)} >
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
      <span style = {{ color:colorIco}}>{nameico}</span>
    </div>
  );
}
