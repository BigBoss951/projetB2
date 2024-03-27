import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";


export function ListesA() {
    return (
        <>
        <div
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
          <div>
            <h2 className="font-bold text-2xl">titre du resto</h2>
            <div>description du resto</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn/>
            <Link href={`/caca`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      </>
  );
}