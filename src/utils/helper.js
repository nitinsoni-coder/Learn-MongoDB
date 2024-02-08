import { client, dbName } from "../DB/connection.js";
import UserModel from "../models/user.js";

export async function connectToUserCollection() {
  try {
    const database = client.db(dbName);
    const collections = await database.listCollections().toArray();

    const isUserCollectionExist = collections.some(
      (collectionName) => collectionName.name === "users"
    );

    if (!isUserCollectionExist) {
       database.createCollection("users", UserModel);
    }
    const UserCollection = database.collection("users");
    await database.command({
      collMod: "users",
      validator: {
        $jsonSchema: UserModel.validator.$jsonSchema,
      },
    });
    return UserCollection;
  } catch (error) {
    console.log("error : ", error);
  }
}
