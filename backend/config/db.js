import mongoose from "mongoose";

export async function connectToDB() {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB is successfully connected: ", conn.connection.host);
  } catch (error) {
    console.log("Error connection to MongoDB: ", error.message);
  }
}
