import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/learn-mongo";

export let client, dbName;
export const connectDB = async () => {
  client = new MongoClient(uri);

  try {
    await client.connect();
    dbName = client.db().databaseName;

    console.log("Database is connected");
  } catch (error) {
    console.log("error : ", error);
    console.log("Database is not connected");
  }
};
