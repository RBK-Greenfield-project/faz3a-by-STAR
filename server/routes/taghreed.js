// const express = require("express");
// const mysql = require("mysql");
// const cors = require("cors");
// const app = express();
// const bcrypt = require("bcrypt");

// app.use(express.json());
// app.use(cors());
// // app.use(
// //   cors({
// //     origin: ["http://localhost:3000"],
// //     methods: ["GET", "POST"],
// //     credentials: true,
// //   })
// // );
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "0000",
//   database: "faz3etak",
// });
// // app.get("/signIN", (req, res) => {
// //   if (req.session.user) {
// //     res.send({ loggedIn: true, user: req.session.user });
// //   } else {
// //     res.send({ loggedIn: false });
// //   }
// // });

// app.post("/signIN", (req, res) => {
//   const email= req.body.email;
//   const password = req.body.password;

//   db.query(
//     "SELECT * FROM users WHERE email = ? AND password = ?",
//     [email, password],
//     (err, result) => {
//       if (err) {
//         res.send({ err: err });
//         // console.log("err from server");
//       }

//       if (result.length > 0) {
//         // bcrypt.compare(password, result[0].password, (error, response) => {
//           // if (result) {
//             // req.session.user = result;
//             // console.log(req.session.user);
//             res.send(result);
//           } else {
//             res.send({ message: "Wrong emailaddress/password combination!" });
//           }
//         // });
//       // }
//        else {
//         res.send({ message: "User doesn't exist" });
//       }
//     }
//   );
// });
