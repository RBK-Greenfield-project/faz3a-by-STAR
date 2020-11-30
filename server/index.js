var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');
var path = require('path')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(__dirname + '/../react-client/dist'));

var MyDataBase = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database: 'faz3etak'

});
app.put("/update", function(req, res) {
    // console.log("hi from server");
    const title = req.body.title;
    const description = req.body.description;
    const category = req.body.category;
    // const sqlInsert = "INSERT INTO Items( title) VALUES ('${title}')";
    MyDataBase.query(
      "UPDATE sara SET  name = (?),email = (?), phone = (?) ",
      [title, description, category],
      (err, result) => {
        if (err) console.log(err);
        // console.log("1 record inserted");
      }
    );
    res.send("result");
    // res.end();
  });


app.listen(3000, function() {
  console.log('listening on port 3000!');
});
