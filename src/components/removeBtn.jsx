'use client';

import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";


export function RemoveBtn({ id }) {
    const router = useRouter();
    const removeSujet = async () => {
        const confirmation = confirm("Êtes-vous sûr de vouloir supprimer cette adresse ?")
        if (confirmation) {
            const res = await fetch(`http://localhost:3000/api/route?id=${id}`, {
                method: "DELETE"
            });
            if (res.ok) {
                router.refresh();
            }
        }
    };
    return (
        <button onClick={removeSujet} className="text-red-400">
            <HiOutlineTrash size={24} />
        </button>
    );
}
