"use strict";
// import dotenv from 'dotenv';
// dotenv.config();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
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
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1["default"].config();
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var food_router_1 = __importDefault(require("./routers/food.router"));
var user_router_1 = __importDefault(require("./routers/user.router"));
var order_router_1 = __importDefault(require("./routers/order.router"));
var database_config_1 = require("./configs/database.config");
(0, database_config_1.dbConnect)();
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
// ✅ Allow CORS for both localhost & Render frontend
app.use((0, cors_1["default"])({
    credentials: true,
    origin: [
        "http://localhost:4200",
        "https://foodmine-frontend.onrender.com" // 🔹 Replace with your actual frontend URL on Render
    ]
}));
// ✅ API Routes
app.use("/api/foods", food_router_1["default"]);
app.use("/api/users", user_router_1["default"]);
app.use("/api/orders", order_router_1["default"]);
// ✅ Serve Angular frontend
var __dirname = path_1["default"].resolve();
app.use(express_1["default"].static(path_1["default"].join(__dirname, '../frontend/dist/frontend')));
// ✅ Handle all other routes and serve Angular index.html
app.get('*', function (req, res) {
    res.sendFile(path_1["default"].join(__dirname, '../frontend/dist/frontend/index.html'));
});
// ✅ Use Render's assigned port
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Server running on port ".concat(port));
});
