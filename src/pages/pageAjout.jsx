"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from '@/components/navbar';

export default function AddTopic() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [typeCuisine, setTypeCuisine] = useState("");
    const [nbEtoiles, setNbEtoiles] = useState("");
    const [prixMoyenRestaurant, setPrixMoyenRestaurant] = useState("");
    const [courantArtistique, setCourantArtistique] = useState("");
    const [typeArt, setTypeArt] = useState("");
    const [gratuitOuPayant, setGratuitOuPayant] = useState("");
    const [prix, setPrix] = useState("");
    const [typeBar, setTypeBar] = useState("");
    const [prixMoyen, setPrixMoyen] = useState("");
    const [typeParc, setTypeParc] = useState("");
    const [publicOuPrive, setPublicOuPrive] = useState("");
    const [gratuitOuPayantParc, setGratuitOuPayantParc] = useState("");
    const [prixParc, setPrixParc] = useState("");

    const router = useRouter();


    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleTypeCuisineChange = (event) => {
        setTypeCuisine(event.target.value);
    };

    const handleNbEtoilesChange = (event) => {
        setNbEtoiles(event.target.value);
    };

    const handlePrixMoyenRestaurantChange = (event) => {
        setPrixMoyenRestaurant(event.target.value);
    };

    const handleCourantArtistiqueChange = (event) => {
        setCourantArtistique(event.target.value);
    };

    const handleTypeArtChange = (event) => {
        setTypeArt(event.target.value);
    };

    const handleGratuitOuPayantChange = (event) => {
        setGratuitOuPayant(event.target.value);
    };

    const handlePrixChange = (event) => {
        setPrix(event.target.value);
    };

    const handleTypeBarChange = (event) => {
        setTypeBar(event.target.value);
    };

    const handlePrixMoyenChange = (event) => {
        setPrixMoyen(event.target.value);
    };

    const handleTypeParcChange = (event) => {
        setTypeParc(event.target.value);
    };

    const handlePublicOuPriveChange = (event) => {
        setPublicOuPrive(event.target.value);
    };

    const handleGratuitOuPayantParcChange = (event) => {
        setGratuitOuPayantParc(event.target.value);
    };

    const handlePrixParcChange = (event) => {
        setPrixParc(event.target.value);
    };

    
    const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedCategory) {
        alert("Veuillez sélectionner une catégorie.");
        return;
    }

    switch (selectedCategory) {
        case "Restaurant": 
            if (!typeCuisine || !nbEtoiles || !prixMoyenRestaurant) {
                alert("Veuillez remplir tous les champs requis pour la catégorie Restaurant.");
                return;
            }
            break;
        case "Musée":
            if (!courantArtistique || !typeArt || (!gratuitOuPayant && prix === "")) {
                alert("Veuillez remplir tous les champs requis pour la catégorie Musée.");
                return;
            }
            break;
        case "Bar": 
            if (!typeBar || !prixMoyen) {
                alert("Veuillez remplir tous les champs requis pour la catégorie Bar.");
                return;
            }
            break;
        case "Parc": 
            if (!typeParc || !publicOuPrive || (!gratuitOuPayantParc && prixParc === "")) {
                alert("Veuillez remplir tous les champs requis pour la catégorie Parc.");
                return;
            }
            break;
        default:
            alert("Veuillez sélectionner une catégorie.");
            return;
    }

    try {
        const res = await fetch("http://localhost:3000/api/route", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                selectedCategory,
                typeCuisine,
                nbEtoiles,
                prixMoyenRestaurant,
                courantArtistique,
                typeArt,
                gratuitOuPayant,
                prix,
                typeBar,
                prixMoyen,
                typeParc,
                publicOuPrive,
                gratuitOuPayantParc,
                prixParc
            }),
        });

        if (res.ok) {
            router.push("/");
        } else {
            throw new Error("Erreur lors de la création");
        }
    } catch (error) {
        console.error("Erreur lors de la soumission des données:", error);
    }
    };

    return(
        <>
            <Navbar/>
            <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
                <label htmlFor="categories" className="block mb-2 font-bold">Choisissez une catégorie :</label>
                <select id="categories" onChange={handleCategoryChange} className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                    <option value="">Sélectionnez une catégorie</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Musée">Musée</option>
                    <option value="Bar">Bar</option>
                    <option value="Parc">Parc</option>
                </select>
            
                {selectedCategory === "Restaurant" && (
                    <div>
                        <label htmlFor="typeCuisine" className="block mb-2 font-bold">Type de cuisine :</label>
                        <input type="text" id="typeCuisine" name="typeCuisine" onChange={handleTypeCuisineChange} className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                    
                        <label htmlFor="nbEtoiles" className="block mb-2 font-bold">Nombre détoiles (de 1 à 3) :</label>
                        <input type="number" id="nbEtoiles" name="nbEtoiles" min="1" max="3" onChange={handleNbEtoilesChange} className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                    
                        <label htmlFor="prixMoyenRestaurant" className="block mb-2 font-bold">Prix moyen (de 1 à 5) :</label>
                        <select id="prixMoyenRestaurant" onChange={handlePrixMoyenRestaurantChange} className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                            <option value="">Sélectionnez</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                )}

                {selectedCategory === "Musée" && (
                    <div>
                        <label htmlFor="courantArtistique" className="block mb-2 font-bold">Courant artistique (uniquement un choix) :</label>
                        <select id="courantArtistique" onChange={handleCourantArtistiqueChange} className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                            <option value="">Sélectionnez un courant artistique</option>
                            <option value="Impressionnisme">Impressionnisme</option>
                            <option value="Surréalisme">Surréalisme</option>
                            <option value="Cubisme">Cubisme</option>
                        </select>

                        <label htmlFor="typeArt" className="block mb-2 font-bold">Type dart (peinture, sculpture, etc...) :</label>
                        <input type="text" id="typeArt" name="typeArt" onChange={handleTypeArtChange} className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />

                        <label htmlFor="gratuitOuPayant" className="block mb-2 font-bold">Gratuit ou payant (gratuit ou de 1 à 5) :</label>
                        <select id="gratuitOuPayant" onChange={handleGratuitOuPayantChange} className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                            <option value="">Sélectionnez</option>
                            <option value="gratuit">Gratuit</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        {gratuitOuPayant !== "gratuit" && (
                            <div>
                                <label htmlFor="prix" className="block mb-2 font-bold">Prix :</label>
                                <input type="number" id="prix" name="prix" onChange={handlePrixChange} className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                        )}
                    </div>
                )}

                {selectedCategory === "Bar" && (
                    <div>
                        <label htmlFor="typeBar" className="block mb-2 font-bold">Type de bar (ex: bar à vin, bar à cocktail, pub, etc...) :</label>
                        <input type="text" id="typeBar" name="typeBar" onChange={handleTypeBarChange} className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />

                        <label htmlFor="prixMoyen" className="block mb-2 font-bold">Prix moyen (de 1 à 5) :</label>
                        <select id="prixMoyen" onChange={handlePrixMoyenChange} className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                            <option value="">Sélectionnez</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                )}
                
                {selectedCategory === "Parc" && (
                    <div>
                        <label htmlFor="typeParc" className="block mb-2 font-bold">Type de parc (ex: parc floral, parc forestier, ...) :</label>
                        <input type="text" id="typeParc" name="typeParc" onChange={handleTypeParcChange} className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                        <label htmlFor="publicOuPrive" className="block mb-2 font-bold">Public ou privé (public ou privé) :</label>
                        <select id="publicOuPrive" onChange={handlePublicOuPriveChange} className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                            <option value="">Sélectionnez</option>
                            <option value="public">Public</option>
                            <option value="privé">Privé</option>
                        </select>
                        
                        <label htmlFor="gratuitOuPayantParc" className="block mb-2 font-bold">Gratuit ou payant (gratuit ou de 1 à 5) :</label>
                        <select id="gratuitOuPayantParc" onChange={handleGratuitOuPayantParcChange} className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500">
                            <option value="">Sélectionnez</option>
                            <option value="gratuit">Gratuit</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        
                        {gratuitOuPayantParc !== "gratuit" && (
                            <div>
                                <label htmlFor="prixParc" className="block mb-2 font-bold">Prix :</label>
                                <input type="number" id="prixParc" name="prixParc" onChange={handlePrixParcChange} className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
                            </div>
                        )}
                    </div>
                )}
                <button onClick={handleSubmit} className="bg-green-600 font-bold text-white py-3 px-5"> Ajouter </button>
            </div>
        </>
    );
}