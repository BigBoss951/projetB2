import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

export const getServerSideProps = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/places');

    if (!res.ok) {
      throw new Error('Impossible de fetch les sujets')
    }
    console.log(res.status)
    const json = await res.json();
    console.log(json)
    return {
      props: {
      json
    }}
  } catch (error) {
    return {
      props: {
      json: error
    }}
  }
}

export default function ListesA({json}) {
  console.log(json)
  return (
    <>
      
    </>
  );
}
