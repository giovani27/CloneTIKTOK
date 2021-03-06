import { MongoClient } from "mongodb";

const mongo_uri =
  " mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

export async function openDB() {
  const client = new MongoClient(mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  if (!client.isConnected()) await client.connect();

  return client.db("tiktokclone");
}
