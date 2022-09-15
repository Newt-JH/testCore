import express, { Request, Response, NextFunction } from "express";
import { cateAll } from "../database/category";

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const categoryRead: any = await cateAll();
        console.log(categoryRead);
        res.send(categoryRead)
    } catch(err) {
        res.send(err);
    }

});

export = router;