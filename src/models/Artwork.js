import mongoose from "mongoose"

const ArtworkSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String,
  artist: String,
})

export default mongoose.models.Artwork ||
  mongoose.model("Artwork", ArtworkSchema)