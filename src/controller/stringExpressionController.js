import { connectToUserCollection } from "../utils/helper.js";
import handleMongoError from "../utils/handleError.js";

/**
 * @$concat operator
 * @description here i tell that how to use $concat operator and basically this operator is use to concat the two or more string.
 */
export const howToUseConcatStringOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection
      .aggregate([
        {
          $match: {
            name: "demo6",
          },
        },
        {
          $project: {
            username: { $concat: ["$first_name", "$last_name"] },
          },
        },
      ])
      .toArray();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log("error", error);
    handleMongoError(res, error);
  }
};

/**
 * @$strcasecmp operator
 * @description here i tell that how to use $strcasecmp operator and basically this operator is use to compare the string .
 */
export const howToUseStrCaseCmpStringOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection
      .aggregate([
        {
          $match: {
            name: "demo6",
          },
        },
        {
          $project: {
            username: { $strcasecmp: ["$first_name", "$last_name"] },
          },
        },
      ])
      .toArray();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log("error", error);
    handleMongoError(res, error);
  }
};

/**
 * @$toUpper operator
 * @description here i tell that how to use $toUpper operator and basically this operator is use to convert lower string to upper string.
 */
export const howToUseToUpperStringOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection
      .aggregate([
        {
          $match: {
            name: "demo6",
          },
        },
        {
          $project: {
            username: { $toUpper: "$first_name" },
          },
        },
      ])
      .toArray();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log("error", error);
    handleMongoError(res, error);
  }
};

/**
 * @$toLower operator
 * @description here i tell that how to use $toLower operator and basically this operator is used to convert upper string into lower string .
 */
export const howToUseToLowerStringOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection
      .aggregate([
        {
          $match: {
            name: "demo6",
          },
        },
        {
          $project: {
            username: { $toLower: "$first_name" },
          },
        },
      ])
      .toArray();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log("error", error);
    handleMongoError(res, error);
  }
};
