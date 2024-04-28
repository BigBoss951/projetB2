import mongoose from "mongoose";

const { Schema } = mongoose;

const topicSchema = new Schema(
    {
        selectedCategory: String,
        typeCuisine: String,
        nbEtoiles: Number,
        prixMoyenRestaurant: Number,
        courantArtistique: String,
        typeArt: String,
        gratuitOuPayant: String,
        prix: Number,
        typeBar: String,
        prixMoyen: Number,
        typeParc: String,
        publicOuPrive: String,
        gratuitOuPayantParc: String,
        prixParc: Number,
    },
    {
        timestamps: true,
    }
);

const Topic = mongoose.models.Topic || mongoose.model('Topic', topicSchema);

export default Topic;
