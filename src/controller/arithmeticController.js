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

/**
 * @$ceil operator
 * @description here i tell that how to use $ceil operator and basically this operator is use in aggregation pipeline to get the ceil values.
 */
export const howToUseCeilOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection
      .aggregate([
        {
          $match: {
            name: "dummy6",
          },
        },
        {
          $project: {
            name: 1,
            ceil_value: { $ceil: "$ceil_point" },
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
 * @$mod operator
 * @description here i tell that how to use $mod operator and basically this operator is use in aggregation pipeline. This operator is used to divide one number by another number and return the remainder..
 */
export const howToUseModOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection
      .aggregate([
        {
          $match: {
            name: "dummy7",
          },
        },
        {
          $project: {
            name: 1,
            halfYearPackage: { $mod: ["$fullYearPackage", 2] },
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
 * @$sqrt operator
 * @description here i tell that how to use $mod operator and basically this operator is use in aggregation pipeline.  This operator is used to find the square root of a positive number and returns the result as a double.
 */
export const howToUseSqrtOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection
      .aggregate([
        {
          $match: {
            name: "dummy8",
          },
        },
        {
          $project: {
            name: 1,
            square_root: { $sqrt: "$marks" },
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
 * @$pow operator
 * @description here i tell that how to use $pow operator and basically this operator is use in aggregation pipeline. This operator will double the value as we provide power of that number.
 */
export const howToUsePowOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection
      .aggregate([
        {
          $match: {
            name: "dummy8",
          },
        },
        {
          $project: {
            name: 1,
            powerOfNumber: { $pow: ["$marks", 2] },
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
 * @$exp operator
 * @description here i tell that how to use $exp operator and basically this operator is use in aggregation pipeline. This operator is used to raise Euler’s number (i.e. e ) to the specified exponent and returns the result..
 */
export const howToUseExpOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection
      .aggregate([
        {
          $match: {
            name: "dummy8",
          },
        },
        {
          $project: {
            name: 1,
            result: { $exp: "$marks" },
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
 * @$log operator
 * @description here i tell that how to use $log operator and basically this operator is use in aggregation pipeline. This operator is used to find the log value.
 */
export const howToUseLogOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection
      .aggregate([
        {
          $match: {
            name: "dummy8",
          },
        },
        {
          $project: {
            name: 1,
            logValue: { $log: ["$marks", 2] },
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
 * @$log10 operator
 * @description here i tell that how to use $log10 operator and basically this operator is use in aggregation pipeline. This operator is used to divide one number by another number and return the remainder..
 */
export const howToUseLog10Operator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection
      .aggregate([
        {
          $match: {
            name: "dummy8",
          },
        },
        {
          $project: {
            name: 1,
            log10Value: { $log10: "$marks" },
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
 * @$ln operator
 * @description here i tell that how to use $ln operator and basically this operator is use in aggregation pipeline. This operator is used to find the natural logarithm of a number and returns the result as a double. .
 */
export const howToUseLnOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection
      .aggregate([
        {
          $match: {
            name: "dummy8",
          },
        },
        {
          $project: {
            name: 1,
            naturalLog: { $ln: "$marks" },
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
