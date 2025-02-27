// import dotenv from 'dotenv';
// dotenv.config();

// import express from "express";
// import cors from "cors";
// import foodRouter from "./routers/food.router";
// import userRouter from "./routers/user.router";
// import orderRouter from './routers/order.router';
// import { dbConnect } from './configs/database.config';
// dbConnect();

// const app = express();
// app.use(express.json());
  
// app.use(cors({
//     credentials:true,
//     origin:["http://localhost:4200"]
// }));

// app.use("/api/foods", foodRouter);
// app.use("/api/users", userRouter);
// app.use("/api/orders", orderRouter);

// const port = 5000;
// app.listen(port, () => {
//     console.log("Website served on http://localhost:" + port);
// })

import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import cors from "cors";
import path from "path";

import foodRouter from "./routers/food.router";
import userRouter from "./routers/user.router";
import orderRouter from './routers/order.router';
import { dbConnect } from './configs/database.config';

// Connect to the database
dbConnect();

const app = express();
app.use(express.json());

// Enable CORS for API requests
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"] // Update this to your frontend URL if needed
}));

// Define API routes
app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

// Serve the Angular frontend
const frontendPath = path.join(__dirname, "../../frontend/dist/frontend");

app.use(express.static(frontendPath));

app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
