import { connectToUserCollection } from "../utils/helper.js";
import handleMongoError from "../utils/handleError.js";

/**
 * @$isArray operator
 * @description here i tell that how to use $isArray operator. this operator is used to tell about that field is an array or not.
 */
export const howToUseIsArrayOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection
      .aggregate([
        {
          $match: {
            name: "demo1",
          },
        },
        {
          $project: {
            result: { $isArray: "$fruits" },
          },
        },
      ])
      .toArray();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    handleMongoError(res, error);
  }
};

/**
 * @$size operator
 * @description here i tell that how to use $size operator. this operator is used to tell the size of array.
 */
export const howToUseSizeOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection
      .aggregate([
        {
          $match: {
            name: "demo1",
          },
        },
        {
          $project: {
            sizeOfFruits: { $size: "$fruits" },
          },
        },
      ])
      .toArray();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    handleMongoError(res, error);
  }
};

/**
 * @$arrayElemAt operator
 * @description here i tell that how to use $arrayElemAt operator. This operator is used to return the element present on the specified index of the given array. .
 */
export const howToUseArrayElemAtOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection
      .aggregate([
        {
          $match: {
            name: "demo1",
          },
        },
        {
          $project: {
            lastItem: { $arrayElemAt: ["$fruits", -1] },
          },
        },
      ])
      .toArray();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    handleMongoError(res, error);
  }
};

/**
 * @$concatArrays operator
 * @description here i tell that how to use $concatArrays operator. This operator will concat two or more arrays .
 */
export const howToUseConcatArraysOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection
      .aggregate([
        {
          $match: {
            name: "demo5",
          },
        },
        {
          $project: {
            newArray: { $concatArrays: ["$fruits", "$vegetables"] },
          },
        },
      ])
      .toArray();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    handleMongoError(res, error);
  }
};

/**
 * @$reverseOperator operator
 * @description here i tell that how to use $reverseOperator operator. This operator will reverse the array .
 */
export const howToUseReverseArraysOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection
      .aggregate([
        {
          $match: {
            name: "demo5",
          },
        },
        {
          $project: {
            reversedArr: { $reverseArray: "$fruits" },
          },
        },
      ])
      .toArray();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    handleMongoError(res, error);
  }
};
