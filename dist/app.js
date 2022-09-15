"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// 라우터 import
const routerTest_1 = __importDefault(require("./router/routerTest"));
const category_1 = __importDefault(require("./router/category"));
const app = (0, express_1.default)();
app.get("/", (req, res, next) => {
    res.send("main page");
});
app.use("/router", routerTest_1.default);
app.use("/category", category_1.default);
app.listen(3000, () => {
    console.log("start");
});
