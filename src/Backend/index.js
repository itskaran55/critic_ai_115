import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import authRoutes from "./Routes/authRoutes.js"

dotenv.config();
const app = express();

app.use(cors())
// app.use(cors({
//     origin: "http://172.20.10.2:5000",  // Change this to your frontend IP
//     credentials: true 
// }));
app.use(express.json());

// DB Connection

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log("DB Connected Successfully"))
.catch(e => console.log(e));

app.use("/api",authRoutes)

// const port = 5000;
// app.listen(port, () => console.log(`Server is running on ${port}`))

const port = 5000;
app.listen(port, "0.0.0.0", () => {
    console.log(`Server is running on ${port}`);
});
