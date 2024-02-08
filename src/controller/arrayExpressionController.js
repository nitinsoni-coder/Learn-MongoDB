import { connectToUserCollection } from "../utils/helper.js";
import handleMongoError from "../utils/handleError.js";

/**
 * @$isArray operator
 * @description here i tell that how to use $isArray operator. this operator is used to tell about that field is an array or not.
 */
export const howToUseIsArrayOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection.aggregate([
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
    ]);

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    handleMongoError(res, error);
  }
};
