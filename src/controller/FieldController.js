import { connectToUserCollection } from "../utils/helper.js";
import handleMongoError from "../utils/handleError.js";

/**
 * @$currentDate operator
 * @description here i tell that how to use $currentDate operator. this operator will set the date/timestamp in the field.
 */
export const howToUseCurrentDateOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection.updateOne(
      { name: "dummy8" },
      {
        $currentDate: {
          createdAt: true,
        },
      }
    );

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
 * @$inc operator
 * @description here i tell that how to use $inc operator. this operator will increment the value by specified value.
 */
export const howToUseIncOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection.updateOne(
      { name: "dummy8" },
      {
        $inc: {
          marks: 2,
        },
      }
    );

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
 * @$min operator
 * @description here i tell that how to use $min operator. this operator will compare the specified value and the field value and set the minimum value among them.
 */
export const howToUseMinOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection.updateOne(
      { name: "dummy8" },
      {
        $min: { marks: 5 },
      }
    );

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
 * @$max operator
 * @description here i tell that how to use $max operator. this operator will compare the specified value and the field value and set the maximum value among them.
 */
export const howToUseMaxOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection.updateOne(
      { name: "dummy8" },
      {
        $max: { marks: 10 },
      }
    );

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
 * @$mul operator
 * @description here i tell that how to use $mul operator. this operator will multiply the value by specified value.
 */
export const howToUseMulOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection.updateOne(
      { name: "dummy8" },
      {
        $mul: { marks: 2 },
      }
    );

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
 * @$rename operator
 * @description here i tell that how to use $rename operator. this operator will rename the existing field.
 */
export const howToUseRenameOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection.updateOne(
      { name: "dummy8" },
      {
        $rename: {
          marks: "score",
        },
      }
    );

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
 * @$setOnInsert operator
 * @description here i tell that how to use $setOnInsert operator. this operator will set the field in the document and if criteria match and if doesn't match then it will insert new document.
 */
export const howToUseSetOnInsertOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection.updateOne(
      { name: "dummy9" },
      {
        $setOnInsert: {
          name: "dummy8",
          email: "dummy8@gmail.com",
          mobile: "5552228882",
          age: 50,
          address: {
            street_address: "334 vaishali nagar",
            city: "jaipur",
            state: "rajasthan",
            country: "india",
          },
          marks: 2,
          salary: 900000,
        },
      },
      {
        upsert: true,
      }
    );

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    handleMongoError(res, error);
  }
};
