import connectMongoDB from "../../../../libs/mongoDB";
import Topic from "../../../../modeles/topic";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const id = req.query.id;
            await connectMongoDB();
            const topic = await Topic.findOne({ _id: id });

            if (!topic) {
                return res.status(404).json({ error: "Le sujet n'a pas été trouvé" });
            }

            res.status(200).json({ topic });
        } catch (error) {
            console.error("Erreur lors de la récupération du sujet :", error);
            res.status(500).json({ error: "Erreur lors de la récupération du sujet" });
        }
    } else if (req.method === 'PATCH') {
        try {
            const id = req.query.id;
            const { selectedCategory, typeCuisine, nbEtoiles, prixMoyenRestaurant, courantArtistique, typeArt, gratuitOuPayant, prix, typeBar, prixMoyen, typeParc, publicOuPrive, gratuitOuPayantParc, prixParc } = req.body;

            await connectMongoDB();
            const updatedTopic = await Topic.findByIdAndUpdate(id, {
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
            }, { new: true });

            if (!updatedTopic) {
                return res.status(404).json({ error: "Le sujet n'a pas été trouvé" });
            }

            res.status(200).json({ message: "Sujet mis à jour", updatedTopic });
        } catch (error) {
            console.error("Erreur lors de la mise à jour du sujet :", error);
            res.status(500).json({ error: "Erreur lors de la mise à jour du sujet" });
        }
    } else {
        res.status(405).end();
    }
}
