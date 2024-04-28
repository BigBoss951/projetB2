import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import EditSujet from '../../components/EditSujet';
import Navbar from '@/components/navbar';

export default function EditSujetPage() {
  const router = useRouter();
  const { id } = router.query;
  const [sujetData, setSujetData] = useState(null);

  useEffect(() => {
    const fetchSujetData = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/sujets/route?id=${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch sujet data');
        }
        const data = await res.json();
        setSujetData(data.topic); 
      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      fetchSujetData();
    }
  }, [id]);

  if (!sujetData) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <Navbar/>
      <EditSujet sujetData={sujetData} id={id} />
    </div>
  );
}

