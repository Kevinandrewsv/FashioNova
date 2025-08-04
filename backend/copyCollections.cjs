const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://kevinandrews001:kevinandrews18@cluster0.epv7i.mongodb.net"; // Replace if your MongoDB URI is different

const client = new MongoClient(uri);

async function copyCollection(sourceDbName, targetDbName, collectionName) {
  const sourceCollection = client.db(sourceDbName).collection(collectionName);
  const targetCollection = client.db(targetDbName).collection(collectionName);

  const docs = await sourceCollection.find({}).toArray();

  if (docs.length > 0) {
    await targetCollection.insertMany(docs);
    console.log(`Copied ${docs.length} documents from ${sourceDbName}.${collectionName} to ${targetDbName}.${collectionName}`);
  } else {
    console.log(`No documents to copy in ${sourceDbName}.${collectionName}`);
  }
}

async function run() {
  try {
    await client.connect();

    const sourceDb = "test";
    const targetDb = "e-commerce";

    const collections = ["products", "users", "orders"]; // Add more if needed

    for (const name of collections) {
      await copyCollection(sourceDb, targetDb, name);
    }

  } catch (err) {
    console.error("Error copying collections:", err);
  } finally {
    await client.close();
  }
}

run();
