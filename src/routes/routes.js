import express from "express";
import { howToUseInsertManyQuery, howToUseInsertOneQuery } from "../controller/crudController.js";

const router = express.Router();

router.post("/howToUseInsertOneQuery", howToUseInsertOneQuery);
router.post("/howToUseInsertManyQuery", howToUseInsertManyQuery);

export default router;
