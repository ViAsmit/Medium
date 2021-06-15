const mongoose = require("mongoose");
require("dotenv").config();

let dbURI = process.env.DB;

if (process.env.NODE_ENV === "production") {
  dbURI = process.env.MONGODB_URI;
}

mongoose.connect(dbURI, { useNewUrlParser: true });

console.log("======================");
console.log("Connected to MongoDB");
console.log("======================");

mongoose.connection.on("connected", () => {
  console.log("======================");
  console.log(`Mongoose connected to ${dbURI.substr(0, 15)}`);
  console.log("======================");
});

mongoose.connection.on("error", (err) => {
  console.log(`Mongoose connection error: ${err}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnectedddddd");
});

const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log(`Mongoose disconnected through ${msg}`);
    callback();
  });
};

// For nodemon restarts
process.once("SIGUSR2", () => {
  gracefulShutdown("nodemon restart", () => {
    process.kill(process.pid, "SIGUSR2");
  });
});

// For app termination
process.on("SIGINT", () => {
  gracefulShutdown("app termination", () => {
    process.exit(0);
  });
});

// For Heroku app termination
process.on("SIGTERM", () => {
  gracefulShutdown("Heroku app shutdown", () => {
    process.exit(0);
  });
});

require("./users");
require("./passport");
require("./article");
