import Link from "next/link";
import {RemoveBtn} from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

export default function ListesA({ places }) {
  return (
    <>
      {places.map((t) => (
        <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start" key={t._id}>
          <div>
            <h2 className="font-bold text-2xl">{t.selectedCategory}</h2>
            <div>{t.typeCuisine}</div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={t._id}/>
            <Link href={`/editSujet/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

