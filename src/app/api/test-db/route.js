import { connectDB } from "@/lib/mongodb"
import Artwork from "@/models/Artwork"

export async function GET() {

  try {

    await connectDB()

    const newArtwork = await Artwork.create({
      title: "Ocean Dreams",
      price: 200,
      image: "https://picsum.photos/300",
      artist: "Sahana",
    })

    return Response.json({
      success: true,
      artwork: newArtwork,
    })

  } catch (error) {

    return Response.json({
      success: false,
      error: error.message,
    })

  }
}