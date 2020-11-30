// var express = require("express");
// var bodyParser = require("body-parser");
// var cors = require("cors");
// // UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// // var items = require("../database-mysql/index.js");
// var mysql = require("mysql");
// var app = express();
// var db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "0000",
//   database: "faz3etak",
// });
// db.connect(function(err) {
//   if (!err) {
//     console.log("Connected");
//   }
// });
// // UNCOMMENT FOR REACT
// app.use(express.static(__dirname + "/../react-client/dist"));
// // app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());
// app.put("/update", function(req, res) {
//   // console.log("hi from server");
//   const title = req.body.title;
//   const description = req.body.description;
//   const category = req.body.category;
//   // const sqlInsert = "INSERT INTO Items( title) VALUES ('${title}')";
//   db.query(
//     "UPDATE Items SET  title = (?),description = (?), category = (?) ",
//     [title, description, category],
//     (err, result) => {
//       if (err) console.log(err);
//       // console.log("1 record inserted");
//     }
//   );
//   res.send("result");
//   // res.end();
// });
// app.listen(3000, function() {
//   console.log("listening on port 3000!");
// });