import { client, dbName } from "../DB/connection.js";
import handleMongoError from "../utils/handleError.js";

async function connectToUserCollection() {
  const database = client.db(dbName);
  const UserCollection = database.collection("users");
  // const userCollection = database.createCollection('users', UserModel)
  return UserCollection;
}

/**
 * @insertOne method
 * @description here i tell that how to use insertOne method to insert a document.
 */
export const howToUseInsertOneQuery = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();
    const user = await userCollection.insertOne(req.body);

    res.status(200).json({
      success: true,
      message: "user is inserted successfully",
      user,
    });
  } catch (error) {
    handleMongoError(res, error);
  }
};

/**
 * @insertMany method
 * @description here i tell that how to use insertMany method to insert a documents.
 */
export const howToUseInsertManyQuery = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();
    const user = await userCollection.insertMany(req.body);

    res.status(200).json({
      success: true,
      message: "user is inserted successfully",
      user,
    });
  } catch (error) {
    console.log("error:", error);
  }
};

/**
 * @find method
 * @description here i tell that how to use find method to find all documents.
 */
export const howToUsefindQuery = async (req, res) => {
  const userCollection = await connectToUserCollection();
  const user = await userCollection.find().toArray();

  res.status(200).json({
    success: true,
    message: "user is fetched successfully",
    user,
  });
};

/**
 * @bulk operation
 * @description here i tell that how to use bulk operation to insert documents.
 * This operation will perform an insert query in unordered way.
 */
export const howToUseUnorderedBulkOperation = async (req, res) => {
  const users = req.body;

  const userCollection = await connectToUserCollection();
  const bulk = await userCollection.initializeUnorderedBulkOp();

  users.map((item) => bulk.insert(item));
  const bulks = await bulk.execute();

  res.status(200).json({
    success: true,
    message: "user is inserted successfully",
    bulks,
  });
};

/**
 * @bulk operation
 * @description here i tell that how to use bulk operation to insert documents.
 * This operation will perform an insert query in ordered way that it first perfom first insertion then second.
 */
export const howToUseOrderedBulkOperation = async (req, res) => {
  const users = req.body;

  const userCollection = await connectToUserCollection();
  const bulk = await userCollection.initializeOrderedBulkOp();

  users.map((item) => bulk.insert(item));
  const bulks = await bulk.execute();

  res.status(200).json({
    success: true,
    message: "user is inserted successfully",
    bulks,
  });
};

/**
 * @bulkWrite operation
 * @description here i tell that how to use bulkWrite operation to perform different queries in bulk.
 * This operation will perform an bulkwrite in ordered way that it first perfom first insertion then second.
 */
export const howToUseOrderedBulkWriteOperation = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();
    const bulk = await userCollection.bulkWrite(
      [
        {
          insertOne: {
            document: {
              name: "test21",
              email: "test2@gmail.com",
              mobile: "555222222",
              age: 24,
              address: {
                street_address: "334 vaishali nagar",
                city: "jaipur",
                state: "rajasthan",
                country: "india",
              },
            },
          },
        },
        {
          updateOne: {
            filter: { name: "test20" },
            update: { $set: { name: "test13" } },
          },
        },
      ],
      { ordered: true }
    );

    res.status(200).json({
      success: true,
      message: "bulkWrite operation is processed successfully",
      bulk,
    });
  } catch (error) {
    handleMongoError(res, error);
  }
};

/**
 * @update method
 * @description here i tell that how to use update method to update the document.
 */
export const howToUseUpdateMethod = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    /** update() method was removed in latest mongodb Driver so, we can use updateOne() and updateMany() method only. */

    /**
     * syntax 
     * db.Collection_name.updateOne({Selection_Criteria},{$set:{Update_Data}}, 
          {
              upsert: <boolean>,
              writeConcern: <document>,
              collation: <document>,
              arrayFilters: [<filterdocument1>, ... ],
              hint: <document|string>        
          })
     */

    /** it is standard way to update the document */
    const user = await userCollection.updateOne(
      { name: "test3" },
      { $set: { name: "test5" } }
    );

    res.status(200).json({
      success: true,
      message: "user is updated successfully",
      user,
    });
  } catch (error) {
    handleMongoError(res, error);
  }
};

/**
 * @update method with @upsert parameter
 * @description here i tell that how to use @upsert parameter. so, basically upsert flag is boolean value it is by default is 'false' and when we set it to 'true' then if find the document which we passed criteria if it is not found then it will create that document in collection.
 */
export const howToUseUpdateMethodWithUpsertParameter = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection.updateOne(
      { name: "test20" },
      { $set: { name: "test10" } },
      {
        upsert: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "user is updated successfully",
      user,
    });
  } catch (error) {
    handleMongoError(res, error);
  }
};

/**
 * @update method with @collation parameter
 * @description here i tell that how to use @collation parameter. so, basically collation Collation allows users to specify language-specific rules for string comparison, such as rules for lettercase and accent marks.
 */
export const howToUseUpdateMethodWithCollationParameter = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection.updateOne(
      { name: "TesT13" },
      { $set: { name: "test13" } },
      {
        collation: { locale: "en", strength: 2 },
      }
    );

    res.status(200).json({
      success: true,
      message: "user is updated successfully",
      user,
    });
  } catch (error) {
    handleMongoError(res, error);
  }
};

/**
 * @updateMany method
 * @description here, we show how to use updateMany method to update multipe document together.
 */
export const howToUseUpdateManyMethod = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    /**
     * syntax
     * db.Collection_name.updateMany({Selection_Criteria},{$set:{Update_Data}}, 
        {
            upsert: <boolean>,
            multi: <boolean>,
            writeConcern: <document>,
            collation: <document>,
            arrayFilters: [<filterdocument1>, ... ],
            hint: <document|string>        
        })
     */

    const user = await userCollection.updateMany(
      { age: 24 },
      { $set: { age: 25 } }
    );

    res.status(200).json({
      success: true,
      message: "user is updated successfully",
      user,
    });
  } catch (error) {
    handleMongoError(res, error);
  }
};

/**
 * @findOneAndUpdate method
 * @description here, we show how to use findOneAndUpdate method to update the document.
 */
export const howToUseFindOneAndUpdate = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection.findOneAndUpdate(
      {
        name: "test21",
      },
      { $set: { name: "test30" } }
    );

    res.status(200).json({
      success: true,
      message: "user is updated successfully",
      user,
    });
  } catch (error) {
    handleMongoError(res, error);
  }
};

/**
 * @findOneAndDelete method
 * @description here, we show how to use findOneAndDelete method to update the document.
 */
export const howToUseFindOneAndDelete = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    await userCollection.findOneAndDelete({
      name: "test30",
    });

    res.status(200).json({
      success: true,
      message: "user is deleted successfully",
    });
  } catch (error) {
    handleMongoError(res, error);
  }
};

/**
 * @findOneAndReplace method
 * @description here, we show how to use findOneAndReplace method to replace the existing document detail on behalf of filter.
 */
export const howToUseFindOneAndReplace = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection.findOneAndReplace(
      { age: 24 },
      {
        name: "ajay",
        age: 25,
        email: "ajay@gmail.com",
        mobile: "515151515",
        address: {
          street_address: "vaishali nagar",
          city: "jaipur",
          state: "rajasthan",
          country: "india",
        },
      }
    );

    res.status(200).json({
      success: true,
      message: "user is updated successfully",
    });
  } catch (error) {
    console.log("error", JSON.stringify(error));
    handleMongoError(res, error);
  }
};

/**
 * @findOneAndReplace method with @returnDocument option
 * @description here, we show how to use findOneAndReplace method with returnDocument parameter to replace the existing document detail on behalf of filter.
 */
export const howToUseFindOneAndReplaceWithReturnDocument = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const user = await userCollection.findOneAndReplace(
      { age: 34 },
      {
        name: "rahul",
        age: 25,
        email: "rahul@gmail.com",
        mobile: "515441515",
        address: {
          street_address: "vaishali nagar",
          city: "jaipur",
          state: "rajasthan",
          country: "india",
        },
      },
      { returnDocument: "after" }
    );

    res.status(200).json({
      success: true,
      message: "user is updated successfully",
      user,
    });
  } catch (error) {
    console.log("error", JSON.stringify(error));
    handleMongoError(res, error);
  }
};

/**
 * @sort method
 * @description This method is basically used to sort the data ascending and descending on the basis of field.
 */
export const howToUseSortMethod = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    // this is ascending order case
    const ascendingOrder = await userCollection
      .find()
      .sort({ age: 1 })
      .toArray();

    //this is desecnding order case
    const descendingOrder = await userCollection
      .find()
      .sort({ age: -1 })
      .toArray();

    res.status(200).json({
      success: true,
      ascendingOrder,
      descendingOrder,
    });
  } catch (error) {
    console.log("error", error);
    handleMongoError(res, error);
  }
};

/**
 * @count method
 * @description This method is basically used to count the on the basis of condition from the table and also give no. of document count present in a collection.
 */
export const howToUseCountMethod = async (req, res) => {
  try {
    const userCollection = await connectToUserCollection();

    const userCount = await userCollection.count();

    res.status(200).json({
      success: true,
      userCount,
    });
  } catch (error) {
    console.log("error", error);
    handleMongoError(res, error);
  }
};
