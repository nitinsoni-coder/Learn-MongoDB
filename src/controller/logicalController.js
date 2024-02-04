import { connectToUserCollection } from "../utils/helper.js";
import handleMongoError from "../utils/handleError.js";

/**
 * @$and operator
 * @description here i tell that how to use $and operator and basically this operator is used to give result if both condition satisfied.
 */
export const howToUseAndOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();
    const user = await userCollection
      .find({ $and: [{ name: "ajay" }, { age: 28 }] })
      .toArray();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log("--error--", error);
    handleMongoError(res, error);
  }
};

/**
 * @$or operator
 * @description here i tell that how to use $or operator and basically this operator is used to give result if either condition satisfied.
 */
export const howToUseOrOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();
    const user = await userCollection
      .find({ $or: [{ name: "ajay" }, { name: "nikhil" }] })
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
 * @$not operator
 * @description here i tell that how to use $not operator and basically this operator is used to give result if specifed condition not satisfied.
 */
export const howToUseNotOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();
    const user = await userCollection
      .find({ age: { $not: { $gt: 30 } } })
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
 * @$nor operator
 * @description here i tell that how to use $nor operator and basically this operator is used to give result if either condition not satisfied.
 */
export const howToUseNorOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();
    const user = await userCollection
      .find({ $nor: [{ name: "test45" }, { age: 50 }] })
      .toArray();

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    handleMongoError(res, error);
  }
};
