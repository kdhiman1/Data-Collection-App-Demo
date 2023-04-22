const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRouter = require('./Routes/routes.js')
const flash = require('express-flash');
const session = require('express-session');
const path = require('path');
const cors = require("cors");
var db = mongoose;

const app = express();

db.mongoose
  .connect("mongodb+srv://admin-karan:<password>@seproddemo.mh3iz.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to the Database successfully");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(session({
    secret: 'SEPROD',
    resave: false,
    saveUninitialized: true,
}));
app.use(flash());
app.use("/", userRouter);
app.use(express.json());
app.use(cors());

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
