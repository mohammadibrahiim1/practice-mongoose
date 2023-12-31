const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
require("dotenv").config();

// routes
const userRouter = require("./routes/user");
const postRouter = require("./routes/post");

// mongodb

// const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.wuwpwwx.mongodb.net/practice-mongoose?retryWrites=true&w=majority`;
mongoose.connect(uri);
console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.use("/api/v1", userRouter);
app.use("/api/v1", postRouter);

app.get("/", (req, res) => {
  res.send("simple node server running");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
