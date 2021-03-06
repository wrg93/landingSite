const express = require("express");

const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

require("./routes/apiRoutes.js")(app)

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://user1:password1@ds115045.mlab.com:15045/heroku_qg1rc356");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});