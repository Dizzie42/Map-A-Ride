require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const keys = require("./config/keys");
const cors = require("cors");
const passport = require("passport");
const history = require("connect-history-api-fallback");
const mongoose = require("mongoose");

const app = express();
app.use(history());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

// Import routes
const rideRoutes = require("./routes/api/ride");
const users = require("./routes/api/users");

//Database Config
mongoose
  .connect(process.env.DATABASEURL, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(err => {
    console.log("ERROR connecting to database: ", err.message);
  });

//Passport config
app.use(passport.initialize());
require("./config/passport")(passport);

//Routers
app.use("/api/users", users);
app.use("/api", rideRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "client/build/index.html"));
  });
}

//Start Server
const PORT = keys.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
