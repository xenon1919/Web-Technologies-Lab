const { MongoClient } = require("mongodb");

// MongoDB URI and Database Name
const url = "mongodb://127.0.0.1:27017"; // Use 127.0.0.1 to ensure compatibility with local MongoDB
const dbName = "MyDb"; // Database name

// Create a new MongoClient
const client = new MongoClient(url);

(async () => {
  try {
    console.log("Connecting to MongoDB...");
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    // Get the database
    const db = client.db(dbName);

    // Select or create a collection
    const collection = db.collection("items");

    // Example CRUD operations
    // 1. Insert a document
    console.log("Inserting document...");
    const insertResult = await collection.insertOne({
      name: "Item1",
      quantity: 10,
    });
    console.log("Document inserted:", insertResult);

    // 2. Query all documents
    console.log("Fetching documents...");
    const documents = await collection.find().toArray();
    console.log("Documents found:", documents);

    // 3. Update a document
    console.log("Updating document...");
    const updateResult = await collection.updateOne(
      { name: "Item1" }, // Filter criteria
      { $set: { quantity: 20 } } // Update fields
    );
    console.log("Document updated:", updateResult);

    // 4. Delete a document
    console.log("Deleting document...");
    const deleteResult = await collection.deleteOne({ name: "Item1" });
    console.log("Document deleted:", deleteResult);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Ensure the connection is closed
    console.log("Closing MongoDB connection...");
    await client.close();
    console.log("Connection closed.");
  }
})();
