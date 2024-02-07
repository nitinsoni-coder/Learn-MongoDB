import { connectToUserCollection } from "../utils/helper.js";
import handleMongoError from "../utils/handleError.js";

/**
 * @$add operator
 * @description here i tell that how to use $add operator and basically this operator is use in aggregation pipeline to add the values.
 */
export const howToUseAddOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection
      .aggregate([
        {
          $match: {
            name: "test30",
          },
        },
        {
          $project: {
            name: 1,
            totalSalart: {
              $add: ["$firstSalary", "$secondSalary"],
            },
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
 * @$add operator with time example
 * @description here i tell that how to use add time with existing time.
 */
export const howToUseAddOperatorForTime = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection
      .aggregate([
        {
          $match: {
            name: "dummy",
          },
        },
        {
          $project: {
            name: 1,
            extendedTime: {
              $add: ["$expireTime", 5 * 3600000],
            },
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
 * @$subtract operator
 * @description here i tell that how to use $subtract operator and basically this operator is use in aggregation pipeline to subtract the values.
 */
export const howToUseSubtractOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection
      .aggregate([
        {
          $match: {
            name: "dummy",
          },
        },
        {
          $project: {
            name: 1,

            // DeductedSalary: {
            //   $subtract: ["$firstSalary", "$secondSalary"],
            // },

            //if you want to deduct time from existing time
            newTime: {
              $subtract: ["$expireTime", 5 * 3600000],
            },
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
 * @$multiply operator
 * @description here i tell that how to use $multiply operator and basically this operator is use in aggregation pipeline to multiply the values.
 */
export const howToUseMultiplyOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection
      .aggregate([
        {
          $match: {
            name: "test30",
          },
        },
        {
          $project: {
            name: 1,
            newFirstSalary: {
              $multiply: ["$firstSalary", 2],
            },
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
 * @$divide operator
 * @description here i tell that how to use $divide operator and basically this operator is use in aggregation pipeline to divide the values.
 */
export const howToUseDivideOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection
      .aggregate([
        {
          $match: {
            name: "dummy2",
          },
        },
        {
          $project: {
            name: 1,
            newFirstSalary: {
              $divide: ["$salary", 2],
            },
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
 * @$abs operator
 * @description here i tell that how to use $abs operator and basically this operator is use in aggregation pipeline to get the absolute values.
 */
export const howToUseAbsOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection
      .aggregate([
        {
          $match: {
            name: "dummy3",
          },
        },
        {
          $project: {
            name: 1,
            totalSalary: {
              $abs: { $add: ["$first_salary", "$second_salary"] },
            },
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
 * @$floor operator
 * @description here i tell that how to use $floor operator and basically this operator is use in aggregation pipeline to get the floor values.
 */
export const howToUseFloorOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection
      .aggregate([
        {
          $match: {
            name: "dummy5",
          },
        },
        {
          $project: {
            name: 1,
            floor_value: { $floor: "$floor_point" },
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
