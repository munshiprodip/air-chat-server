const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const moment = require("moment");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
const server = http.createServer(app);
dotenv.config();

const io = require("socket.io")(server);
global.io = io;

app.locals.moment = moment;
app.use(express.json());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser(process.env.JWT_SECRET));

// import route
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const messageRoute = require("./routes/messageRoute");
// import middleware
const { errorHandler } = require("./middleware/errorHandler");

// database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connection successful!"))
  .catch((err) => console.log(err));

app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/message", messageRoute);

// set static folder
app.use(express.static(path.join(__dirname, "public/uploads")));

app.get("/", (req, res) => {
  res.send("Server started");
});

app.use(errorHandler);

server.listen(process.env.PORT || 5000, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});
