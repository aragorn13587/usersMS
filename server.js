require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true
});

mongoose.connection.on("error", (err) => {
    console.log("================================================");
    console.log("Connection ERROR: " + err.message);
    console.log("================================================");
});


mongoose.connection.once("open", () => {
  console.log("DB Connected!");
});

//define all models
require("./models/User");

const app = require("./app");

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening on port ${process.env.PORT || 3000}`);
});
