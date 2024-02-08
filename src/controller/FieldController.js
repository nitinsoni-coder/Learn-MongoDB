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