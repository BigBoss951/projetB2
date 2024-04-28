import connectMongoDB from "../../../libs/mongoDB";
import Topic from "../../../modeles/topic";


const handler = connectMongoDB (async (req, res) => { 
    if (req.method === 'POST') {
        try {
            await connectMongoDB();
            const { selectedCategory, typeCuisine, nbEtoiles, prixMoyenRestaurant, courantArtistique, typeArt, gratuitOuPayant, prix, typeBar, prixMoyen, typeParc, publicOuPrive, gratuitOuPayantParc, prixParc } = req.body;
            
            await Topic.create({
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
            });

            res.status(201).json({ message: "Topic ajouté" });
        } catch (error) {
            console.error("Erreur lors de l'ajout :", error);
            res.status(500).json({ error: "Erreur lors de l'ajout" });
        }
    } else if (req.method === 'GET') {
        try {
            await connectMongoDB();
            const topics = await Topic.find();
            res.status(200).json( topics );
        } catch (error) {
            console.error("Erreur lors de la récupération des sujets :", error);
            res.status(500).json({ error: "Erreur lors de la récupération des sujets" });
        }
    } else if (req.method === 'DELETE') {
        try {
            const id = req.query.id; 
            await connectMongoDB();
            await Topic.findByIdAndDelete(id);
            res.status(200).json({ message: "Topic a été supprimé" });
        } catch (error) {
            console.error("Erreur lors de la suppression du sujet :", error);
            res.status(500).json({ error: "Erreur lors de la suppression du sujet" });
        }
    } else {
        res.status(405).end(); 
    }
    
}
)

export default handler