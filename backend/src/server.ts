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
dbConnect();

const app = express();
app.use(express.json());

app.use(cors({
    credentials: true,
    origin: [
        "http://localhost:4200", 
        "https://foodmine-frontend.onrender.com" // 🔹 Replace with your actual frontend URL on Render
    ]
}));

// ✅ API Routes
app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

// ✅ Serve Angular frontend
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '../frontend/dist/frontend')));

// ✅ Handle all other routes and serve Angular index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/frontend/index.html'));
});

// ✅ Use Render's assigned port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
