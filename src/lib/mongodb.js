import mongoose from "mongoose"

const MONGODB_URI =
  "mongodb+srv://sahana_2519:Mindpower.19@cluster0.xr7khjx.mongodb.net/?appName=Cluster0"

export async function connectDB() {

  if (mongoose.connections[0].readyState) {
    return
  }

  await mongoose.connect(MONGODB_URI)

  console.log("MongoDB Connected")
}