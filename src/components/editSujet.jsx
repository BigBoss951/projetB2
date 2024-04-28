import { useState } from "react";
import { useRouter } from "next/router";

export default function EditSujet({ sujetData, id }) {
    const [newSelectedCategory, setNewSelectedCategory] = useState(sujetData.selectedCategory);
    const [newTypeCuisine, setNewTypeCuisine] = useState(sujetData.typeCuisine);
    const [newNbEtoiles, setNewNbEtoiles] = useState(sujetData.nbEtoiles);
    const [newPrixMoyenRestaurant, setNewPrixMoyenRestaurant] = useState(sujetData.prixMoyenRestaurant);
    const [newCourantArtistique, setNewCourantArtistique] = useState(sujetData.courantArtistique);
    const [newTypeArt, setNewTypeArt] = useState(sujetData.typeArt);
    const [newGratuitOuPayant, setNewGratuitOuPayant] = useState(sujetData.gratuitOuPayant);
    const [newPrix, setNewPrix] = useState(sujetData.prix);
    const [newTypeBar, setNewTypeBar] = useState(sujetData.typeBar);
    const [newPrixMoyen, setNewPrixMoyen] = useState(sujetData.prixMoyen);
    const [newTypeParc, setNewTypeParc] = useState(sujetData.typeParc);
    const [newPublicOuPrive, setNewPublicOuPrive] = useState(sujetData.publicOuPrive);
    const [newGratuitOuPayantParc, setNewGratuitOuPayantParc] = useState(sujetData.gratuitOuPayantParc);
    const [newPrixParc, setNewPrixParc] = useState(sujetData.prixParc);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/sujets/route?id=${id}`, {
                method: "PATCH",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    selectedCategory: newSelectedCategory,
                    typeCuisine: newTypeCuisine,
                    nbEtoiles: newNbEtoiles,
                    prixMoyenRestaurant: newPrixMoyenRestaurant,
                    courantArtistique: newCourantArtistique,
                    typeArt: newTypeArt,
                    gratuitOuPayant: newGratuitOuPayant,
                    prix: newPrix,
                    typeBar: newTypeBar,
                    prixMoyen: newPrixMoyen,
                    typeParc: newTypeParc,
                    publicOuPrive: newPublicOuPrive,
                    gratuitOuPayantParc: newGratuitOuPayantParc,
                    prixParc: newPrixParc,
                }),

            });

            if (!res.ok) {
                throw new Error("Failed to update sujet");
            }

            console.log("Sujet mis à jour avec succès!");

            router.push("/");
        } catch (error) {
            console.error("Error updating sujet:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
            <label htmlFor="categories" className="block mb-2 font-bold">Choisissez une catégorie :</label>
            <select
                id="categories"
                value={newSelectedCategory}
                onChange={(e) => setNewSelectedCategory(e.target.value)}
                className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            >
                <option value="">Sélectionnez une catégorie</option>
                <option value="Restaurant">Restaurant</option>
                <option value="Musée">Musée</option>
                <option value="Bar">Bar</option>
                <option value="Parc">Parc</option>
            </select>

            {newSelectedCategory === "Restaurant" && (
                <div>
                    <label htmlFor="typeCuisine" className="block mb-2 font-bold">Type de cuisine :</label>
                    <input
                        type="text"
                        id="typeCuisine"
                        value={newTypeCuisine}
                        onChange={(e) => setNewTypeCuisine(e.target.value)}
                        className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />

                    <label htmlFor="nbEtoiles" className="block mb-2 font-bold">Nombre détoiles (de 1 à 3) :</label>
                    <input
                        type="number"
                        id="nbEtoiles"
                        value={newNbEtoiles}
                        min="1"
                        max="3"
                        onChange={(e) => setNewNbEtoiles(e.target.value)}
                        className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />

                    <label htmlFor="prixMoyenRestaurant" className="block mb-2 font-bold">Prix moyen (de 1 à 5) :</label>
                    <select
                        id="prixMoyenRestaurant"
                        value={newPrixMoyenRestaurant}
                        onChange={(e) => setNewPrixMoyenRestaurant(e.target.value)}
                        className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    >
                        <option value="">Sélectionnez</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            )}

            {newSelectedCategory === "Musée" && (
                <div>
                    <label htmlFor="courantArtistique" className="block mb-2 font-bold">Courant artistique (uniquement un choix) :</label>
                    <select
                        id="courantArtistique"
                        value={newCourantArtistique}
                        onChange={(e) => setNewCourantArtistique(e.target.value)}
                        className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    >
                        <option value="">Sélectionnez un courant artistique</option>
                        <option value="Impressionnisme">Impressionnisme</option>
                        <option value="Surréalisme">Surréalisme</option>
                        <option value="Cubisme">Cubisme</option>
                    </select>

                    <label htmlFor="typeArt" className="block mb-2 font-bold">Type dart (peinture, sculpture, etc...) :</label>
                    <input
                        type="text"
                        id="typeArt"
                        value={newTypeArt}
                        onChange={(e) => setNewTypeArt(e.target.value)}
                        className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />

                    <label htmlFor="gratuitOuPayant" className="block mb-2 font-bold">Gratuit ou payant (gratuit ou de 1 à 5) :</label>
                    <select
                        id="gratuitOuPayant"
                        value={newGratuitOuPayant}
                        onChange={(e) => setNewGratuitOuPayant(e.target.value)}
                        className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    >
                        <option value="">Sélectionnez</option>
                        <option value="gratuit">Gratuit</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    {newGratuitOuPayant !== "gratuit" && (
                        <div>
                            <label htmlFor="prix" className="block mb-2 font-bold">Prix :</label>
                            <input
                                type="number"
                                id="prix"
                                value={newPrix}
                                onChange={(e) => setNewPrix(e.target.value)}
                                className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                    )}
                </div>
            )}

            {newSelectedCategory === "Bar" && (
                <div>
                    <label htmlFor="typeBar" className="block mb-2 font-bold">Type de bar (ex: bar à vin, bar à cocktail, pub, etc...) :</label>
                    <input
                        type="text"
                        id="typeBar"
                        value={newTypeBar}
                        onChange={(e) => setNewTypeBar(e.target.value)}
                        className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />

                    <label htmlFor="prixMoyen" className="block mb-2 font-bold">Prix moyen (de 1 à 5) :</label>
                    <select
                        id="prixMoyen"
                        value={newPrixMoyen}
                        onChange={(e) => setNewPrixMoyen(e.target.value)}
                        className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    >
                        <option value="">Sélectionnez</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
            )}

            {newSelectedCategory === "Parc" && (
                <div>
                    <label htmlFor="typeParc" className="block mb-2 font-bold">Type de parc (ex: parc floral, parc forestier, ...) :</label>
                    <input
                        type="text"
                        id="typeParc"
                        value={newTypeParc}
                        onChange={(e) => setNewTypeParc(e.target.value)}
                        className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <label htmlFor="publicOuPrive" className="block mb-2 font-bold">Public ou privé (public ou privé) :</label>
                    <select
                        id="publicOuPrive"
                        value={newPublicOuPrive}
                        onChange={(e) => setNewPublicOuPrive(e.target.value)}
                        className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    >
                        <option value="">Sélectionnez</option>
                        <option value="public">Public</option>
                        <option value="privé">Privé</option>
                    </select>

                    <label htmlFor="gratuitOuPayantParc" className="block mb-2 font-bold">Gratuit ou payant (gratuit ou de 1 à 5) :</label>
                    <select
                        id="gratuitOuPayantParc"
                        value={newGratuitOuPayantParc}
                        onChange={(e) => setNewGratuitOuPayantParc(e.target.value)}
                        className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    >
                        <option value="">Sélectionnez</option>
                        <option value="gratuit">Gratuit</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>

                    {newGratuitOuPayantParc !== "gratuit" && (
                        <div>
                            <label htmlFor="prixParc" className="block mb-2 font-bold">Prix :</label>
                            <input
                                type="number"
                                id="prixParc"
                                value={newPrixParc}
                                onChange={(e) => setNewPrixParc(e.target.value)}
                                className="block w-full p-2 mb-4 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            />
                        </div>
                    )}
                </div>
            )}

            <button type="submit" className="bg-green-600 font-bold text-white py-3 px-5">Modifier</button>
        </form>
    );
}