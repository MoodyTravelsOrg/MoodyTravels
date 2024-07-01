import mongoose from "mongoose";

async function connect() {
  mongoose.connection.on("connected", () => console.log("Connected to MongoDB"));

  mongoose.connection.on("error", (err) => console.log("Error connecting to MongoDB", err));

  mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
}



export default connect;