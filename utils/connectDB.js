async function connectDB() {
   if (mongoose.connections[0].readystate) return;
   await mongoose.connect(process.env.MONGODB_URI);
   console.log("Connected to DB");
}
export default connectDB;
