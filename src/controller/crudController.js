import { client } from "../DB/connection.js";

async function connectToUserCollection() {
  await client.connect();
  const dbName = client.db().databaseName;

  const database = client.db(dbName);
  const UserCollection = database.collection("users");

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
    console.log("error :", error);
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


