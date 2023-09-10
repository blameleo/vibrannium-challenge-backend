require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { campaignRouter } = require("./routes/campaignRoutes");

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use("/campaigns", campaignRouter);

mongoose.connect(process.env.MONGODB_URL);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
