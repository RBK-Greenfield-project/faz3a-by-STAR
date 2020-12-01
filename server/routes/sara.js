const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

// const bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
// const session = require("express-session");

// const bcrypt = require("bcrypt");
// const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(
  cors(
    // origin: ["http://localhost:3000"],
    // methods: ["GET", "POST"],
    // credentials: true,
  )
);
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(
//   session({
//     key: "userId",
//     secret: "subscribe",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       expires: 60 * 60 * 24,
//     },
//   })
// );

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0000",
  database: "faz3etak",
});
app.get('*', (req,res) =>{
  console.log('doneeee');

});

app.post("/SignUp1", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
console.log("in post ")
  // bcrypt.hash(password, saltRounds, (err, hash) => {
  //   if (err) {
  //     console.log(err);
  //   }

    db.query(
      "INSERT INTO users (email, password) VALUES (?,?)",
      [email, password],
      (err, result) => {
        console.log(err);
      }
    );
  });
});

// app.get("/signIN", (req, res) => {
//   if (req.session.user) {
//     res.send({ loggedIn: true, user: req.session.user });
//   } else {
//     res.send({ loggedIn: false });
//   }
// });
