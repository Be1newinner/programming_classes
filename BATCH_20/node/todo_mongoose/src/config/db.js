import mongoose from "mongoose";

export default async function connectDB() {
  // 'Fail Fast' PRINCIPLE
  if (!process.env.MONGODB_URI) throw Error("MONGODB_URI is required!");

  await mongoose.connect(process.env.MONGODB_URI);
  console.log("✅ Mongodb is connected!");
}
