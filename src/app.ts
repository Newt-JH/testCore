import express, { Request, Response, NextFunction } from "express";

// 라우터 import
import router from "./router/routerTest";
import category from "./router/category";

const app = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("main page");
});

app.use("/router", router);
app.use("/category", category);

app.listen(3000, () => {
  console.log("start");
});
