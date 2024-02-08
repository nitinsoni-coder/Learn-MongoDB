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
  howToUseFindOneAndReplace,
  howToUseFindOneAndReplaceWithReturnDocument,
  howToUseSortMethod,
  howToUseCountMethod,
  howToUseCountDocumentMethod,
  howToUseDropMethod,
  howToUseDeleteOneMethod,
  howToUseDistinctMethod,
  howToUseLimitMethod,
  howToUseSkipMethod,
} from "../controller/crudController.js";
import asyncHandler from "../utils/asyncHandler.js";
import {
  howToUseCmpOperator,
  howToUseEqOperator,
  howToUseGtOperator,
  howToUseGteOperator,
  howToUseInOperator,
  howToUseLtOperator,
  howToUseLteOperator,
  howToUseNeOperator,
  howToUseNinOperator,
} from "../controller/comparisonController.js";
import {
  howToUseAndOperator,
  howToUseNorOperator,
  howToUseNotOperator,
  howToUseOrOperator,
} from "../controller/logicalController.js";
import {
  howToUseAbsOperator,
  howToUseAddOperator,
  howToUseAddOperatorForTime,
  howToUseCeilOperator,
  howToUseDivideOperator,
  howToUseExpOperator,
  howToUseFloorOperator,
  howToUseLnOperator,
  howToUseLog10Operator,
  howToUseLogOperator,
  howToUseModOperator,
  howToUseMultiplyOperator,
  howToUsePowOperator,
  howToUseSqrtOperator,
  howToUseSubtractOperator,
} from "../controller/arithmeticController.js";

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
router.post(
  "/howToUseFindOneAndReplace",
  asyncHandler(howToUseFindOneAndReplace)
);
router.post(
  "/howToUseFindOneAndReplaceWithReturnDocument",
  asyncHandler(howToUseFindOneAndReplaceWithReturnDocument)
);

router.post("/howToUseSort", asyncHandler(howToUseSortMethod));

router.post("/howToUseCount", asyncHandler(howToUseCountMethod));

router.post(
  "/howToUseCountDocumentMethod",
  asyncHandler(howToUseCountDocumentMethod)
);

router.post("/howToUseDropMethod", asyncHandler(howToUseDropMethod));

router.post("/howToUseDeleteOneMethod", asyncHandler(howToUseDeleteOneMethod));

router.post("/howToUseDistinctMethod", asyncHandler(howToUseDistinctMethod));

router.post("/howToUseLimitMethod", asyncHandler(howToUseLimitMethod));

router.post("/howToUseSkipMethod", asyncHandler(howToUseSkipMethod));

// comparison operator routes
router.post("/howToUseCmpOperator", asyncHandler(howToUseCmpOperator));
router.post("/howToUseGtOperator", asyncHandler(howToUseGtOperator));
router.post("/howToUseLtOperator", asyncHandler(howToUseLtOperator));
router.post("/howToUseEqOperator", asyncHandler(howToUseEqOperator));
router.post("/howToUseLteOperator", asyncHandler(howToUseLteOperator));
router.post("/howToUseGteOperator", asyncHandler(howToUseGteOperator));
router.post("/howToUseNeOperator", asyncHandler(howToUseNeOperator));
router.post("/howToUseInOperator", asyncHandler(howToUseInOperator));
router.post("/howToUseNinOperator", asyncHandler(howToUseNinOperator));

//logical operator routes
router.post("/howToUseAndOperator", asyncHandler(howToUseAndOperator));
router.post("/howToUseOrOperator", asyncHandler(howToUseOrOperator));
router.post("/howToUseNotOperator", asyncHandler(howToUseNotOperator));
router.post("/howToUseNorOperator", asyncHandler(howToUseNorOperator));

//arithematic operator routes
router.post("/howToUseAddOperator", asyncHandler(howToUseAddOperator));
router.post(
  "/howToUseAddOperatorForTime",
  asyncHandler(howToUseAddOperatorForTime)
);
router.post(
  "/howToUseSubtractOperator",
  asyncHandler(howToUseSubtractOperator)
);
router.post(
  "/howToUseMultiplyOperator",
  asyncHandler(howToUseMultiplyOperator)
);
router.post("/howToUseDivideOperator", asyncHandler(howToUseDivideOperator));
router.post("/howToUseAbsOperator", asyncHandler(howToUseAbsOperator));
router.post("/howToUseFloorOperator", asyncHandler(howToUseFloorOperator));
router.post("/howToUseCeilOperator", asyncHandler(howToUseCeilOperator));
router.post("/howToUseModOperator", asyncHandler(howToUseModOperator));
router.post("/howToUseSqrtOperator", asyncHandler(howToUseSqrtOperator));
router.post("/howToUsePowOperator", asyncHandler(howToUsePowOperator));
router.post("/howToUseExpOperator", asyncHandler(howToUseExpOperator));
router.post("/howToUseLogOperator", asyncHandler(howToUseLogOperator));
router.post("/howToUseLog10Operator", asyncHandler(howToUseLog10Operator));
router.post("/howToUseLnOperator", asyncHandler(howToUseLnOperator));

//field update operator routes

export default router;
