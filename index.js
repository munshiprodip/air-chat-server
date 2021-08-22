const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const moment = require("moment");
const cookieParser = require("cookie-parser");

const app = express();
const server = http.createServer(app);
dotenv.config();

const io = require("socket.io")(server);
global.io = io;

app.locals.moment = moment;
app.use(express.json());
app.use(cors());
app.use(cookieParser(process.env.JWT_SECRET));

//
const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const messageRoute = require("./routes/messageRoute");

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

app.get("/", (req, res) => {
  res.send("Server started");
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json(err.message);
});

server.listen(process.env.PORT, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});
