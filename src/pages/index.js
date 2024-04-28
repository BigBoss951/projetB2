import Navbar from "@/components/navbar";
import ListesA from "@/components/affichage_des_éléments";
import { useState } from "react";
import Image from 'next/image';
import { useEffect } from 'react';
import { useTheme } from 'next-themes';


export const getServerSideProps = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/route', {
    });
    
    if (!res.ok) {
      throw new Error('Erreur de récupération des sujets');
    }

    const json = await res.json();

    return {
      props: {
        places: json 
      }
    };
  } catch (error) {
    return {
      props: {
        error: error.message
      }
    };
  }
};

export default function Home({ places, error }) {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <>
      <Navbar />
      {error && <div>Error: {error}</div>}
      {places && <ListesA places={places} />}
      <div className="grid place-items-center h-screen">
        <div>
          <div className="flex justify-center">
            {currentTheme === 'dark' ? (
              <button
                className="bg-black-700 hover:bg-black w-28 rounded-md border-purple-400 border-2 p-4"
                onClick={() => setTheme('light')}
              >
                {' '}
                <Image src="/sun.svg" alt="logo" height={50} width={50} />
              </button>
            ) : (
              <button
                className="bg-gray-100 w-28 rounded-md border-purple-400 border-2 p-4 hover:bg-gray-300"
                onClick={() => setTheme('dark')}
              >
                <Image src="/moon.svg" alt="logo" height={50} width={50} />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}