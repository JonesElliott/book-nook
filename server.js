require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware junk
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static stuff
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Routes
app.use(routes);

// MonogDB connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
  useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// We can hear you
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
