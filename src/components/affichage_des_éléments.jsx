import { useState, useEffect } from 'react';
import Link from 'next/link';
import { RemoveBtn } from './RemoveBtn';
import { HiPencilAlt } from 'react-icons/hi';

export default function ListesAfficher({ places }) {
  const [selectedCategory, setSelectedCategory] = useState('Aucun filtre');
  const [selectedCuisine, setSelectedCuisine] = useState('Tous');

  useEffect(() => {
    setSelectedCuisine('Tous');
  }, [selectedCategory]);

  const filteredPlaces = places.filter(place => {
    if (selectedCategory === 'Aucun filtre') {
      return true; 
    }
    return place.selectedCategory === selectedCategory && (selectedCuisine === 'Tous' || place.typeCuisine === selectedCuisine);
  });

  const cuisineOptions = ['Tous', 'Italien', 'Français', 'Mexicain', 'Chinois'];

  return (
    <div className="flex justify-center">
      <div className="border border-gray-300 rounded-lg p-4 w-1/4">
        <h2 className="text-lg font-bold mb-4">Filtre</h2>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="Aucun filtre">Aucun filtre</option>
          <option value="Restaurant">Restaurant</option>
          <option value="Musée">Musée</option>
          <option value="Bar">Bar</option>
          <option value="Parc">Parc</option>
        </select>
        {selectedCategory === 'Restaurant' && (
          <div className="mt-4">
            <h3 className="text-lg font-bold mb-2">Type de cuisine</h3>
            <select value={selectedCuisine} onChange={(e) => setSelectedCuisine(e.target.value)}>
              {cuisineOptions.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        )}
      </div>
      <div className="w-3/4 p-4">
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((t) => (
            <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start" key={t._id}>
              <div>
                <h2 className="font-bold text-2xl">{t.selectedCategory}</h2>
                <div>{t.typeCuisine}</div>
              </div>
              <div className="flex gap-2">
                <RemoveBtn id={t._id} />
                <Link href={`/editSujet/${t._id}`}>
                  <HiPencilAlt size={24} />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p>Aucun résultat trouvé.</p>
        )}
      </div>
    </div>
  );
}
