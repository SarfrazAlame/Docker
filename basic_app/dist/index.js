"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/root", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Sarfraz",
            age: 21
        },
        {
            id: 2,
            name: "Ashik",
            age: 19
        }
    ]);
});
app.listen(5000, () => {
    console.log("App is running");
});
