import express from "express";
import {
  howToUseInsertManyQuery,
  howToUseInsertOneQuery,
  howToUsefindQuery,
  howToUseUnorderedBulkOperation,
  howToUseOrderedBulkOperation,
  howToUseOrderedBulkWriteOperation,
  howToUseUpdateManyMethod,
  howToUseUpdateMethod,
  howToUseUpdateMethodWithUpsertParameter,
  howToUseUpdateMethodWithCollationParameter,
  howToUseFindOneAndUpdate,
  howToUseFindOneAndDelete,
} from "../controller/crudController.js";
import asyncHandler from "../utils/asyncHandler.js";

const router = express.Router();

router.post("/howToUseInsertOneQuery", asyncHandler(howToUseInsertOneQuery));
router.post("/howToUseInsertManyQuery", asyncHandler(howToUseInsertManyQuery));
router.get("/howToUsefindQuery", asyncHandler(howToUsefindQuery));
router.post(
  "/howToUseUnorderedBulkOperation",
  asyncHandler(howToUseUnorderedBulkOperation)
);
router.post(
  "/howToUseOrderedBulkOperation",
  asyncHandler(howToUseOrderedBulkOperation)
);
router.post(
  "/howToUseOrderedBulkWriteOperation",
  asyncHandler(howToUseOrderedBulkWriteOperation)
);

router.post("/howToUseUpdateMethod", asyncHandler(howToUseUpdateMethod));
router.post(
  "/howToUseUpdateMethodWithUpsertParameter",
  asyncHandler(howToUseUpdateMethodWithUpsertParameter)
);
router.post(
  "/howToUseUpdateMethodWithCollationParameter",
  asyncHandler(howToUseUpdateMethodWithCollationParameter)
);

router.post(
  "/howToUseUpdateManyMethod",
  asyncHandler(howToUseUpdateManyMethod)
);

router.post(
  "/howToUseFindOneAndUpdate",
  asyncHandler(howToUseFindOneAndUpdate)
);
router.post(
  "/howToUseFindOneAndDelete",
  asyncHandler(howToUseFindOneAndDelete)
);
export default router;
