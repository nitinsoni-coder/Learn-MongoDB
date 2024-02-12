import { connectToUserCollection } from "../utils/helper.js";
import handleMongoError from "../utils/handleError.js";

/**
 * @$pull operator
 * @description here i tell that how to use $pull operator and basically this operator is use to remove those item from the array which satifies the condition.
 */
export const howToUsePullOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();
    const user = await userCollection.updateOne(
      { name: "demo5" },
      { $pull: { fruits: { $in: ["apple", "grapes"] } } }
    );
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
 * @$pop operator
 * @description here i tell that how to use $pop operator and basically this operator is use to remove last item or first item from the array.
 */
export const howToUsePopOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();
    const user = await userCollection.updateOne(
      { name: "demo5" },
      { $pop: { vegetables: 1 } } // if you pass "1" then it will remove the last item from the array and if you pass -1 then it will remove the first item from the array.
    );
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
 * @$pullAll operator
 * @description here i tell that how to use $pullAll operator and basically this operator is use to remove those item from the array which satifies the condition but $pullAll is different from $pull becuase in $pull operator we have to remove the items from the array using query but in $pullAll we can specify the item names directly to remove.
 */
export const howToUsePullAllOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();
    const user = await userCollection.updateOne(
      { name: "demo5" },
      { $pullAll: { fruits: ["mango", "strawberry"] } }
    );
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
 * @$push operator
 * @description here i tell that how to use $push operator and basically this operator is use to add the item in the array.
 */
export const howToUsePushOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();
    const user = await userCollection.updateOne(
      { name: "demo5" },
      { $push: { fruits: { $each: ["orange", "watermelon"] } } }
    );
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
 * @$push operator with modifiers
 * @description here we will $each, $sort, $slice modifier together
 */
export const howToUsePushOperatorWithModifiers = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();
    const user = await userCollection.updateOne(
      { name: "demo5" },
      {
        $push: {
          fruits: {
            $each: ["dragon fruit", "pomengrate"],
            $sort: 1,
            $slice: 5,
          },
        },
      }
    );
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
 * @$positonal operator
 * @description here, i will tell how to use $ positonal operator. basically it is used to update the specific field from the array whose position we dont know.
 */
export const howToUsePositionalOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();
    const user = await userCollection.updateOne(
      { name: "demo5", fruits: "grapes" },
      { $set: { "fruits.$": "blueberry" } }
    );
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
 * @$position operator
 * @description here, i will tell how to use $position operator. basically it is used to push the item in specific position.
 */
export const howToUsePositionOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();
    const user = await userCollection.updateOne(
      { name: "demo5" },
      {
        $push: {
          fruits: {
            $each: ["grapes"],
            $position: 2,
          },
        },
      }
    );
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
 * @$addToset operator
 * @description here, i will tell how to use $addToset operator. basically it is used to set the item in the array and if that field is not present with array then it will create an new array with that item.
 */
export const howToUseAddToSetOperator = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();
    const user = await userCollection.updateOne(
      { name: "demo5" },
      {
        $addToSet: {
          fruits: {
            $each: ["avacado", "litchi"],
          },
        },
      }
    );
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log("error", error);
    handleMongoError(res, error);
  }
};
