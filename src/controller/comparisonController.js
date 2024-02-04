import { connectToUserCollection } from "../utils/helper.js";
import handleMongoError from "../utils/handleError.js";

/**
 * @$cmp operator
 * @description here i tell that how to use $cmp operator and basically this operator is use in aggregation pipeline.
 */
export const howToUseCmpOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();
    const user = await userCollection
      .aggregate([
        {
          $match: { name: "vinay" },
        },
        {
          $project: {
            result: { $cmp: ["$age", 19] },
          },
        },
      ])
      .toArray();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    handleMongoError(res, error);
  }
};

/**
 * @$gt operator
 * @description here i tell that how to use $gt operator and basically this operator is use to check greater than value.
 */
export const howToUseGtOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();
    const user = await userCollection.find({ age: { $gt: 20 } }).toArray();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    handleMongoError(res, error);
  }
};

/**
 * @$lt operator
 * @description here i tell that how to use $lt operator and basically this operator is use to check less than value.
 */
export const howToUseLtOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();
    const user = await userCollection.find({ age: { $lt: 30 } }).toArray();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    handleMongoError(res, error);
  }
};

/**
 * @$eq operator
 * @description here i tell that how to use $eq operator and basically this operator is use to check equal condition.
 */
export const howToUseEqOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();
    const user = await userCollection.find({ age: { $eq: 28 } }).toArray();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    handleMongoError(res, error);
  }
};

/**
 * @$lte operator
 * @description here i tell that how to use $lte operator and basically this operator is use to check less than equal condition.
 */
export const howToUseLteOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();
    const user = await userCollection.find({ age: { $lte: 28 } }).toArray();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    handleMongoError(res, error);
  }
};

/**
 * @$gte operator
 * @description here i tell that how to use $gte operator and basically this operator is use to check greater than equal condition
 * .
 */
export const howToUseGteOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();
    const user = await userCollection.find({ age: { $gte: 28 } }).toArray();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    handleMongoError(res, error);
  }
};

/**
 * @$ne operator
 * @description here i tell that how to use $ne operator and basically this operator is used when we dont have to check specified condition.
 */
export const howToUseNeOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();
    const user = await userCollection.find({ age: { $ne: 32 } }).toArray();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    handleMongoError(res, error);
  }
};

/**
 * @$in operator
 * @description here i tell that how to use $in operator and basically this operator is used to check that the value exist in array.
 */
export const howToUseInOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();
    const user = await userCollection
      .find({ name: { $in: ["test5", "test6"] } })
      .toArray();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    handleMongoError(res, error);
  }
};

/**
 * @$nin operator
 * @description here i tell that how to use $nin operator and basically this operator is used to check that the value does not exist in array.
 */
export const howToUseNinOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();
    const user = await userCollection
      .find({ name: { $nin: ["test5", "test6"] } })
      .toArray();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    handleMongoError(res, error);
  }
};
