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
  const userCollection = await connectToUserCollection();
  const user = await userCollection.insertMany(req.body);

  res.status(200).json({
    success: true,
    message: "user is inserted successfully",
    user,
  });
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
